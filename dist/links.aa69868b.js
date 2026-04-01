// src/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // GALERÍA - Lightbox manual
    const galeria = document.getElementById('galeria');
    if (galeria) {
        const imagenes = galeria.querySelectorAll('.galeria-img');
        console.log("Im\xe1genes de galer\xeda encontradas:", imagenes.length);
        imagenes.forEach((imagen)=>{
            imagen.addEventListener('click', function() {
                const imagenUrl = this.src;
                const overlay = document.createElement('div');
                overlay.className = 'lightbox-overlay';
                const imgGrande = document.createElement('img');
                imgGrande.src = imagenUrl;
                imgGrande.className = 'lightbox-image';
                overlay.appendChild(imgGrande);
                document.body.appendChild(overlay);
                overlay.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });
            });
        });
    }
});

//# sourceMappingURL=links.aa69868b.js.map
