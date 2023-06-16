const express = require('express')
const router = express.Router()
const Usuario = require('../model/usuarioModel')

// obtener todos los registros
router.get('/obtenerRegistros', async (req, res)=>{
    const usuario = await Usuario.find();
    res.json(usuario)
});

// obtener un registro
router.get('/obtenerRegistro/:id', async (req, res)=>{
    const {id} = req.params
    const usuario = await Usuario.findById(id)
    res.json(usuario)
});

// agregar un registro
router.post('/agregarRegistro', async (req, res)=>{
    const usuario = new Usuario(req.body)
    console.log(usuario)
    await usuario.save()
    res.redirect('/obtenerRegistros')
});

// eliminar un registro
router.get('/eliminarRegistro/:id', async (req, res)=>{
    const {id} = req.params
    await Usuario.remove({_id: id})
    res.redirect('/obtenerRegistros')
});

// editar un registro
router.post('/editarRegistro/:id', async (req, res)=>{
    const{id} = req.params
    await Usuario.update({_id:id}, req.body)
    res.redirect('/obtenerRegistros')
});

module.exports = router

