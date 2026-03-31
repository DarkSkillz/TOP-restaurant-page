import "./styles.css"
import homeSection from "./home.js"
import menuSection from "./menu.js"
import contactSection from "./contact.js"

homeSection.load()

const home = document.getElementById("home")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")

home.addEventListener("click", () => {
    const section = document.querySelector("section")
    homeSection.load()

    if (section.id == "Menu") {
        menuSection.unload()
    }
    else if (section.id == "Contact") {
        contactSection.unload()
    }
})

menu.addEventListener("click", () => {
    const section = document.querySelector("section")
    menuSection.load()

    if (section.id == "Home") {
        homeSection.unload()
    }
    else if (section.id == "Contact") {
        contactSection.unload()
    }
})

contact.addEventListener("click", () => {
    const section = document.querySelector("section")
    contactSection.load()

    if (section.id == "Menu") {
        menuSection.unload()
    }
    else if (section.id == "Home") {
        homeSection.unload()
    }
})
