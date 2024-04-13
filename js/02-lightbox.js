import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector(".gallery");
console.log(galleryItems);

function createGallery(items) {
   return items.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("gallery__item");
      const a = document.createElement("a");
      a.classList.add("gallery__link");
      a.href = item.original;
      const img = document.createElement("img");
      img.classList.add("gallery__image");
      img.alt = item.description;
      img.src = item.preview;
      a.append(img);
      li.append(a);
      ul.append(li);
    });
}
createGallery(galleryItems);

const links = document.querySelectorAll(".gallery__link");
links.forEach((link) =>
  link.addEventListener("click", function (event) {
    event.preventDefault();
  })
);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt", captionDelay: 250
}); 

gallery.on("show.simplelightbox");