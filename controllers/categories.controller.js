const { response } = require("express");
const { Usuario, Categoria } = require("../models");

const categoriesGet = async (req, res) => {
  const query = { estado: true };

  const categorias = await Categoria.find(query).populate("usuario");
  res.status(200).json({ categorias });
};

const categoriesGetId = async (req, res) => {
  const { id } = req.params;
  const categoria = await Categoria.findById({ _id: id }).populate("usuario");
  res.status(200).json({ categoria });
};

const crearCategoria = async (req, res = response) => {
  const nombre = req.body.nombre.toUpperCase();
  const categoriaDB = await Categoria.findOne({ nombre });
  if (categoriaDB) {
    return res.status(400).json({
      msg: "La categoria ya existe",
    });
  }

  //generar la data a guardar
  const data = {
    nombre,
    usuario: req.usuario._id,
  };

  const categoria = new Categoria(data);

  //guardar en DB
  try {
    await categoria.save();
  } catch (error) {
    console.log(error);
  }

  res.status(201).json(categoria);
};

const categoriesPut = async (req, res) => {
  const id = req.params.id;
  const nombre = req.body.nombre.toUpperCase();
  const categoriaDB = await Categoria.findOne({ nombre });
  if (categoriaDB) {
    return res.status(400).json({
      msg: "La categoria ya existe",
    });
  }
  try {
    const categoriaD = await Categoria.findByIdAndUpdate(id, nombre);
  } catch (error) {
    console.log(error);
  }
  res.json({ categoriaD });
};

const categoriesDelete = (req, res) => {
  res.json({
    msg: "delete",
  });
};

module.exports = {
  categoriesGet,
  categoriesGetId,
  crearCategoria,
  categoriesPut,
  categoriesDelete,
};
