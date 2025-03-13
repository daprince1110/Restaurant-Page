const createMenuPage = function() {
    let content = document.querySelector("#content");
    if (!content) {
        console.error("Error: #content element not found");
        return;
    }
    
    content.innerHTML = ""; // Clear previous content

    let pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    let header = document.createElement('h1');
    header.textContent = 'Our Menu';
    pageContent.appendChild(header);

    let menuList = document.createElement('ul');

    let items = [
        'Burger - $10',
        'Pizza - $15',
        'Pasta - $12',
        'Salad - $8',
        'Dessert - $7'
    ];

    items.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
    });

    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;
