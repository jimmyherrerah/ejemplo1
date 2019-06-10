var express = require('express');
var router = express.Router();
var uuid = require('uuid/v4');

var personaCollection = [];
var personaStruct = {
	id:0,
	nombre:'',
	correo:'',
	telefono:'',
	nota:''
}


personaCollection.push(
	Object.assign(
		{},
		personaStruct,
		{
			id:uuid(),
			nombre:'Usuari1',
			correo:'usuari@gmail.com',
			telefono:'88999988',
			nota:'Ella no te ama'
		})

);

router.get('/', (req, res, next)=>{
	res.status(200).json(personaCollection);

});
//metodo get

router.get('/:id', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo get con un id

router.post('/', (req, res, next)=>{
	var newPersona = Object.assign(
		{},
		personaStruct,
		{id:uuid()},
		req.body
		);
	personaCollection.push(newPersona);
	res.status(200).json(newPersona);

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
