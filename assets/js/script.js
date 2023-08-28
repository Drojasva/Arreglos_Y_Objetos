
const propiedades_alquiler = [
  {
    nombre: 'Property A',
    src: 'path/to/image1.jpg',
    descripcion: 'Description of property A.',
    ubicacion: 'Location A',
    habitaciones: 3,
    costo: 1200,
    smoke: false,
    pets: true
  },
  // ... add more properties for rent
];

const propiedades_venta = [
  {
    nombre: 'Property X',
    src: 'path/to/image2.jpg',
    descripcion: 'Description of property X.',
    ubicacion: 'Location X',
    habitaciones: 4,
    costo: 250000,
    smoke: true,
    pets: false
  },
  // ... add more properties for sale
];

  const propertyContainer = document.querySelector('.property-container');

// For properties for sale
propiedades_venta.forEach(property => {
  const propertyTemplate = `
    <div class="col-md-4">
      <div class="property">
        <img src="${property.src}" alt="${property.nombre}" />
        <h3>${property.nombre}</h3>
        <p>${property.descripcion}</p>
        <!-- Other property details -->
      </div>
    </div>
  `;
  propertyContainer.innerHTML += propertyTemplate;
});

// For properties for rent
propiedades_alquiler.forEach(property => {
  const propertyTemplate = `
    <div class="col-md-4">
      <div class="property">
        <img src="${property.src}" alt="${property.nombre}" />
        <h3>${property.nombre}</h3>
        <p>${property.descripcion}</p>
        <!-- Other property details -->
      </div>
    </div>
  `;
  propertyContainer.innerHTML += propertyTemplate;
});

${property.smoke ? 'Smoking Allowed' : 'No Smoking'}
${property.pets ? 'Pets Allowed' : 'No Pets Allowed'}

  
  // Generar tarjetas de propiedades en venta y alquiler
 //  generarTarjetas(propiedadesVenta, 'venta');
 //  generarTarjetas(propiedadesAlquiler, 'alquiler');
  
