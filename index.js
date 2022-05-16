'use strict';

// Using 'dialog' Interface/API

const dialog = document.getElementById('dialog');
const button = document.getElementById('close');

dialog.showModal();

button.addEventListener('click', function(){
    dialog.close();
});