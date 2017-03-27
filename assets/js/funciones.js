
function color(){
	//Obtener mediante un prompt el color de fondo que quiera darle a su comentario, guardarlo en una variable.
	var colorFondo = prompt("Escribe el color de fondo que quieres en Hexadecimal");
	//Acceder a la caja de texto y asignarle al background el color de fondo dado por el usuario.
	document.getElementById('previo').style.background=colorFondo
}

function colorLetra(){
	var colorTexto = prompt("Escribe el color de letra que quieres en Hexadecimal");
	document.getElementById('previo').style.color=colorTexto
}
function letraChica(){
	document.getElementById('previo').style.fontSize = '20px';
}
function letraMediana() {
	document.getElementById('previo').style.fontSize = '30px';
}
function letraGrande(){
	document.getElementById('previo').style.fontSize = '50px';
}
function textoIzquierda(){
	document.getElementById('previo').style.textAlign = 'left';
}
function centrar(){
	document.getElementById('previo').style.textAlign = 'center';
}
function textoDerecha(){
	document.getElementById('previo').style.textAlign = 'right';
}
function enviar (){
	var nodoParrafo = document.createElement("P");
	var nuevoComentario = document.getElementById("previo").innerHTML;
	var comentarioTextNode = document.createTextNode(nuevoComentario);
	var comentarios = document.getElementById('comentarios');
	nodoParrafo.appendChild(comentarioTextNode);
	comentarios.insertBefore(nodoParrafo, comentarios.childNodes[0]);

	var separador = document.createElement("hr");
    comentarios.insertBefore(separador, comentarios.firstChild);
	

	//IMPORTAR ESTILOS
	//Importa color de fondo
	var fondo = document.getElementById("previo").style.background;
	nodoParrafo.style.background = fondo;
	//Importa color de texto
	var colorLetra = document.getElementById("previo").style.color;
	nodoParrafo.style.color = colorLetra;
	//Importa tamaño de texto
	var size = document.getElementById("previo").style.fontSize;
	nodoParrafo.style.fontSize = size;
	//Importa alineación de texto
	var alineacion = document.getElementById("previo").style.textAlign;
	nodoParrafo.style.textAlign = alineacion;
	
}

function previsualizar(){
	var texto = document.getElementById("caja").value
	var parrafoDePrevisualizacion = document.getElementById('previo');
	parrafoDePrevisualizacion.innerHTML = texto;

	
}



