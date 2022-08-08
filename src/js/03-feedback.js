import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const dataForm = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

updateForm();

function onInput(e) {
    e.preventDefault();

    dataForm.email = form.elements.email.value;
    dataForm.message = form.elements.message.value;
    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm))
}

function onSubmit(e) {
    e.preventDefault();

    dataForm.email = form.elements.email.value;
    dataForm.message = form.elements.message.value;

    console.log(dataForm);

    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}


function updateForm(e) {
    const saveForm = localStorage.getItem(LOCALSTORAGE_KEY);
    const saveFormPars = JSON.parse(saveForm);
    if (saveForm) {
        form.elements.email.value = saveFormPars.email || "";
        form.elements.message.value = saveFormPars.message || "";
    };
};





