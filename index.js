'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
	e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

const header = document.querySelector('header');

// creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `we use cookies fir imporved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>`;

header.append(message);


// removing the cookie message

document.querySelector('.btn--close-cookie').onclick = () => {
	message.remove();
};

// styles 

message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;


message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

document.documentElement.style.setProperty('--color-primary', 'orangered')


//Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // http://127.0.0.1:5501/img/logo.png - absolute
console.log(logo.className); // nav__logo

// non-standard

console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')) // David Ouma

// Settng attribute

logo.setAttribute('company', 'Moneyman');
logo.getAttribute('src'); // img/logo.png - relative

//data attribute

console.log(logo.dataset.versionNumber);

//Classes