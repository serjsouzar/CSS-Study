ativar.addEventListener('click', () => {
  modal.classList.toggle('animar');
});

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)