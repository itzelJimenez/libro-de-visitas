function color(){
	var colorFondo = prompt("Escribe el color de fondo que quieres en Hexadecimal");
	document.forms[0].elements["caja"].style.background=colorFondo
}

function colorLetra(){
	var colorTexto = prompt("Escribe el color de letra que quieres en Hexadecimal");
	document.getElementById("caja").style.color=colorTexto;
}


//document.forms[0].elements["cajaTexto"].style.background="azul"