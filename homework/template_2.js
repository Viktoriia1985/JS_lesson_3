
// ______________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// _____________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//
// let element = document.getElementById('main_header');
// element.innerHTML = `February - 2021`;
// element.style.color = '#4179ff';
// element.style.fontSize = '40px';


// b) робить шириниу елементу ul 400px
//
// document.getElementsByTagName('ul')[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// const links = document.getElementsByClassName('linkList');
// for (let link of links) {
//     link.style.width = '50%';
//     link.style.height = '20px';
//     link.style.backgroundColor = '#cbb7ff';
//     link.style.margin = '10px';
//     link.style.padding = '10px';
// }


// d) отримує текст який зберігається в елементі з класом listElement2
//
// const textElement = document.getElementsByClassName('listElement2')[0].innerText;
// console.log(textElement);


// e) отримує всі елементи li та змінює ім колір фону на сірий
//
// const liElements = document.getElementsByTagName('li');
// for (let liElement of liElements) {
//     liElement.style.backgroundColor = '#d9d9d9';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
//
// const elementsA = document.getElementsByTagName('a');
// for (let element of elementsA) {
//     element.classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
//
// const a = document.getElementsByTagName('a');
// for (let item of a) {
//     if (item.innerText === 'link3') {
//         item.style.fontSize = '40px';
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//
// const a = document.getElementsByTagName('a');
// for (let item of a) {
//     item.classList.add('element_XXX' + item.innerText);
// }



// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// const subHeaders = document.getElementsByClassName('sub-header');
// const bgColor = prompt('Enter background color ');
// for (let item of subHeaders) {
//     item.style.backgroundColor = bgColor;
// }


//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
// текст елемнту = content 2 segment. Колір отримати з prompt()
//
// const subHeaders = document.getElementsByClassName('sub-header');
// const color = prompt('Enter the color of the text ');
// const content2Segment = document.getElementsByTagName('h3')[1];
// for (let item of subHeaders) {
//     if (item.style.color === content2Segment.style.color) {
//         item.style.color = color;
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст
// отримати з prompt()
//
// document.getElementsByClassName('content_1')[0].innerText = text;


// l) отримати елементи p та змінити їм padding на 20px
//
// const p = document.getElementsByTagName('p');
// for (let item of p) {
//     item.style.padding = '20px';
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// const text2 = document.getElementsByClassName('text2');
// for (let item of text2) {
//     item.innerText = 'February 2021';
// }






// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
//
// const h1 = document.createElement('h1');
// h1.innerText = 'Правила бойцовского клуба';
// document.body.appendChild(h1);
//
// const wrap = document.createElement('div');
// wrap.id = 'wrap';
// document.body.appendChild(wrap);
// let i = 1;
// for (let item of rules) {
//     let rule = document.createElement('div');
//     rule.classList.add('rules', 'rule' + i);
//     rule.innerHTML = `<h3>${i}</h3><h2>${item.title}</h2> <p>${item.body}</p><br>`;
//     rule.style.backgroundColor = 'blue';
//     wrap.appendChild(rule);
//     i++;
// }


// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];

//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив


// const user = [];
// let i = 0;
// for (let item of usersWithId) {
//     for (let item2 of citiesWithId) {
//         if (item.id === item2.user_id) {
//             user.push(item);
//             user[i].adress = item2;
//             break;
//         }
//     }
//     i++;
// }
// console.log(user);




