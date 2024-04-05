function ordenarProductos() {
	var opcionSeleccionada = $('#filtro-productos').val();
	// Lógica para ordenar las tarjetas de productos
	
  }


function crearCard(data) {
	return `
        <div class="card shadow p-0">
            <img src="${data.img}" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
                <p class="card-title">${data.title}</p>
                <p class="card-subtitle">${data.subtitle}</p>
                <p class="card-text"><span class="fa fa-map-marker-alt"></span> ${data.text}</p>
                <hr />
                <p class="text-price">$${data.price} <span class="special-price">$${data.specialPrice}</span></p>
            </div>
        </div>`;
}

function leerDatos(){
	var lst = [
		{	
			title: "Plumón Coral Fleece estampado en modelo y tamaño a elección",
			subtitle: "Plumones Manolino",
			text: "9191 Avenida Vitacura, Chile",
			price: "45.990",
			specialPrice: "22.990",
		},
		{	
			title: "Entrada para compartir + platos de fondo + postres + bebestibles",
			subtitle: "V for Vegan",
			text: "777 Jesse Pinkman, Chile",
			price: "30.990",
			specialPrice: "12.990",
		},
		{	
			title:
				"Evaluación integral + blanqueamiento dental led + limpieza + fluoración",
			subtitle: "Clínica Dental Quijada",
			text: "1342, Blanco Encalada, Chile",
			price: "300.000",
			specialPrice: "25.990",
		},
		{	
			title: "Colación para 2 personas + postre (no incluye bebidas)",
			subtitle: "Suricata almacen",
			text: "1071 Miguel Claro, Chile",
			price: "4.200",
			specialPrice: "2.100",
		},
		{	
			title: "1, 2 o 4 tickets para Stukids. Elige sucursal",
			subtitle: "Stukids Centro de Eventos",
			text: "133 El tranque, Chile",
			price: "4.000",
			specialPrice: "2.500",
		},
		{
			title: "San Pedro de Atacama : 1 o 2 noches en alojamiento a elección",
			subtitle: "D-Latam Travel",
			text: "-",
			price: "80.200",
			specialPrice: "44.100",
		},
	];
	return lst;
}

$(document).ready(function () {
	var lst = leerDatos();
	// Crear las tarjetas para cada objeto en lst
	lst.forEach(function (item,index) {
		// Agregar el nombre de la imagen al objeto
		item.img = "assets/img/cupon-" + (index + 1) + ".jpg";
		var card = crearCard(item);
		$("#productos").append(card);
	});
});
