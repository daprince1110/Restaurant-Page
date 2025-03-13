const createRestaurantHomePage = function(){
    let content = document.querySelector("#content")
    let pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    let header = document.createElement('h1')
    header.textContent = 'Welcome to our website'
    pageContent.appendChild(header)

    let img = document.createElement('img')
    img.src = "https://picsum.photos/800/600"
    pageContent.appendChild(img)

    let p = document.createElement('p')
    p.textContent = 'We serve the best food in town'
    pageContent.appendChild(p)

    content.appendChild(pageContent)

}

export default createRestaurantHomePage;