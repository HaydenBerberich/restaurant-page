export default function menu() {
    const content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    content.appendChild(heading);

    const steak = document.createElement('h2');
    steak.textContent = 'Steak $20.00';
    content.appendChild(steak);

    const burger = document.createElement('h2');
    burger.textContent = 'Burgers $10.00';
    content.appendChild(burger);
}