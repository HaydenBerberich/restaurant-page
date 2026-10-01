export default function about() {
    const content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.textContent = 'About';
    content.appendChild(heading);

    const desc = document.createElement('p');
    desc.textContent = "We’re a locally inspired restaurant focused on fresh ingredients, flavorful dishes, and a welcoming atmosphere. Our menu brings together classic favorites and creative new flavors, all prepared with care. Whether you’re stopping by for a quick lunch, enjoying dinner with friends, or celebrating a special occasion, we’re happy to have you at the table.";
    content.appendChild(desc);
}