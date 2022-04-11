const data = {
    usuario: {
        email: "mgalperin@udesa.edu.ar",
        usuario:"Marcos Galperin",
        contraseña:"galperin",
        fechaDeNacimiento:'12/08/1990',
        documento:"34789473",
        fotoDePerfil:"https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2017/12/12/13362/201712120754000043b0c39eff8099e6fb412b10166e81.jpg"
        //Serán los datos del usuario logueado. Los datos deben ser coherentes con la información pedida en el formulario de registro.
    },

    productos : [
        {marca: "Nike", modelo: "ZOOM 2K", descripcion: "Las zapatillas gruesas cuentan con una parte superior de cuero, tela y material sintético, así como alas laterales de goma, amortiguación Zoom Air y suela de goma.", imagen: "https://static.runnea.com/images/201901/nike-zoom-2k-ao0354-100-foto-1-XxXx80.jpg?1", fechaDeCarga:"17/03/2022"}, 
        {marca: "Nike", modelo: "CRATER IMPACT", descripcion: "Crater Impact es un paso en ese viaje. Basado en nuestro espíritu de reciclaje, Crater Impact utiliza desechos de forma encubierta, incorporando contenido reciclado y material de bajo impacto de manera discreta.", imagen: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0f8a1594-d70f-4e9e-a902-b5a64c39c59a/calzado-crater-impact-0v24WZ.png",fechaDeCarga:"19/03/2022"},
        {marca: "Nike", modelo: "REACT ART3MIS", descripcion: "tiene estallidos vibrantes de carmesí y voltio y azul claro en los ojales que llaman la atención de muchos. Para mayor comodidad, tiene una espuma React de doble densidad y un cuello acolchado.", imagen: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3624a0a1-ce97-412d-885f-dc6d8ef94ff4/calzado-react-art3mis-Hnj2RV.png",fechaDeCarga:"12/01/2022" },
        {marca: "Nike", modelo: "AIR FORCE 1", descripcion: "El Air Force 1 presenta una parte superior que se viste con mayor frecuencia en cuero, un Swoosh grande en los lados lateral y medial, puntera perforada, cordones de metal y una entresuela encapsulada con aire con el texto AIR de la firma cerca de la parte trasera.", imagen: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f094af40-f82f-4fb9-a246-e031bf6fc411/calzado-air-force-1-07-GCkPzr.png",fechaDeCarga:"1/03/2022"},
        {marca: "Nike", modelo: "DUNK", descripcion: "Nike Dunk fue una combinación artística de diferentes zapatillas, una práctica de diseño común en Nike para las zapatillas de baloncesto de los 80.", imagen: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/af53d53d-561f-450a-a483-70a7ceee380f/dunk-low-zapatillas-t9dFBx.png",fechaDeCarga:"17/06/2022"},
        {marca: "Nike", modelo: "AIR MORE UPTEMPO", descripcion: "La Nike Air More Uptempo es una popular zapatilla de baloncesto que debutó en 1996. Las letras AIR se inspiran en objetos de gran tamaño del arte pop y el grafiti de los 90. Fue diseñado por Wilson Smith y Scottie Pippen lo hizo famoso a finales de los 90.", imagen: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/xqfq9zfxgdmslr000pp3/nike-air-more-uptempo-obsidian-release-date.jpg",fechaDeCarga:"14/09/2022" },
        {marca: "Adidas", modelo: "ULTRABOOST", descripcion: "El Adidas Ultraboost 22 es un entrenador de servicio pesado con máxima amortiguación para carreras fáciles y de recuperación. Tiene una marcha estable y es una de las zapatillas para correr más cómodas del mercado, aunque es muy cara.", imagen: "https://static.runnea.com/images/201801/ultraboost-40-ficha-400x400x80xX.jpg?1", fechaDeCarga:"27/05/2022"},
        {marca: "Adidas", modelo: "YEEZY", descripcion: "Adidas Yeezy es una colaboración de moda entre la empresa alemana de ropa deportiva Adidas y el diseñador, rapero, empresario y personalidad estadounidense Kanye West. La colaboración se ha hecho notable por sus combinaciones de colores de edición limitada de gama alta y los lanzamientos generales que ofrece la línea de zapatillas Yeezy Boost.", imagen:"https://cdn.shopify.com/s/files/1/0255/9429/8467/products/adidas-originals-yeezy-boost-350-v2-core-blackred_1_1000x1000.jpg?v=1627983720",fechaDeCarga:"17/11/2021"},
        {marca: "Adidas", modelo: "NMD R1", descripcion: "El adidas NMD R1 también se conoce como adidas NMD Runner. Es una zapatilla baja que presenta Primeknit, malla o neopreno sobre una suela Boost. Después de debutar en diciembre de 2015, se lanzaron varias versiones diferentes de la zapatilla. Actualmente es una de las zapatillas de running más populares hasta la fecha.", imagen: "https://images.stockx.com/images/adidas-NMD-R1-Oreo.png?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&q=90&dpr=2&trim=color&updated_at=1606939692",fechaDeCarga:"11/03/2021"},
        {marca: "Converse", modelo: "CHUCK TAYLOR ALL STAR", descripcion: "El zapato consta de una parte superior cosida, una puntera que generalmente está hecha de caucho blanco y una suela que generalmente está hecha de caucho marrón o tostado.", imagen: "https://http2.mlstatic.com/D_NQ_NP_891880-MLA44413167599_122020-O.webp",fechaDeCarga:"23/08/2021"},
    ],
    
    comentarios: [
        {}
    ],
}
module.exports = data
