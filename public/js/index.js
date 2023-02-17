const menuHome = () => {
    document.getElementById("contentFrame").setAttribute("src", "home.html");
    document.getElementById("menuHome").classList.add("navigation__selected")
    document.getElementById("menuAbout").classList.remove("navigation__selected")
    document.getElementById("menuArtist").classList.remove("navigation__selected")
    document.getElementById("menuContact").classList.remove("navigation__selected")
}

const menuAbout = () => {
    document.getElementById("contentFrame").setAttribute("src", "about.html");
    document.getElementById("menuHome").classList.remove("navigation__selected")
    document.getElementById("menuAbout").classList.add("navigation__selected")
    document.getElementById("menuArtist").classList.remove("navigation__selected")
    document.getElementById("menuContact").classList.remove("navigation__selected")
    hamburgerOff()
}

const menuArtist = () => {
    document.getElementById("contentFrame").setAttribute("src", "artist.html");
    document.getElementById("menuHome").classList.remove("navigation__selected")
    document.getElementById("menuAbout").classList.remove("navigation__selected")
    document.getElementById("menuArtist").classList.add("navigation__selected")
    document.getElementById("menuContact").classList.remove("navigation__selected")
    hamburgerOff()
}


const menuContact = () => {
    document.getElementById("contentFrame").setAttribute("src", "contact.html");
    document.getElementById("menuHome").classList.remove("navigation__selected")
    document.getElementById("menuAbout").classList.remove("navigation__selected")
    document.getElementById("menuArtist").classList.remove("navigation__selected")
    document.getElementById("menuContact").classList.add("navigation__selected")
    hamburgerOff()
}


const hamburgerOn = () => {
    document.getElementById("hamburger-nav").classList.remove("display__none");
}

const hamburgerOff = () => {
    document.getElementById("hamburger-nav").classList.add("display__none");
}

