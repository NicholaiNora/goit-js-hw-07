import { galleryItems } from './gallery-items.js';

// Change code below this line
const ul = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = galleryItem.original
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.alt = galleryItem.description;
    img.src = galleryItem.preview;
    img.dataset.source = galleryItem.original;
    a.append(img);
    li.append(a);
    ul.append(li);
})

const links = document.querySelectorAll(".gallery__link");
links.forEach((link) => link.addEventListener("click", function (event) {
  event.preventDefault();
}));

ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "IMG") {
        let zoomImg = e.target.dataset.source;
        let instance = basicLightbox.create(`<img src="${zoomImg}" width="800" height="600">`);
        instance.show();
        
        window.addEventListener("keyup", (e) => {
          if (e.code === "Escape") {
            instance.close();
          }
        });
    }
})

