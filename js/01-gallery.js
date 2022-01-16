import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


const galleryRef = document.querySelector('.gallery');
// galleryRef.addEventListener('click', );
console.log(galleryRef);

function createListGalleryItems() {
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
    return listImage;
};
galleryRef.insertAdjacentHTML('beforeend', createListGalleryItems());
// console.log(createListGalleryItems(galleryItems));
