const buttomDark = document.querySelector('.buttom-dark a');
const btnDark = document.querySelector('#btn');
const page = document.getElementById('pg')

buttomDark.addEventListener('click', switchMode);

var situationPage = 0;

function switchMode(){
    if(situationPage === 0){
        btnDark.textContent = "toggle_on";
        page.classList.add('dark-mode');
        situationPage = 1;
    }else if (situationPage === 1){
        btnDark.textContent = "toggle_off";
        page.classList.remove('dark-mode');
        situationPage = 0;
    }
}