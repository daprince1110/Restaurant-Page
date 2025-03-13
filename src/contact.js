const createContactPage = function() {
    let content = document.querySelector("#content");
    let pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    let header = document.createElement('h1');
    header.textContent = 'Contact Us';
    pageContent.appendChild(header);

    let phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
    pageContent.appendChild(phone);

    let email = document.createElement('p');
    email.textContent = 'Email: contact@restaurant.com';
    pageContent.appendChild(email);

    let address = document.createElement('p');
    address.textContent = '123 Food Street, Flavor Town';
    pageContent.appendChild(address);

    content.appendChild(pageContent);
}

export default createContactPage;