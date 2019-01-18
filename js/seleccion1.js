document.addEventListener('DOMContentLoaded',inicializacion)

	function inicializacion ()
	{	
				var elementos = document.getElementsByTagName('div');
				console.log(elementos);
				console.log(elementos.length);
				console.log(elementos.item(1));
				for (var i = 0; i < elementos.length; i++) {

					console.log('item:',elementos.item(i));
					elementos.item(i).style.color='#399';
				 }
	}