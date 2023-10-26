const loginButton = document.getElementById('login_btn');
const cancelButton = document.getElementById('cancel');
const loginForm = document.getElementById('login_form');
const sign_upButton = document.getElementById('sign_up');
const login_input = document.getElementById('login_input');
const password_input = document.getElementById('password_input');
const result_p = document.getElementById('result_p');


loginButton.addEventListener('click', () => {
    loginForm.style.display = 'flex'
    
    });

cancelButton.addEventListener('click', () => {
    loginForm.style.display = 'none'
    result_p.textContent = ''
    });


let count = 0;
sign_upButton.addEventListener('click', () => {
    result_p.textContent = ''
    result_p.style.color = "#ff3030";

    if (login_input.value.length == 0){
        result_p.textContent += 'Логин не может быть пустым'
        return
    }
    if (password_input.value.length == 0){
        result_p.textContent += 'Пароль не может быть пустым'
        return
    }

    for (let i = 0; i < login_input.value.length; i++) {
        if (login_input.value.length <5){
            result_p.textContent += 'Логин должен содержать минимум 5 символов'
            return
        }
        if (/[а-я,А-Я]/.test(login_input.value[i])){
            result_p.textContent += 'Только английские буквы и спецсимволы'
            return
        }

      }

      for (let i = 0; i < password_input.value.length; i++) {
        if (password_input.value.length < 8){
            result_p.textContent += 'Пароль должен содержать минимум 8 символов'
            return
        }
        if (/[а-я,А-Я]/.test(password_input.value[i])){
            result_p.textContent += 'Только английские буквы и спецсимволы'
            return
        }
        if (/[A-Z]/.test(password_input.value[i])){
            count ++
            console.log(count)
        }
        

      }

      
      if (count == 0){
        result_p.textContent += 'Пароль должен содержать хотя бы одну заглавную букву'
        return
      }
      
      result_p.textContent += 'Вы зарегистрированы'
      result_p.style.color = "#c2ff49";

    });





