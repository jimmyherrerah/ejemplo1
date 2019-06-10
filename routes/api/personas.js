var express = require('express');
var router = express.Router();

var personaCollection = [];
var pesnonaStruct = {
	id:0,
	nombre:'',
	correo:'',
	telefono:'',
	nota:''
}

router.get('/', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo get

router.get('/:id', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo get con un id

router.post('/', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo post

router.put('/', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo put

router.delete('/:id', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo delete


module.exports = router;
