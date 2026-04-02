import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', function() {
    
    const galeria = document.getElementById('galeria');
    if (galeria) {
        const imagenes = galeria.querySelectorAll('.galeria-img');
        console.log('Imágenes de galería encontradas:', imagenes.length);
        
        imagenes.forEach(imagen => {
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

    const btnDato = document.getElementById('btn-dato-curioso');
        const btnDet1 = document.getElementById('btn-dato-det1');
    if (btnDet1) {
        btnDet1.addEventListener('click', function() {
            Swal.fire({
                title: 'Dato curioso',
                text: '¿Sabías que el Scotch Pie se come tradicionalmente en los estadios de fútbol escoceses?',
                icon: 'info',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#1B4D8C'
            });
        });
    }
    
    const btnDet2 = document.getElementById('btn-dato-det2');
    if (btnDet2) {
        btnDet2.addEventListener('click', function() {
            Swal.fire({
                title: 'Dato curioso',
                text: '¿Sabías que el Shortbread era considerado un lujo y se reservaba solo para ocasiones especiales?',
                icon: 'info',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#1B4D8C'
            });
        });
    }
});