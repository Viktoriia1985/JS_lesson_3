
const greenDiv = document.getElementById('divka');
console.log(greenDiv);

//
// let allDivs = document.getElementsByTagName('div');
//
// const red = Math.random() * 255;
// const green = Math.random() * 255;
// const blue = Math.random() * 255;
//
// allDivs[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// allDivs[1].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


let htmlDivElement = document.createElement('div');
htmlDivElement.style.width = '100px';
htmlDivElement.style.height = '100px';
htmlDivElement.style.margin = '30px';
htmlDivElement.style.backgroundColor = 'pink';

htmlDivElement.classList.add('myOwnClass', 'boldText');
// htmlDivElement.classList.remove('boldText');
console.log(htmlDivElement.classList);


greenDiv.appendChild(htmlDivElement);
// document.body.appendChild(htmlDivElement);



// let pes = document.getElementsByTagName('p');
// for (let i = 1; i < pes.length; i+=2) {
//    console.log(i);
// }

let pes = document.getElementsByTagName('p');

for (let i = 1; i < pes.length; i+=2) {
    pes[i].classList.add('myOwnClass')
}


const students = [
    {name: 'Sergey', age: 20},
    {name: 'Julia', age: 18},
    {name: 'Vova', age: 25},
    {name: 'Dima', age: 9},
    {name: 'Rostik', age: 2},
];

for (let i = 0; i < students.length; i++) {
  const studentDiv = document.createElement('div');

  studentDiv.innerHTML = `
      Hello my name is ${students[i].name} <br>
      I am ${students[i].age} years old`;

document.body.appendChild(studentDiv);
}












