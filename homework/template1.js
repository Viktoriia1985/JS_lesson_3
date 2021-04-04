// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
//
// console.log(document);
//
// const idContent = document.getElementById('content');
// console.log(idContent);

// b) отримує текст з блоку з id "rules"
//
// const idRules = document.getElementById('rules');
// console.log(idRules);

// c) замініть текст параграфа з id 'content' на будь-який інший
//
// idContent.innerHTML = 'Hello OKTEN <hr>';

// d) замініть текст параграфа з id 'rules' на будь-який інший
//
// idRules.innerText = 'Hello OK10';

// e) змініть кожному елементу колір фону на червоний
//
// idContent.style.backgroundColor = '#ff0639';
// idRules.style.backgroundColor = '#e23333';

// f) змініть кожному елементу колір тексту на синій
//
// idContent.style.color = 'white';
// idRules.style.color = '#fffc00';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// Юрий, будьте добры, подскажите, как сделать классы в id=rules, чтобы они выводились массивом
// в console. Я пробовада в  <div id="rules"></div> вставить ПЕШКИ с классами, но в console
//выводит массив 0.
//В домашке элементы <p> вывела отдельно от класса id=rules. По-иному, не знаю как...((
//
// let ruleT = document.getElementsByClassName('rule');
// console.log(ruleT);


// h) отримати всі елементи з класом fc_rules
//
// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(fcRules);


// i) поміняти колір тексту у всіх елементів fc_rules на червоний
//
// for (let i = 0; i < fcRules.length; i++) {
//    fcRules[i].style.color = 'red';
//    fcRules[i].style.fontSize = '30px';
//    fcRules[i].innerText = `FEB-202${i}`;
// }


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за
// допомоги document.createElement. Вставити цей блок на сторінку
//
// const users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];
//
//
// for (let i = 0; i < users.length; i++) {
//    const userDiv = document.createElement('div');
//
//    userDiv.style.backgroundColor = '#ffe4ab';
//    userDiv.style.color = '#673b69';
//    userDiv.style.height = '50px';
//    userDiv.style.width = '350px';
//
//    userDiv.style.margin = '50px';
//    userDiv.style.padding = '20px';
//    userDiv.style.borderRadius = '10px';
//    userDiv.style.border = 'solid';
//    userDiv.style.borderColor = 'brown';
//
//
//    userDiv.innerHTML = `
//    Hello my name is ${users[i].name} <br>
//    I am ${users[i].age} years old <br>
//    Marriage status is ${users[i].status} <br><br>`;
//
//    document.body.appendChild(userDiv);
// }


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement. Блок з адресою зробити окремим блоком, з блоками для
// кожної властивості
//
// const users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
//
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     const div = document.createElement('div');
//     const name = document.createElement('h3');
//     const age = document.createElement('p');
//     const status = document.createElement('p');
//     const address = document.createElement('div');
//
//     for (const item in user.address) {
//         const temp = document.createElement('div');
//         temp.innerHTML = user.address[item];
//         address.appendChild(temp);
//
//         address.style.backgroundColor = '#96eeff';
//         address.style.color = '#001d9b';
//         address.style.width = '300px';
//         address.style.height = '80px';
//         address.style.borderRadius = '10px';
//         address.style.margin = '10px 10px 50px 10px';
//         address.style.padding = '10px';
//         address.style.border = 'dotted';
//         address.style.borderColor = '#001d9b';
//
//         status.style.backgroundColor = '#e887ff';
//         status.style.color = '#001d9b';
//         status.style.width = '300px';
//         status.style.height = '50px';
//         status.style.borderRadius = '10px';
//         status.style.margin = '10px';
//         status.style.padding = '10px';
//         status.style.border = 'dotted';
//         status.style.borderColor = '#001d9b';
//
//         name.style.backgroundColor = '#fffa96';
//         name.style.color = '#001d9b';
//         name.style.width = '300px';
//         name.style.height = '50px';
//         name.style.borderRadius = '10px';
//         name.style.margin = '10px';
//         name.style.padding = '10px';
//         name.style.border = 'dotted';
//         name.style.borderColor = '#001d9b';
//
//         age.style.backgroundColor = '#ffbda8';
//         age.style.color = '#001d9b';
//         age.style.width = '300px';
//         age.style.height = '50px';
//         age.style.borderRadius = '10px';
//         age.style.margin = '10px';
//         age.style.padding = '10px';
//         age.style.border = 'dotted';
//         age.style.borderColor = '#001d9b';
//     }
//
//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;
//
//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);
//
//     document.body.appendChild(div);
// }








































