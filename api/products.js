import config from '../config.js';
import Model from '../models/products.js';
const model = Model.get(config.PERSISTENCE_TYPE);

/*creates PARA TESTING:
await model.createProduct({
		"name": "Trencity Kit avanzado",
		"price": "8990",
		"stock": "20",
		"brand": "Trencity",
		"category": "Pistas",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Trencity es un sistema de vías y Vehículos coleccionable con piezas encastrables de alta calidad",
		"longDescription": "¿Qué es Trencity? Es un sistema de vías y Vehículos coleccionable de encastre. Este juguete, junto con los otros kits de accesorios y Vehículos, permite crear la ciudad de tus sueños. No necesita energía de ningún tipo. Trencity es un sistema de vías y Vehículos coleccionable con piezas encastrables de alta calidad.",
		"mainPhoto": "product_169091389.jpg",
		"id": "1"
	});
	await model.createProduct({
		"name": "Trencity grúa magnética",
		"price": "8990",
		"stock": "35",
		"brand": "Trencity",
		"category": "Pistas",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": "Contiene 18 piezas en TOTAL: 1 tren reciclado (locomotora, 1 cruce, 4 rectas grandes y 12 curvas grandes). Medidas: 105 x 47 cm. Colores disponibles: Verde y rojo",
		"longDescription": "¡Amplía tu ciudad e inventa nuevas historias! Con los accesorios de Trencity podes hacer tus recorridos mas interesantes y divertidos. Incluye rampa y barril, posee enganche magnético y sistema levadizo. Control total de movimiento. Trencity te permite armar infinitas variantes y construir historias que estimulan la imaginación y la creatividad de los niños! Diseñado y fabricado en Argentina.",
		"mainPhoto": "product_169091391.jpg",
		"id": "2"
	});
	await model.createProduct({
		"name": "Trencity camion Tronky",
		"price": "3200",
		"stock": "15",
		"brand": "Trencity",
		"category": "Pistas",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Medidas: 8 cm",
		"longDescription": "¿Que es Trencity? Es un sistema de vías y Vehículos coleccionable de encastre. Este Juguete junto a los otros kits de accesorios y Vehículos, permiten crear la ciudad de tus sueños. No necesita energía de ningún tipo. Los Vehículos son los protagonistas de las historias de Trencity. Viví las aventuras de Tronky, ¡incluye un leño!",
		"mainPhoto": "product_169091393.jpg",
		"id": "3"
	});
	await model.createProduct({
		"name": "Monster Jam vehículo",
		"price": "5000",
		"stock": "35",
		"brand": "Vulcanita",
		"category": "Vehículos",
		"ageFrom": "4",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Medidas: 8 cm.",
		"longDescription": "¡Colecciona todos los camiones de fundición a presión exclusivos de Monster Jam! Escala 1:64. Las famosas camionetas 'pisa-coches' del show conocido Monster Jam y ahora estas llegan a tu hogar con los Vehículos mas icónicos para que hagas piruetas hasta que te canses, diversión sin fin.",
		"mainPhoto": "product_169091395.jpg",
		"id": "4"
	});
	await model.createProduct({
		"name": "Pinypon Pizzeria",
		"price": "18500",
		"stock": "27",
		"brand": "Vulcanita",
		"category": "Muñecos",
		"ageFrom": "43",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Pinypon ayuda a desarrollar la imaginación de los niños gracias al enorme mundo de juego que abarca. Un juguete de Pinypon es un mundo infinito de imaginación, juego y diversión. Ayuda a desarrollar la sociabilidad de los niños",
		"longDescription": "La Pizzeria de las Pinypon tiene un horno giratorio para preparar las pizzas. Además de todo eso se pueden cambiar los menús de pizzas y bebidas, tiene una barrera para que la moto recoja los pedidos y parasol para los días calurosos, reloj en la parte trasera. Vienen incluidos muchas pizzas, porciones, ingredientes para añadir y las cajas para transportar las pizzas. Incluye figura de Hannah y muchos accesorios propios de una pizzería.",
		"mainPhoto": "product_169091400.jpg",
		"id": "5"
	});
	await model.createProduct({
		"name": "Pinypon vehiculo hamburgueseria",
		"price": "47850",
		"stock": "23",
		"brand": "Vulcanita",
		"category": "Muñecos",
		"ageFrom": "4",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Pinypon ayuda a desarrollar la imaginación de los niños gracias al enorme mundo de juego que abarca. Un juguete de Pinypon es un mundo infinito de imaginación, juego y diversión. Ayuda a desarrollar la sociabilidad de los niños",
		"longDescription": "Puedes mezclar y crear hamburguesas al gusto, acompañándolas de bebidas y papitas, con cajitas y bandejitas. Hay mesitas, una caja registradora y pequeños accesorios para comer. La camioneta, que se puede cerrar parcialmente, contiene 3 cajones, un compartimento para guardar 30 accesorios y un capó que se abre. Incluye la figura de la camarera.",
		"mainPhoto": "product_169091401.jpg",
		"id": "6"
	});
	await model.createProduct({
		"name": "Disfraz la casa de muñecas de Gabby",
		"price": "9850",
		"stock": "43",
		"brand": "Vulcanita",
		"category": "Disfraces",
		"ageFrom": "3",
		"ageUpTo": "8",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": "3 talles disponibles Talle 1 (3-4 años 95-113 cm aprox) Talle 2 (5-6 años 113-123 cm aprox) Talle 3 (7-8 años 123-133 cm aprox)",
		"longDescription": "Hermoso disfraz de Gabby!! ¡Gatos lindos, manualidades divertidas y magia colorida! Gabby y sus múltiples amigos felinos se abren camino a través de su espectacular casa de muñecas, con mini-mundos y sorpresas interminables.",
		"mainPhoto": "product_169091403.jpg",
		"id": "7"
	});
	await model.createProduct({
		"name": "La casa de muñecas de Gabby tatuajes",
		"price": "2850",
		"stock": "36",
		"brand": "Vulcanita",
		"category": "Varios",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": "Kit en blister de 8 planchas compuesta de 24 transfies multicolores para el cuerpo Hipoalergénico Dermatologicamente testeado según test de indices de irritación primaria dérmica zappy tranfer",
		"longDescription": "Son fáciles de pegar y de sacar con agua y jabón!! Gabby y sus múltiples amigos felinos se abren camino a través de su espectacular casa de muñecas, con minimundos y sorpresas interminables. ¡Gatos lindos, manualidades divertidas y magia colorida!",
		"mainPhoto": "product_169091405.jpg",
		"id": "8"
	});
	await model.createProduct({
		"name": "La casa de muñecas de Gabby pulseras",
		"price": "3250",
		"stock": "17",
		"brand": "Vulcanita",
		"category": "Varios",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Set de Bijouterie encastrable para armar. Contiene: <li>Pulseras</li> <li>Dijes</li> <li>Mostacillas</li>",
		"longDescription": "Uní las piezas entre ellas encastrando para que quede firme. Gabby y sus múltiples amigos felinos se abren camino a través de su espectacular casa de muñecas, con mini-mundos y sorpresas interminables. ¡Gatos lindos, manualidades divertidas y magia colorida!",
		"mainPhoto": "product_169091406.jpg",
		"id": "9"
	});
	await model.createProduct({
		"name": "Harry Potter figura Ron",
		"price": "9750",
		"stock": "22",
		"brand": "Vulcanita",
		"category": "Muñecos",
		"ageFrom": "5",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "¡Experimentá la magia de Harry Potter! Ron usa su uniforme de Hogwarts con un suéter de Gryffindor. ¡Articula a Ron de la forma que quieras, mueve sus brazos y finge lanzar hechizos icónicos como Wingardium Leviosa! Medidas: 20 cm",
		"longDescription": "Los jóvenes brujos, magos y muggles pueden recrear escenas con estos juguetes coleccionable imprescindibles de Harry Potter. ¡Crea infinitas aventuras en el mundo mágico con la muñeca Ron Weaslry de 20 cm! Lindos detalles faciales, cabello largo y rizado suave y cinco puntos de articulación dan vida a este querido personaje de Harry Potter.",
		"mainPhoto": "product_169091408.jpg",
		"id": "10"
	});
	await model.createProduct({
		"name": "Nenuco llorón",
		"price": "15250",
		"stock": "24",
		"brand": "Vulcanita ",
		"category": "Muñecos",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": "Nenuco de 30 cm cuerpo suave con dos funciones: al ponerle el chupete hace ruiditos de succión y al quitárselo llora, además puede meterse el dedo en la boca como ¡los bebés de verdad! 2 diferentes surtidos. Medida: 22 cm",
		"longDescription": "Los Muñecos bebé Nenuco son tiernos suaves e irresistibles para niños desde los 10 meses hasta los 7 años. Su olor a bebé incita a cuidarlos, mimarlos y darles mucho cariño. Además de divertirse en grande, los niños que juegan con Nenuco aprenden valores pedagógicos que fomentan su desarrollo, sociabilidad, capacidades cognitivas, comunicativas y motoras.",
		"mainPhoto": "product_169091411.jpg",
		"id": "11"
	});
	await model.createProduct({
		"name": "Nenuco paseo con Mateo",
		"price": "43250",
		"stock": "48",
		"brand": "Vulcanita",
		"category": "Muñecos",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "El pack de juguete contiene accesorios como chupete, sonajero y biberón; además de la mochila ajustable donde podrás guardarlos todos.</p Coloca a Mateo en el portabebés y ajusta su cinturón de seguridad; ajusta la mochila porta bebé a tu pecho gracias a las correas ajustables. Medida: 35 cm",
		"longDescription": "Bebé Nenuco de 35 centímetros con cuerpo blandito, vestido con un conjunto estampado y un gorro pescador a juego. Paseo con Mateo es un juguete muy completo que tiene toda la diversión del roleplay de cuidados de Nenuco. Tu pequeño disfrutará jugando en cualquier sitio con su mochila porta-bebés de Nenuco en la que podrán colocar a su muñeco y llevarlo a todos lados",
		"mainPhoto": "product_169091413.jpg",
		"id": "12"
	});
	await model.createProduct({
		"name": "Paw Patrol vehículo con figura",
		"price": "12250",
		"stock": "48",
		"brand": "Vulcanita",
		"category": "Vehículos",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": "¡Preparate para salvar el día junto a los Paw Patrol! Medida aprox 15 cm",
		"longDescription": "Un grupo de seis perritos de rescate dirigidos por un chico experto en tecnología llamado Ryder, tienen muchas aventuras con la patrulla de cachorros, ningún trabajo es demasiado grande y ningún cachorro muy pequeño para proteger a la comunidad. Vehículo con figura extraible. Modelos disponibles: Chase, Rocky, Rubble, Marshall, Skye. ¡Coleccionalos todos!",
		"mainPhoto": "product_169091414.jpg",
		"id": "13"
	});
	await model.createProduct({
		"name": "Casa De Muñecas De Gabby Peluche Pandy",
		"price": "23250",
		"stock": "8",
		"brand": "Vulcanita",
		"category": "Peluches",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Talking Pandy Paws sabe dos canciones y tiene 10 sonidos y frases. Medidas: 30 cm aprox",
		"longDescription": "Este gatito de peluche supersuave y tierno de 33 cm da vida al mejor amigo de Gabby de la serie. Con sus orejas puntiagudas, su adorable cola, sus detalles bordados y su Pandy Pack, Pandy Paws es el compañero perfecto para jugar o dormir. Apretá la pata de Pandy y mantenéla presionada para ver cómo se ilumina, activando canciones felinas.",
		"mainPhoto": "product_169091416.jpg",
		"id": "14"
	});
	await model.createProduct({
		"name": "Spidey Vehiculo Lanza Tazos",
		"price": "7250",
		"stock": "82",
		"brand": "Vulcanita",
		"category": "Vehículos",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Uníte a tu equipo Spidey favorito, con Peter, Gwen y Miles Morales, mientras se unen para detener a los malos y trepar por las paredes. Modelos : Spidey, Ghost Spider, Spider-Man: Miles Morales, Hulk y Duende Verde. Son de rueda libre, lo que significa que podés sacarlos a dar una vuelta",
		"longDescription": "Spidey y sus Sorprendentes Amigos recorren la ciudad en busca de aventuras! Cuando aparece un problema, cada vehículo  puede lanzar un disco web presionando la cabeza del personaje para mantener el peligro bajo control. Los Vehículos vienen con 2 discos cada uno, que se pueden guardar en el capó del automóvil para divertirse mientras viaja.",
		"mainPhoto": "product_169091417.jpg",
		"id": "15"
	});
	await model.createProduct({
		"name": "Lego Mario Bros",
		"price": "2850",
		"stock": "2",
		"brand": "Lego",
		"category": "Bloques",
		"ageFrom": "6",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Lego Mario Bros set de expansión, que incluye una figura de un Fuzzy, un bloque de super-estrella y una plataforma champiñón. Contiene 39 piezas",
		"longDescription": "Favorece la autoestima de los niños porque les hace poner a prueba su potencial creativo y sentirse especialmente orgullosos por las construcciones que consiguen crear. A través del proceso lúdico con juguetes Lego, el niño desarrolla de manera natural e informal un conjunto de capacidades importantes, aumenta su habilidad para explorar e imaginar, favorece las relaciones con otros y mejora la motricidad fina.",
		"mainPhoto": "product_169091421.jpg",
		"id": "16"
	});
	await model.createProduct({
		"name": "Juliana Diseña Imanes De Yeso",
		"price": "3850",
		"stock": "53",
		"brand": "Juliana",
		"category": "Varios",
		"ageFrom": "5",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": "Este set incluye: 6 colores de pintura. Moldes de 6 diseños surtidos. Yeso en polvo. Imán. Varilla para mezclar. Recipiente. Pincel. Manual de instrucciones",
		"longDescription": "El set de Juliana I love Unicorns es ideal para hacer los mejores imanes de yeso. Incluye 6 diseños diferentes, imán autoadhesivo y acrílicos para decorar. Crea los distintos diseños con mucho color. Desde hace 5 años, Juliana está presente en el mundo de las niñas, invitándolas a soñar y a divertirse con cada valijita. Todo lo que ellas quieran ¡es posible!",
		"mainPhoto": "product_169091423.jpg",
		"id": "17"
	});
	await model.createProduct({
		"name": "Phlat Ball Pelota Frisbee",
		"price": "8290",
		"stock": "35",
		"brand": "Vulcanita",
		"category": "Pistas",
		"ageFrom": "5",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Disponible en 3 colores diferentes: rojo, azul y verde. ¡Elige tu preferido! Medidas: 22 cm aprox",
		"longDescription": "Ha llegado Phlat Ball V3, la versión más aerodinámica y rápida que nunca. ¡Es increíble y súper emocionante! ¡Aplastálo, lanzálo, atrapálo! Pasálo a tus amigos y cuando les llegue ¿qué atraparán una bola o un disco? Aplastálo y guardálo en tu mochila para llevarlo a cualquier parte. ¡Es el mejor juego del verano para jugar en todas partes… ¡Nunca te aburrirás!",
		"mainPhoto": "product_169091424.jpg",
		"id": "18"
	});
	await model.createProduct({
		"name": "Bluey Pack X 4 Figuras",
		"price": "13990",
		"stock": "30",
		"brand": "Vulcanita",
		"category": "Muñecos",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": true,
		"shortDescription": "Todas las figuras en este pack tienen brazos y torso en movimiento. Medidas: 6 cm aprox",
		"longDescription": "Bluey es un adorable perro Blue Heeler de seis años, al que le encanta convertir la vida familiar cotidiana en aventuras interminables y divertidas. ¡Llevá a casa el juego divertido e imaginativo de Bluey y su familia con estos lindos packs de figuras de Bluey! Cada paquete de figuras tiene como tema uno de los episodios de Bluey y viene con accesorios para vestir a tus personajes.",
		"mainPhoto": "product_169091427.jpg",
		"id": "19"
	});
	await model.createProduct({
		"name": "Bluey Casa Familiar",
		"price": "47900",
		"stock": "86",
		"brand": "Vulcanita",
		"category": "Muñecos",
		"ageFrom": "3",
		"ageUpTo": "99",
		"ageUnit": "años",
		"freeShipping": false,
		"shortDescription": " Con muchos muebles removibles que incluyen 2 camas, 2 taburetes, 2 sofás, 2 alfombras, una bañera, un inodoro, un mostrador de comedor y un refrigerador, ¡hay mucho que hacer en esta hermosa casa! Incluye: 1 figura Bluey, 10 artículos de muebles y 1 casa",
		"longDescription": "   Bluey es un adorable perro Blue Heeler de seis años, al que le encanta convertir la vida familiar cotidiana en aventuras interminables y divertidas. ¡Recreá algunos de los momentos más memorables del espectáculo en el juego Bluey Family Home! Grande en tamaño y características, esta enorme casa está llena de detalles moldeados con puertas que se abren.",
		"mainPhoto": "product_169091428.jpg",
		"id": "20"
	});*/




////////////////////////////////////////////////////////////////////////////////
//                                 API Get All                                //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.getProducts();
    return products;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Get One                                //
////////////////////////////////////////////////////////////////////////////////

const getProduct = async id => {
    const product = await model.getProduct(id);
    return product;
}

////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Update                                //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Delete                                //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async id => {
    const deletedProduct = await model.deleteProduct(id);
    return deletedProduct;
};

export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};