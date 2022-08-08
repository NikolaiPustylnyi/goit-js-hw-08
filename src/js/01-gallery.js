// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const galleryItemsList = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join(''); 

gallery.insertAdjacentHTML('afterbegin', galleryItemsList);



new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});
