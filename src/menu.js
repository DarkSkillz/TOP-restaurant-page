import animeGif from "./photos/anime gif.gif"

const menuSection = (() => {
    // Creating Elements
    const main = document.querySelector("main")
    const menuSection = document.createElement("section")
    const dishHolderDiv = document.createElement("div")
    const dessertHolderDiv = document.createElement("div")
    const beverageHolderDiv = document.createElement("div")
    const dishHeading = document.createElement("h3")
    const dessertHeading = document.createElement("h3")
    const beverageHeading = document.createElement("h3")
    const dishCardHolder = document.createElement("div")
    const dessertCardHolder = document.createElement("div")
    const beverageCardHolder = document.createElement("div")
    // Classes and IDs
    menuSection.className = "tab"
    menuSection.id = "Menu"
    dishHolderDiv.className = "menu-holder"
    dessertHolderDiv.className = "menu-holder"
    beverageHolderDiv.className = "menu-holder"
    dishHolderDiv.id = "main-dish-menu-holder"
    dessertHolderDiv.id = "dessert-menu-holder"
    beverageHolderDiv.id = "beverage-menu-holder"
    dishCardHolder.id = "main-dish-menu"
    dessertCardHolder.id = "dessert-menu"
    beverageCardHolder.id = "beverage-menu"
    // InnerText
    dishHeading.innerText = "Main Dishes"
    dessertHeading.innerText = "Desserts"
    beverageHeading.innerText = "Beverages"
    // Appending
    dishHolderDiv.append(dishHeading, dishCardHolder)
    dessertHolderDiv.append(dessertHeading, dessertCardHolder)
    beverageHolderDiv.append(beverageHeading, beverageCardHolder)
    menuSection.append(dishHolderDiv, dessertHolderDiv, beverageHolderDiv)

    const createCard = (category, name, price, info, src) => {
        // Creating Elements
        const card = document.createElement("div")
        const cardTextDiv = document.createElement("div")
        const cardName = document.createElement("p")
        const cardPrice = document.createElement("p")
        const cardInfo = document.createElement("p")
        const cardImage = document.createElement("img")
        // Classes and IDs
        card.className = category
        cardTextDiv.className = "card-text"
        cardName.className = "dish-name"
        cardPrice.className = "dish-price"
        cardInfo.className = "dish-info"
        cardImage.className = "dish-photo"
        // InnerText
        cardName.innerText = name
        cardPrice.innerText = price
        cardInfo.innerText = info
        cardImage.src = src
        cardImage.alt = `${name} photo`
        // Appending
        cardTextDiv.append(cardName, cardPrice, cardInfo)
        card.append(cardTextDiv, cardImage)
        return card
    }

    (() => {
        const dishCardOne = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardTwo = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardThree = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardFour = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardFive = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardSix = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardSeven = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dishCardEight = createCard("main-dish-card","Dish Name","$50.00","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptatem?", animeGif)
        const dessertCardOne = createCard("dessert-card","Dessert Name","$50.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illum.", animeGif)
        const dessertCardTwo = createCard("dessert-card","Dessert Name","$50.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illum.", animeGif)
        const dessertCardThree = createCard("dessert-card","Dessert Name","$50.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illum.", animeGif)
        const dessertCardFour = createCard("dessert-card","Dessert Name","$50.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, illum.", animeGif)
        const beverageCardOne = createCard("beverage-card","Beverage Name","$50.00","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, magni!", animeGif)
        const beverageCardTwo = createCard("beverage-card","Beverage Name","$50.00","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, magni!", animeGif)
        const beverageCardThree = createCard("beverage-card","Beverage Name","$50.00","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, magni!", animeGif)
        const beverageCardFour = createCard("beverage-card","Beverage Name","$50.00","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, magni!", animeGif)
        dishCardHolder.append(dishCardOne, dishCardTwo, dishCardThree, dishCardFour, dishCardFive, dishCardSix, dishCardSeven, dishCardEight)
        dessertCardHolder.append(dessertCardOne, dessertCardTwo, dessertCardThree, dessertCardFour)
        beverageCardHolder.append(beverageCardOne, beverageCardTwo, beverageCardThree, beverageCardFour)
    })()
    
    const load = () => {
        main.append(menuSection)
    }

    const unload = () => {
        main.removeChild(menuSection)
    }

    return {load,unload}
})()

export default menuSection