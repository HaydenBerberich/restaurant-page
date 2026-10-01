import './styles.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

home();
const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
    content.replaceChildren();
    home();
});

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {
    content.replaceChildren();
    menu();
});

const aboutBtn = document.querySelector('#about');
aboutBtn.addEventListener('click', () => {
    content.replaceChildren();
    about();
});