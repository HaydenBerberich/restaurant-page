export default function home() {
    const content = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
    img.alt = 'Food';
    content.appendChild(img);

    const heading = document.createElement('h1');
    heading.textContent = "Berberich's BBQ";
    content.appendChild(heading);

    const desc = document.createElement('p');
    desc.textContent = "Welcome to our restaurant, where fresh ingredients, comforting flavors, and a warm atmosphere come together. Enjoy a variety of carefully prepared dishes made with quality ingredients and served with friendly hospitality. Whether you're joining us for a casual meal or a special occasion, we're here to make every visit memorable."
    content.appendChild(desc);
}