
class Client {

    constructor(id, name, email, password, contract) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.contract = false;
    }


    invest() {
        this.contract = true
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

// class Contracts {

//     constructor(id,name, value,status, user) {
//         this.id = id;
//         this.name = name;
//         this.value = value;
//         this.status = status;
//         this.user = user;
//     }

// };




function id_generator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
};





let login = false;
let isLocal = false;
//const contractDefault = new ContractCard('Plan de 45 días', 'Ganancias estimadas del 30%', 1000, true, clientAdmin.name)

let clients = [{ id: 1, name: 'Administrador', email: 'admin@admin.com', password: '1234' }];

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


    let registerClient = clients[clients.length - 1];
    let dJson = JSON.stringify(registerClient);
    localStorage.setItem("clients", dJson);

    console.log(clients)

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

let errorData = document.getElementById('errorData');

let form_access = document.getElementById('form_access');
form_access.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    let email = inputs[1].value;
    let password = inputs[3].value;
    const p = document.createElement("p");


    if (clients.length != 0) {
        // LOGIN POR USERS DE ARRAY 
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].email === email && clients[i].password === password) {

                let clientName = clients[i].name;
                userName.innerHTML = clientName
                login = true;
                break;
            }
        }

        //LOGIN POR USER REGISTRADOS Y GUARDADOS EN LOCAL STORAGE
        if (localStorage != null) {
            let clientLocal = JSON.parse(localStorage.getItem("clients"))
            if (clientLocal.email === email && clientLocal.password === password) {
                let clientName = clientLocal.name;
                userName.innerHTML = clientName
                access_container.classList.remove('show');
                btn_access.classList.add('hide');
                login = true;
                isLocal = true;

            }

        } else {
            console.log("Local storage es NULL")
        }

        if (login) {
            access_container.classList.remove('show');
            btn_access.classList.add('hide');
        } else {

            p.innerHTML = "<p>wrong data</p>";

            //Borrar mensaje de correo invalido a los 3 seg
            setTimeout(() => {
                p.innerHTML = '';
            }, 3000);

            errorData.append(p);


        }

    } else {
        console.log("there are no registered customers")
    }


});

let alertContrac = document.getElementById('alertContrac');
let btnCross = document.getElementById('btn-cross');
let contracContainerClose = document.getElementById('contracContainerClose');
let contracContainer = document.getElementById('contracContainer');
let contract = document.getElementById('contract');
let h2Contrac = document.getElementById('h2Contrac');
let pContrac = document.getElementById('pContrac');
let contrctButton = document.getElementById('contrctButton');

//Controlador del formulario donde veo los contratos
contract.addEventListener('click', () => {
    if (login && isLocal) {
        let clientLocal = JSON.parse(localStorage.getItem("clients"))
        contracContainer.classList.add('show')
        try {
            h2Contrac.innerHTML = (clientLocal.name)//(clients[i].name);
        } catch (error) {
            console.log(error)
        }

    } else if (login) {
        contracContainer.classList.add('show')
        for (let i = 0; i < clients.length; i++) {

            try {
                h2Contrac.innerHTML = (clients[i].name);
            } catch (error) {
                console.log(error)
            }
        }

    } else {
        alertContrac.classList.add('showAlert');
    }
    console.log(clients)


    // if (contracts.length === 0) {
    //     pContrac.innerHTML = ("You currently do not have active contracts, this may be because they ended or because you did not contract them. To make a contract click on the one below");

    //     requestData(); // Me muestr el JSON con los datos

    // }
    //pContrac.innerHTML = ("Tiene los siguientes contratos activos: "); // aca se va a completar con la informacion de la clase ContractCard

})

let tradingPlans = document.getElementById("tradingPlans");
let contexCardard = document.getElementById("contexCardard");
const requestData = async () => {
    try {
        const response = await fetch("../items.json");
        const data = await response.json();

        const response2 = await fetch("../items_trading_plan.json");
        const data2 = await response2.json();


        data.forEach((item) => {
            const card = document.createElement("div");

            switch (item.id) {
                case 1:
                    card.innerHTML = `
                    <div class="card">
                            <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                        </div>
                    </div>
                    `
                    break;
                case 2:
                    card.innerHTML = `
                    <div class="card">
                        <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                        </div>
                    </div>
                    `
                    break;
                case 3:
                    card.innerHTML = `
                    <div class="card">
                        <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                         </div>
                    </div>
                    `
                    break;

            }
            contexCardard.append(card);
            
        });

        data2.forEach((item) => {
            const cardTrading = document.createElement("div");
            switch (item.id) {
                case 4:
                    cardTrading.innerHTML = `
                    <div class="card">
                        <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                        </div>
                    </div>
                    `
                    break;
                case 5:
                    cardTrading.innerHTML = `
                    <div class="card">
                        <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                        </div>
                    </div>
                    `
                    break;

                case 6:
                    cardTrading.innerHTML = `
                    <div class="card">
                         <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                        </div>
                    </div>
                    `
                    break;
                case 7:
                    cardTrading.innerHTML = `
                    <div class="card">
                         <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                         </div>
                     </div>
                     `
                    break;
                case 8:
                    cardTrading.innerHTML = `
                    <div class="card">
                        <div class="line-container" >
                            <h2>${item.name}</h2>
                            <hr class="custom-line">
                            <p>${item.description} </p>
                            <p class="btn-card"> Contratar </p>
                        </div>
                     </div>
                    `
                    break;
            };

            tradingPlans.append(cardTrading);
        });


    } catch (error) {
        console.log(error);
    }

};

requestData();

contracContainerClose.addEventListener('click', () => {
    contracContainer.classList.remove('show');
})
btnCross.addEventListener('click', () => {
    alertContrac.classList.remove('showAlert');
})


//"flip-left" data-aos-delay="100" data-aos-duration="800"



