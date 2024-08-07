import module from './modules/module.js';

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date');

console.log(module);
function switchButton(id) {
    if(document.getElementById(id).getElementsByTagName('a')[0].classList.contains("hidden-block")) {
        document.getElementById(id).getElementsByTagName('a')[1].classList.add ("hidden-block");
        document.getElementById(id).getElementsByTagName('a')[0].classList.remove ("hidden-block");
    } else {
        document.getElementById(id).getElementsByTagName('a')[0].classList.add ("hidden-block");
        document.getElementById(id).getElementsByTagName('a')[1].classList.remove ("hidden-block");
    };
};

function switchBlock(blockId) {
    if(document.getElementById(blockId).classList.contains("hidden-block")) {
        document.getElementById(blockId).classList.remove ("hidden-block");
    } else {
        document.getElementById(blockId).classList.add ("hidden-block");
    };
};

// онклик на кнопку меню в хэдере 
document.getElementById('headerMenu').addEventListener('click', function() {
  switchButton('headerMenu');
  switchBlock('menu');
  switchBlock('content');
  //document.getElementById("menu").classList.remove ("hidden-block");
  //document.getElementById("content").classList.add ("hidden-block");
});

// онклик на кнопку поиск в хэдере
document.getElementById('headerSearch').addEventListener('click', function() {
  switchButton('headerSearch');
});

// переменная всех айтемов
var dressItems = document.getElementsByClassName("dress-item");
var dressItemsLength = dressItems.length;

// id активного элемента
var sliderId = 0;

// рандомизация текста товара
if  (dressItemsLength > 0) {
    dressItems[sliderId].classList.add('dress-item--active');
    for (let i = 0; i < dressItemsLength; i++) {
        dressItems[i].children[1].style.top = (`${Math.floor(Math.random() * (80 - 20 + 1) + 20)}%`);
        dressItems[i].children[1].style.right = (`${Math.floor(Math.random() * (40 - 10 + 1) + 10)}%`);
    }; 
};

console.log(sliderId);
document.getElementsByClassName("dress-slider__item")[sliderId].classList.add('dress-slider__item--active');