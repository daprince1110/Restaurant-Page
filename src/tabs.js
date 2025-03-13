import createRestaurantHomePage from './restaurant.js';
import createMenuPage from './menu.js';
import createContactPage from './contact.js';

const createTabs = function() {
    const content = document.querySelector("#content");


    // Create a container for the tabs (buttons)
    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tabs');

    // Create tab buttons for each page
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';

    // Append buttons to the tab container
    tabContainer.appendChild(homeBtn);
    tabContainer.appendChild(menuBtn);
    tabContainer.appendChild(contactBtn);

    // Insert the tab container into the DOM (before the #content element)
    document.body.insertBefore(tabContainer, content);

    // Utility function to clear previous content
    function clearContent() {
        content.innerHTML = "";
    }

    // Set up event listeners for each button
    homeBtn.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });

    menuBtn.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });

    contactBtn.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
};

export default createTabs;
