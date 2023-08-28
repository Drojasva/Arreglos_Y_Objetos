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
            // Más propiedades en alquiler...
        ];

        const propiedades_venta = [
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
            // Más propiedades en venta...
        ];

        function generarContenidoPropiedad(property) {
            return `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${property.src}" class="card-img-top" alt="Imagen de propiedad" />
                        <div class="card-body">
                            <h5 class="card-title">${property.nombre}</h5>
                            <p class="card-text">${property.descripcion}</p>
                            <p><i class="fas fa-map-marker-alt"></i> ${property.ubicacion}</p>
                            <p><i class="fas fa-bed"></i> ${property.habitaciones} |
                                <i class="fas fa-bath"></i> ${property.habitaciones}
                            </p>
                            <p><i class="fas fa-dollar-sign"></i> ${property.costo}</p>
                            <p class="${property.smoke ? 'text-success' : 'text-danger'}">
                                <i class="fas ${property.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                                ${property.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                            </p>
                            <p class="${property.pets ? 'text-success' : 'text-danger'}">
                                <i class="fas fa-paw"></i>
                                ${property.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        const propertyContainer = document.querySelector('.property-container');
        if (propertyContainer) {
            propiedades_venta.forEach(property => {
                const propertyTemplate = generarContenidoPropiedad(property);
                propertyContainer.innerHTML += propertyTemplate;
            });
        }

        const propertyContainerRent = document.querySelector('.property-container-rent');
        if (propertyContainerRent) {
            propiedades_alquiler.forEach(property => {
                const propertyTemplate = generarContenidoPropiedad(property);
                propertyContainerRent.innerHTML += propertyTemplate;
            });
        }
