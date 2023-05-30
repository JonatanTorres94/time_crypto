
class Client {

    constructor(id, name, email, password, capital) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.capital = capital;
        this.investor = false;
    }


    invest() {
        this.investor = true
    }

    show_earnings(capital) {
        let operation
        let day
        if (this.investor == true) {
            let days_of_interest = prompt("Enter the number of days you want to invest")
            for (let i = 0; i < days_of_interest; i++) {
                day = i + 1
                operation = capital * Math.pow((1 + 0.022), day)

                console.log("Day " + day + " final profit amount = " + operation)
                alert("Day " + day + " final profit amount = " + operation)
            }
        } else {
            console.log("To see profit you need to be an investor")
        }
    }

};

class ContractCard {

    constructor(name, description, amout, status, user) {
        this.name = name;
        this.description = description;
        this.amout = amout;
        this.status = status;
        this.user = user;
    }

};


function id_generator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};

sessionStorage.clear();

// const clientAdmin = new Client(0, 'admin', 'admin@admin', '1234', 1000);
let login = false;

//const contractDefault = new ContractCard('Plan de 45 días', 'Ganancias estimadas del 30%', 1000, true, clientAdmin.name)

let clients = [];
let emailExist = {};
let duplicateMail = {};
//clients.push(clientAdmin);

let contracts = [];
//contracts.push(contractDefault);

let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
    hideText.classList.contains('show') ? hideText_btn.innerHTML = '-' : hideText_btn.innerHTML = '+';
}


let hideText_btn2 = document.getElementById('hideText_btn2');
let hideText2 = document.getElementById('hideText2');

hideText_btn2.addEventListener('click', toggleText2);

function toggleText2() {
    hideText2.classList.toggle('show');
    hideText2.classList.contains('show') ? hideText_btn2.innerHTML = '-' : hideText_btn2.innerHTML = '+';
}

let hideText_btn3 = document.getElementById('hideText_btn3');
let hideText3 = document.getElementById('hideText3');

hideText_btn3.addEventListener('click', toggleText3);

function toggleText3() {
    hideText3.classList.toggle('show');
    hideText3.classList.contains('show') ? hideText_btn3.innerHTML = '-' : hideText_btn3.innerHTML = '+';
}

let hideText_btn4 = document.getElementById('hideText_btn4');
let hideText4 = document.getElementById('hideText4');

hideText_btn4.addEventListener('click', toggleText4);

function toggleText4() {
    hideText4.classList.toggle('show');
    hideText4.classList.contains('show') ? hideText_btn4.innerHTML = '-' : hideText_btn4.innerHTML = '+';
}

let hideText_btn5 = document.getElementById('hideText_btn5');
let hideText5 = document.getElementById('hideText5');

hideText_btn5.addEventListener('click', toggleText5);

function toggleText5() {
    hideText5.classList.toggle('show');
    hideText5.classList.contains('show') ? hideText_btn5.innerHTML = '-' : hideText_btn5.innerHTML = '+';

}

let userName = document.getElementById('userName');

let btn_register = document.getElementById('register_id');
let register_container = document.getElementById('register_container');

let btn_access = document.getElementById('acceso');
let access_container = document.getElementById('access_container');

let closeW = document.getElementById('close');
let registerClose = document.getElementById('registerClose');


closeW.addEventListener('click', () => {
    access_container.classList.remove('show');
});

btn_access.addEventListener('click', () => {
    access_container.classList.add('show');
});

btn_register.addEventListener('click', () => {
    register_container.classList.add('show');
});

registerClose.addEventListener('click', () => {
    register_container.classList.remove('show');
});

let form_register = document.getElementById('form_register');
form_register.addEventListener('submit', (e) => {
    e.preventDefault();


    let id = id_generator(0, 100);
    let inputsR = e.target.children;
    let name = inputsR[1].value
    let emailR = inputsR[3].value
    let passwordR = inputsR[5].value
    const client1 = new Client(id, name, emailR, passwordR);
    clients.push(client1)

    for (let i = 0; i < clients.length; i++) {

        let obj = clients[i]
        let email = obj.email

        if (emailExist[email]) {
            duplicateMail[email] = true;
        } else {
            emailExist[email] = true;
        }
    }

    for (let i = 0; i < clients.length; i++) {
        let obj = clients[i];
        let email = obj.email;
        if (duplicateMail[email]) {
            clients.splice(i, 1);
            i--;
            delete duplicateMail[email];
        }
    }
    register_container.classList.remove('show');
    console.log(clients);

});


let form_access = document.getElementById('form_access');
form_access.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let email = inputs[1].value;
    let password = inputs[3].value;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i].email === email && clients[i].password === password) {
            access_container.classList.remove('show');
            btn_access.classList.add('hide');
            let loggedClient = clients[i];
            let clientName = clients[i].name;
            let dJson = JSON.stringify(loggedClient);
            sessionStorage.setItem("clients", dJson);
            userName.innerHTML = clientName
            login = true;
            break;
        }
    }

});

let alertContrac = document.getElementById('alertContrac');
let btnCross = document.getElementById('btn-cross');
let contracContainerClose = document.getElementById('contracContainerClose');
let contracContainer = document.getElementById('contracContainer');
let contract = document.getElementById('contract');
let h2Contrac = document.getElementById('h2Contrac');
let pContrac = document.getElementById('pContrac');

contract.addEventListener('click', () => {
    login ? contracContainer.classList.add('show') : alertContrac.classList.add('showAlert');
    for (let i = 0; i < sessionStorage.length; i++) {
        //let nameSession = sessionStorage.getItem(clients);
        //console.log(JSON.parse(sessionStorage.getItem(clients.name))); Al enviar el Parse me devuelve un NULL, al consultar typeof me dice que es un objet sin enviar el parse
        h2Contrac.innerHTML = (clients[i].name);
    }
    
    //pContrac.innerHTML = ("Tiene los siguientes contratos activos: "); // aca se va a completar con la informacion de la clase ContractCard

})

contracContainerClose.addEventListener('click', () => {
    contracContainer.classList.remove('show');
})
btnCross.addEventListener('click', () => {
    alertContrac.classList.remove('showAlert');
})



for (let i = 0; i < contracts.length; i++) {
    console.log(contracts[i].user);
}

