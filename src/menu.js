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
    dishCardHolder.className = "main-dish-menu"
    dessertCardHolder.className = "dessert-menu"
    beverageCardHolder.className = "beverage-menu"
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

    const load = () => {
        const dishCardOne = createCard("main-dish-card","dish1","1","goog", animeGif)
        const dishCardTwo = createCard("main-dish-card","dish2","1","goog", animeGif)
        const dishCardThree = createCard("main-dish-card","dish3","1","goog", animeGif)
        const dessertCardOne = createCard("dessert-card","dessert1","1","goog", animeGif)
        const beverageCardOne = createCard("beverage-card","beverage1","1","goog", animeGif)
        dishCardHolder.append(dishCardOne, dishCardTwo, dishCardThree)
        dessertCardHolder.append(dessertCardOne)
        beverageCardHolder.append(beverageCardOne)
        main.append(menuSection)
    }

    const unload = () => {
        main.removeChild(menuSection)
    }

    return {load,unload}
})()

export default menuSection