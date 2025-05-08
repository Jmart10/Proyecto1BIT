<<<<<<< HEAD
const modal = document.getElementById('modalImagen');
const modalImg = modal.querySelector('img');

// Al hacer clic en cualquier imagen de .equipos, mostrarla en el modal
document.querySelectorAll('.equipos img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Al hacer clic en la imagen del modal, se cierra
modal.addEventListener('click', () => {
  modal.style.display = 'none';
=======
const modal = document.getElementById('modalImagen');
const modalImg = modal.querySelector('img');

// Al hacer clic en cualquier imagen de .equipos, mostrarla en el modal
document.querySelectorAll('.equipos img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Al hacer clic en la imagen del modal, se cierra
modal.addEventListener('click', () => {
  modal.style.display = 'none';
>>>>>>> 7521c5335b5a44baa7c66b185e1c1de58a30e3f2
});