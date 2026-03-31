const contactSection = (() => {
    // Creating Elements
    const main = document.querySelector("main")
    const contactSection = document.createElement("section")
    const ownerHolderDiv = document.createElement("div")
    const managerHolderDiv = document.createElement("div")
    const staffHolderDiv = document.createElement("div")
    const ownerHeading = document.createElement("h4")
    const managerHeading = document.createElement("h4")
    const staffHeading = document.createElement("h4")
    const ownerParagraph = document.createElement("p")
    const managerParagraph = document.createElement("p")
    const staffParagraph = document.createElement("p")
    // Classes and IDs
    contactSection.className = "tab"
    contactSection.id = "Contact"
    ownerHolderDiv.className = "contact"
    managerHolderDiv.className = "contact"
    staffHolderDiv.className = "contact"
    // InnerText
    ownerHeading.innerText = "Restaurant Owner"
    managerHeading.innerText = "Restaurant Manager"
    staffHeading.innerText = "Restaurant Staff Team"
    ownerParagraph.innerText = "restowner123@gmail.com"
    managerParagraph.innerText = "restmanager123@gmail.com"
    staffParagraph.innerText = "reststaff123@gmail.com"
    // Appending
    ownerHolderDiv.append(ownerHeading, ownerParagraph)
    managerHolderDiv.append(managerHeading, managerParagraph)
    staffHolderDiv.append(staffHeading, staffParagraph)
    contactSection.append(ownerHolderDiv, managerHolderDiv, staffHolderDiv)

    const load = () => {
        main.append(contactSection)
    }

    const unload = () => {
        main.removeChild(contactSection)
    }

    return {load, unload}
})()

export default contactSection