const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbconexion } = require("./database/configdb");

const bodyParser = require("body-parser");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.paths = {
      usuarios: "/usuarios",
      auth: "/auth",
      reservas: "/reservas",
      reservaciones: "/reservaciones",
      administracion: "/administracion",
      ventas: "/ventas",
      facturas: "/facturas",
      pedidos: "/pedidos",
      registro: "/registropedidos",
    };

    //conexion a la base de datos
    this.conectardb();

    //midelwares de mi aplicacion
    this.midelwares();

    //rutas de mi aplicacion
    this.routes();
  }

  async conectardb() {
    await dbconexion();
  }

  //midelware
  midelwares() {
    //middleware de cors
    this.app.use(cors());

    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    this.app.use(bodyParser.json());

    // Motor de plantilla
    this.app.set("view engine", "ejs");
    this.app.set("views", __dirname + "/views");

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.auth, require("./routes/auth.router"));
    this.app.use(this.paths.usuarios, require("./routes/user.routes"));
    this.app.use("/", require("./routes/index.router"));
    this.app.use(this.paths.reservas, require("./routes/reservas.router"));
    this.app.use(
      this.paths.reservaciones,
      require("./routes/reservaciones.router")
    );
    this.app.use(
      this.paths.administracion,
      require("./routes/administracion.router")
    );
    this.app.use(this.paths.ventas, require("./routes/ventas.router"));
    this.app.use(this.paths.facturas, require("./routes/facturas.router"));
    this.app.use(this.paths.pedidos, require("./routes/pedidos.router"));
    this.app.use(
      this.paths.registro,
      require("./routes/registropedidos.router")
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor escuchando en el puerto: ", this.port);
    });
  }
}
module.exports = Server;
