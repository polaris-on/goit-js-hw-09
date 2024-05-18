const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: "",
    message: ""
}

form.addEventListener('input', handleInput);

function handleInput(event) {
    const key = event.target.name;
    
    formData[key] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if(!form.email.value||!form.message.value) {
        alert('Fill please all fields');
        return;
    }
    
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData = {};
    
    form.email.value = '';
    form.message.value = '';
}

document.addEventListener('DOMContentLoaded', fillForm);

function fillForm() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(!storageData) {
        return
    }
    console.log(storageData);

    const { email, message } = storageData;

    formData.email = email;
    formData.message = message;

    form.elements.email.value = email;
    form.elements.message.value = message;
}
