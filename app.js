const h3 = document.querySelector("h3");
const user_message = document.querySelector(".user_message");
const submit = document.querySelector('.submit');

function message() {
    if(user_message.value=="") {
        alert('Please type in a message')
    } else {
        h3.innerHTML = '"' + user_message.value + '"';
        user_message.value = '';
    }
}

submit.addEventListener("click", message);