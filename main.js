// main.js
import { templateSlice } from "./templateSlice.js";

const heroSection = document.getElementById("hero");
const heroData = templateSlice.hero;

heroSection.style.backgroundImage = `url(${heroData.imgUrl})`;

const content = heroSection.querySelector(".content");
content.querySelector("h2").textContent = heroData.title;
content.querySelector("p").textContent = heroData.description;

const button = content.querySelector("button");
button.querySelector("span").textContent = heroData.buttonText;
button.querySelector("img").src = heroData.icon;
button.querySelector("img").alt = "icon";

const servicesElement = document.getElementById("services");
const servicesData = templateSlice.services.blocks;

servicesData.forEach((service) => {
  const serviceElement = document.createElement("div");
  serviceElement.className = "srv-box";
  serviceElement.innerHTML = `
        <img src="${service.icon}" alt="image of ${service.title}" />
        <div class="text">
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      `;
  servicesElement.appendChild(serviceElement);
});
