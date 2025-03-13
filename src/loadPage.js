import createContactPage from './contact.js';
import createMenuPage from './menu.js';
import createRestaurantHomePage from './restaurant.js'
import createTabs from './tabs.js';

const loadPage = function(id){
    createTabs();
    createRestaurantHomePage()
}

export default loadPage;