const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const cta = document.querySelector(".cta");
cta.querySelector("h1").textContent = siteContent.cta.h1;
cta.querySelector("button").textContent = siteContent.cta.button;
console.log(cta);

const navOne = document.querySelectorAll("a");
navOne[0].textContent = siteContent.nav["nav-item-1"];
navOne[1].textContent = siteContent.nav["nav-item-2"];
navOne[2].textContent = siteContent.nav["nav-item-3"];
navOne[3].textContent = siteContent.nav["nav-item-4"];
navOne[4].textContent = siteContent.nav["nav-item-5"];
navOne[5].textContent = siteContent.nav["nav-item-6"];
console.log(navOne);

//second image
const codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute("src", siteContent.cta["img-src"]);

//third image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//main content
const headFour = document.querySelectorAll("h4");
headFour[0].textContent = siteContent["main-content"]["features-h4"];
headFour[1].textContent = siteContent["main-content"]["about-h4"];
headFour[2].textContent = siteContent["main-content"]["services-h4"];
headFour[3].textContent = siteContent["main-content"]["product-h4"];
headFour[4].textContent = siteContent["main-content"]["vision-h4"];
headFour[5].textContent = siteContent.contact["contact-h4"];
console.log(headFour);

const mainP = document.querySelectorAll("p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];
mainP[5].textContent = siteContent.contact.address;
mainP[6].textContent = siteContent.contact.phone;
mainP[7].textContent = siteContent.contact.email;
mainP[8].textContent = siteContent.footer.copyright;

//new added Elements
const nv = document.querySelector("nav");
const newLink = document.createElement("a");
newLink.textContent = "Cheese";
newLink.style.color = "orange";
nv.appendChild(newLink);

const newLink2 = document.createElement("a");
newLink2.textContent = "Bacon";
newLink2.style.color = "blue";
nv.prepend(newLink2);

//changing the navigation to green
navOne.forEach((element) => {
  element.style.color = "green";
});
