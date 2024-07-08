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

// онклик на кнопку меню в хэдере 
document.getElementById('headerMenu').addEventListener('click', function() {
  switchButton('headerMenu');
});

// онклик на кнопку поиск в хэдере
document.getElementById('headerSearch').addEventListener('click', function() {
  switchButton('headerSearch');
});
