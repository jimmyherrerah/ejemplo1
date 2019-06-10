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

router.put('/:id', (req, res, next)=>{
	var id = req.params.id;
	var modifiedPersona = {};
	var originalPersona = {};
	personaCollection = personaCollection.map((e, i)=>{
		if(e.id === id){
			originalPersona = Object.assign({}, e);
			return modifiedPersona = Object.assign({}, e, req.body);
		}
		return e; //retorna en e donde se hace una busqueda en el diccionario de datos
	});
	res.status(403).json({ o: originalPersona, m: modifiedPersona});
});
//metodo put

router.delete('/:id', (req, res, next)=>{
	res.status(403).json({msg:"not implemented"});

});
//metodo delete


module.exports = router;
