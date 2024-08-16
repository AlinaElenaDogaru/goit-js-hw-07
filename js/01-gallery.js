import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallerySelector = document.querySelector(`.gallery`);
const markUpGallery = (items) => {
    return items
    .map((item) => {
        const { preview, original, description } = item;
        return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" data-source="${original}"
                alt="${description}"/>
                </a>
               </li>`;
        }).join('');
};

console.log(markUpGallery(galleryItems));
const createHtml = () => {
    gallerySelector.innerHTML = markUpGallery(galleryItems);
}
createHtml();

function clickEvent(event) {
    event.preventDefault();
    const isGalleryImage = event.target.classList.contains("gallery__image");


    const imageSource = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${imageSource}" style="display: block; width: calc(100% ); max-width: 1140px; margin-top: 70px;">`, {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    })

    instance.show();
    function onEscKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

gallerySelector.addEventListener("click", clickEvent);