
function color(){
	//Obtener mediante un prompt el color de fondo que quiera darle a su comentario, guardarlo en una variable.
	var colorFondo = prompt("Escribe el color de fondo que quieres en Hexadecimal");
	//Acceder a la caja de texto y asignarle al background el color de fondo dado por el usuario.
	document.forms[0].elements["caja"].style.background=colorFondo
}

function colorLetra(){
	var colorTexto = prompt("Escribe el color de letra que quieres en Hexadecimal");
	document.forms[0].elements["caja"].style.color=colorTexto
}
function letraChica(){
	document.forms[0].elements["caja"].style.fontSize = '10px';
}
function letraMediana() {
	document.forms[0].elements["caja"].style.fontSize = '30px';
}
function letraGrande(){
	document.forms[0].elements["caja"].style.fontSize = '50px';
}
function textoIzquierda(){
	document.forms[0].elements["caja"].style.textAlign = 'left';
}
function centrar(){
	document.forms[0].elements["caja"].style.textAlign = 'center';
}
function textoDerecha(){
	document.forms[0].elements["caja"].style.textAlign = 'right';
}
function enviar (){
	var nodoParrafo = document.createElement("P");
	var nuevoComentario = document.getElementById("caja").value;
	var comentarioTextNode = document.createTextNode(nuevoComentario);
	var comentarios = document.getElementById('comentarios');
	nodoParrafo.appendChild(comentarioTextNode);
	comentarios.appendChild(nodoParrafo);
	//IMPORTAR ESTILOS
	//Importa color de fondo
	var fondo = document.getElementById("caja").style.background;
	nodoParrafo.style.background = fondo;
	//Importa color de texto
	var colorLetra = document.getElementById("caja").style.color;
	nodoParrafo.style.color = colorLetra;
	//Importa tamaño de texto
	var size = document.getElementById("caja").style.fontSize;
	nodoParrafo.style.fontSize = size;
	//Importa alineación de texto
	var alineacion = document.getElementById("caja").style.textAlign;
	nodoParrafo.style.textAlign = alineacion;
	
}




