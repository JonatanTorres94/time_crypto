
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = '-';
    }
    else{
        hideText_btn.innerHTML = '+';
    }

}


let hideText_btn2 = document.getElementById('hideText_btn2');
let hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText2);

function toggleText2(){
    hideText2.classList.toggle('show2');

    if(hideText2.classList.contains('show2')){
        hideText_btn2.innerHTML = '-';
    }
    else{
        hideText_btn2.innerHTML = '+';
    }

}

let hideText_btn3 = document.getElementById('hideText_btn3');
let hideText3 = document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText3);

function toggleText3(){
    hideText3.classList.toggle('show3');

    if(hideText3.classList.contains('show3')){
        hideText_btn3.innerHTML = '-';
    }
    else{
        hideText_btn3.innerHTML = '+';
    }

}

let hideText_btn4 = document.getElementById('hideText_btn4');
let hideText4 = document.getElementById('hideText4');

hideText_btn4.addEventListener('click', toggleText4);

function toggleText4(){
    hideText4.classList.toggle('show4');

    if(hideText4.classList.contains('show4')){
        hideText_btn4.innerHTML = '-';
    }
    else{
        hideText_btn4.innerHTML = '+';
    }

}

let hideText_btn5 = document.getElementById('hideText_btn5');
let hideText5 = document.getElementById('hideText5');

hideText_btn5.addEventListener('click', toggleText5);

function toggleText5(){
    hideText5.classList.toggle('show5');

    if(hideText5.classList.contains('show5')){
        hideText_btn5.innerHTML = '-';
    }
    else{
        hideText_btn5.innerHTML = '+';
    }

}


