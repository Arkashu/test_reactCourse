'use strict';
( function () {
  const form = document.getElementById('submitForm');
  const wrapper = document.querySelector('.wrapper');
  const dataKey = 'userEmail';
  const dataToSave = { email: null};
  let userEmail = '';

    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        const {target} = event;
        let data = target.querySelector('.email');
        userEmail = data.value;
        dataToSave.email = userEmail;

       if(window.confirm(`Please confirm account creation for ${userEmail}`)) {
            localStorage.setItem(dataKey, JSON.stringify(dataToSave))
            form.remove();
           wrapper.innerHTML = `<h1>Hello, user with email: ${JSON.parse(localStorage.getItem(dataKey)).email}</h1>
               <br>
                <img src="img/1.png" alt="Some image">`;
       }

    })
    document.addEventListener('DOMContentLoaded', event => {
        if (!localStorage.getItem(dataKey)) return;
        form.remove();
        wrapper.innerHTML = `<h1>Hello, user with email: ${JSON.parse(localStorage.getItem(dataKey)).email}</h1>
        <br>
        <img src="img/1.png" alt="Some image">`;

    })
}) ()