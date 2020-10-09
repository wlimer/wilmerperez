'use strict';

// Variables:
// Json con la metadata de los atributos de las personas:
const persona = {
	nombre: "Wilmer Perez Bermudez",
	profesion: "Desarrollador junior",
	correo: "wperez1482gmail.com",
	telefono: "+57 313 6502696",
	perfil: "Soldador en electrido Revestido SMAW ,MIG,Autogena,Fluxcord , Electricista ,Manejo de Herramientas menores, Lectura de  planos ,Operador de carro canasta tipo Escalera y Manlift ,cortes de materiales con plasma y Arcair,conocimiento en señales de izajes para gruas  y puente gruas,ingles basico,Trabajos en alturas y espacios confinados.",
	habilidades: {
		comunicativas:['Asertivo, ','Persuasivo, ','Actitud Positiva, ','Tolerancia, ','Respeto, ','Diálogo Abierto, ','Orden, ','Apoyo','trabajo en Equipo'],
		gestion: ['Liderazgo, ','Evaluación de Proyectos, ','Responsabilidad, '],
		tecnicas: ['Soldador Smaw y mig, ','Operario integral en instalaciones electricas domiciliarias, ']
	},
	hobbies: ['Escuchar Música, ', 'Ver Peliculas, ', 'Tocar Guitarra, ', 'Jugar soccer']
}

// Dejar intácto a partir de aquí.
// Constantes SENA:
const banner = "https://3.bp.blogspot.com/-TkVKyVxdxgQ/U2kGFcBl3LI/AAAAAAAABVo/zrDM3ittaz0/s1600/Banner+Soy+Cultura+SENA+-+CTMA.png";
// Mostramos el objeto persona en la consola:
console.log(persona);

function dataUser(){
	// Head titulo:
	$('#titulo').html(persona.nombre);
	// Header:
	$('#nombre').html(persona.nombre);
	$('#profesion').html(persona.profesion);
	// Footer:
	$('#correo').html(persona.correo);
	$('#telefono').html(persona.telefono);
	// Sección lateral:
	$('#banner').html('<img src="'+banner+'" class="img-fluid mt-2" alt="">');
	$('#perfil').html(persona.perfil);
	$('#comunicativas').html(persona.habilidades.comunicativas);
	$('#gestion').html(persona.habilidades.gestion);
	$('#tecnicas').html(persona.habilidades.tecnicas);
	// Invocamos una segunda función para traer cada uno de los elementos del arreglo:
	var aficiones = persona.hobbies.map(function(bar){
		return '<li class="list-group-item">'+bar+'</li>' 
	});
	$('#hobbies').html(aficiones);
}