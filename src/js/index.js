////////////////////////////////NAV

let nav = document.querySelector('#nav');
let menu = document.querySelector('#btnMenu');
let open = document.querySelector('#openMenu');
let close = document.querySelector('#closeMenu');

menu.onclick = () => {
  open.classList.toggle('active');
  close.classList.toggle('active');
  nav.classList.toggle('active');
};

window.onscroll = () => {
  open.classList.add('active');
  close.classList.remove('active');
  nav.classList.remove('active');
  tooltip.removeAttribute('class');
};

//////////////////////////////// SERVICES

const servicesList = document.querySelectorAll('.service');
const servicesBtn = document.querySelectorAll('.toggle-service');

servicesBtn.forEach((btn) => {
  const serviceWhitin = btn.closest('.service');
  const altura = serviceWhitin.offsetHeight;

  if (serviceWhitin.querySelector('h4').textContent == 'Sistemas WEB') {
    serviceWhitin.style.height = altura + 'px';
  } else {
    serviceWhitin.classList.toggle('active');
    serviceWhitin.style.height = '25rem';
  }

  btn.addEventListener('click', () => {
    serviceWhitin.classList.toggle('active');
    if (serviceWhitin.classList.contains('active'))
      serviceWhitin.style.height = altura + 'px';
    else serviceWhitin.style.height = '25rem';
  });
});

//////////////////////////////// CONTACT EMAIL

let nameInput = document.querySelector('#name');
let subjectInput = document.querySelector('#subject');

nameInput.addEventListener('input', () => {
  subjectInput.value = `${nameInput.value} | Nuevo Mensaje desde la web`;
});

/////////////////////////////// SHARE PAG

let share = document.getElementById('share');
let tooltip = document.getElementById('tooltip');

share.onclick = () => {
  // navigator.clipboard.writeText(window.location.href);
  navigator.clipboard.writeText('biosoft-online.netlify.app');
  tooltip.classList.add('active');
  setTimeout(() => {
    tooltip.classList.remove('active');
  }, 1500);
};

/////////////////////////////// FOOTER

const yearRights = document.getElementById('yearRights');
yearRights.innerHTML = new Date().getFullYear();
