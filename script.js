document.addEventListener('DOMContentLoaded', () => {
    // Countdown
    const weddingDate = new Date('May 16, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "¡Es hoy!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ------------------------------------------------------------------
    // FIREBASE CONFIGURATION (Reemplaza con tus datos reales)
    // ------------------------------------------------------------------
    // 1. Ve a https://console.firebase.google.com/
    // 2. Crea un proyecto nuevo (gratis).
    // 3. Agrega una "Web App" y copia el objeto "firebaseConfig".
    // 4. Pégalo aquí abajo:
    const firebaseConfig = {
        apiKey: "AIzaSyBHF3D9R_EIa6ZOubFotDR-wZjjWDJpczw",
        authDomain: "savethedate-9aff8.firebaseapp.com",
        projectId: "savethedate-9aff8",
        storageBucket: "savethedate-9aff8.firebasestorage.app",
        messagingSenderId: "550107018538",
        appId: "1:550107018538:web:f0f3b976df811c8c5d9a53",
        measurementId: "G-B4Z526CNM0"
    };

    // Inicializar Firebase (Solo si se configuró correctamente)
    let db, storage;
    try {
        if (firebaseConfig.apiKey !== "TU_API_KEY_AQUI") {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            storage = firebase.storage();
            console.log("Firebase conectado.");

            // Escuchar fotos en tiempo real
            listenToGallery();
        } else {
            console.log("Modo Demo: Firebase no configurado aún.");
        }
    } catch (e) {
        console.error("Error inicializando Firebase:", e);
    }

    // ------------------------------------------------------------------
    // LOGICA DE CÁMARA / SUBIDA
    // ------------------------------------------------------------------
    const cameraInput = document.getElementById('camera-input');
    const uploadStatus = document.getElementById('upload-status');
    const liveGallery = document.getElementById('live-gallery');

    if (cameraInput) {
        cameraInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) return;

            uploadStatus.innerText = "Comprimiendo y subiendo...";

            // 1. MODO DEMO (Sin Firebase configurado)
            if (!storage) {
                setTimeout(() => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.className = 'gallery-img fade-in visible';
                        liveGallery.insertBefore(img, liveGallery.firstChild);
                        uploadStatus.innerText = "¡Foto subida! (Modo Demo)";
                        setTimeout(() => uploadStatus.innerText = "", 3000);
                    };
                    reader.readAsDataURL(file);
                }, 1500);
                return;
            }

            // 2. MODO REAL (Con Firebase + Compresión)
            try {
                // Comprimir imagen
                const compressedFile = await compressImage(file);

                // Nombre único
                const fileName = `guest_photos/${Date.now()}_${file.name}`;
                const storageRef = storage.ref().child(fileName);

                // Subir archivo comprimido
                const snapshot = await storageRef.put(compressedFile);
                const downloadURL = await snapshot.ref.getDownloadURL();

                // Guardar en Firestore
                await db.collection('photos').add({
                    url: downloadURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                uploadStatus.innerText = "¡Foto compartida con éxito!";
                setTimeout(() => uploadStatus.innerText = "", 3000);

            } catch (error) {
                console.error("Error subiendo foto:", error);
                uploadStatus.innerText = "Error al subir. Intenta de nuevo.";
            }
        });
    }

    // Helper: Compresión de Imagen
    function compressImage(file) {
        return new Promise((resolve, reject) => {
            const maxWidth = 1280;
            const quality = 0.8;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    let width = img.width;
                    let height = img.height;

                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    canvas.toBlob((blob) => {
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error("Error al comprimir la imagen."));
                        }
                    }, 'image/jpeg', quality);
                };
                img.onerror = (error) => reject(error);
            };
            reader.onerror = (error) => reject(error);
        });
    }

    // Función para escuchar cambios en la base de datos
    function listenToGallery() {
        db.collection('photos')
            .orderBy('timestamp', 'desc')
            .limit(20)
            .onSnapshot((snapshot) => {
                // Limpiar galería actual (o manejar diffs inteligentemente)
                liveGallery.innerHTML = '';

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const img = document.createElement('img');
                    img.src = data.url;
                    img.className = 'gallery-img fade-in visible';
                    liveGallery.appendChild(img);
                });
            });
    }

    // Soft Reveal Animation (Existing)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Forms
    const musicForm = document.getElementById('music-form');
    if (musicForm) {
        musicForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu sugerencia!');
            musicForm.reset();
        });
    }

    // Variable global para el iframe
    window.submitted = false;

    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpSuccess = document.getElementById('rsvp-success');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', () => {
            // No prevenimos el default para que se envíe al iframe
            // Solo mostramos el mensaje de éxito visualmente
            setTimeout(() => {
                rsvpForm.style.display = 'none';
                rsvpSuccess.style.display = 'block';
            }, 500);
        });
    }
});
