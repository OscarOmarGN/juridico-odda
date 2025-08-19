const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
const navItem = document.querySelectorAll('.nav-item')

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('abrir') && nav.classList.contains('ocultar')) {
    menuBtn.classList.remove('abrir');
    menuBtn.classList.add('cerrar');
    nav.classList.remove('ocultar')
    nav.classList.add('mostrar');
  } else if (menuBtn.classList.contains('cerrar') && nav.classList.contains('mostrar')) {
    menuBtn.classList.remove('cerrar');
    menuBtn.classList.add('abrir');
    nav.classList.remove('mostrar');
    nav.classList.add('ocultar');
  }
});

navItem.forEach(element => {
  element.addEventListener('click', () => {
    setTimeout(() => {
      menuBtn.classList.remove('cerrar');
      menuBtn.classList.add('abrir');
      nav.classList.remove('mostrar');
      nav.classList.add('ocultar');
    }, 700);
  })
});
