const express = require('express');
const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');

router.use(express.json());

const nombreSchema = new mongoose.Schema({
  nombre: String
});
const Nombre = mongoose.model('Nombre', nombreSchema);

// Ruta para manejar solicitudes GET a /saludo/:nombre
router.get('/', async (req, res) => {
  try {
    const nombres = await Nombre.find();
    res.json(nombres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint POST para insertar un nuevo nombre en la base de datos
router.post('/', async (req, res) => {
  const nombre = new Nombre({
    nombre: req.body.nombre
  });
  try {
    const nuevoNombre = await nombre.save();
    res.status(201).json(nuevoNombre);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
