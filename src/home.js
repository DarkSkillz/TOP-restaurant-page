const homeSection = (() => {
    // Creating Elements
    const main = document.querySelector("main")
    const homeSection = document.createElement("section")
    const flavorHeading = document.createElement("h1")
    const hoursHeading = document.createElement("h2")
    const locationHeading = document.createElement("h2")
    const flavorParagraph = document.createElement("p")
    const locationParagraph = document.createElement("p")
    const flavorDiv = document.createElement("div")
    const hoursDiv = document.createElement("div")
    const locationDiv = document.createElement("div")
    const hoursList = document.createElement("ul")
    const hoursListItemSun = document.createElement("li")
    const hoursListItemMon = document.createElement("li")
    const hoursListItemTue = document.createElement("li")
    const hoursListItemWed = document.createElement("li")
    const hoursListItemThu = document.createElement("li")
    const hoursListItemFri = document.createElement("li")
    const hoursListItemSat = document.createElement("li")
    // Classes and IDs
    homeSection.className = "tab"
    homeSection.id = "Home"
    flavorDiv.id = "flavor-text"
    hoursDiv.id = "hours"
    locationDiv.id = "location"
    hoursList.id = "hour-list"
    hoursListItemSun.className = "hour"
    hoursListItemMon.className = "hour"
    hoursListItemTue.className = "hour"
    hoursListItemWed.className = "hour"
    hoursListItemThu.className = "hour"
    hoursListItemFri.className = "hour"
    hoursListItemSat.className = "hour"
    // InnerText
    flavorHeading.innerText = "Welcome to {placeholder}"
    flavorParagraph.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum voluptatem ipsa autem molestiae animi ad eaque amet corporis odit?"
    hoursHeading.innerText = "Hours"
    locationHeading.innerText = "Location"
    locationParagraph.innerText = "Over there, turn right, down the hill past the school"
    hoursListItemSun.innerText = "Sunday: 8am - 8pm"
    hoursListItemMon.innerText = "Monday: 8am - 8pm"
    hoursListItemTue.innerText = "Tuesday: 8am - 8pm"
    hoursListItemWed.innerText = "Wednesday: 8am - 8pm"
    hoursListItemThu.innerText = "Thursday: 8am - 10pm"
    hoursListItemFri.innerText = "Friday: 8am - 10pm"
    hoursListItemSat.innerText = "Saturday: 8am - 10pm"
    // Appending
    flavorDiv.append(flavorParagraph)
    hoursList.append(hoursListItemSun, hoursListItemMon, hoursListItemTue, hoursListItemWed, hoursListItemThu, hoursListItemFri, hoursListItemSat)
    hoursDiv.append(hoursHeading, hoursList)
    locationDiv.append(locationHeading, locationParagraph)
    homeSection.append(flavorHeading, flavorDiv, hoursDiv, locationDiv)
    const load = () => {
        main.append(homeSection)
    }

    const unload = () => {
        main.removeChild(homeSection)
    }

    return {load, unload}
})()

export default homeSection