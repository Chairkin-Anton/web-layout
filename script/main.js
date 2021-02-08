'use strict';

const container = document.querySelector('.choices');
const choicesListActive = document.querySelector('.choices__item--selectable');
console.log(container);
console.log(choicesListActive);

container.addEventListener('showDropdown', function() {

        console.log('acs');
        document.querySelector('.choices__item--selectable').textContent = 'Материал';
         
})
// container.addEventListener('showDropdown', function(){

//   console.log('asd')

//   document.querySelector('.choices__item--selectable').textContent = 'Материал';

// });