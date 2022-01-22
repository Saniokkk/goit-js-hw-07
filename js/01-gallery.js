import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createListGalleryItems(galleryItems) {
    const listImage = galleryItems.reduce((acc, { preview, original, description }) => {
        acc += 
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`
        return acc;
    }, ''); 
    galleryRef.insertAdjacentHTML('beforeend', listImage);
};
createListGalleryItems(galleryItems);

galleryRef.addEventListener('click', onOpenImage);

function onOpenImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
    return;
    }
    const url = event.target.dataset.source;
    const imgOnModal = basicLightbox.create(`
    <img width="1280" height="854" src="${url}"/>`);

    imgOnModal.show();    
    
    document.addEventListener('keydown', closeModalEsc);

    function closeModalEsc(event) {
        if (event.code !== 'Escape') {
            return;
        };
        imgOnModal.close();
        document.removeEventListener('keydown', closeModalEsc);
    }
}


