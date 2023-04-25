// let elementId = document.getElementById('div-1');
// let elementId = document.getElementsByTagName('div');
// let elementId = document.getElementsByClassName('div-2');
// let elementId = document.querySelector('#div-1');
// console.log(elementId);

// let changeThis = document.querySelector('#div-1');
// changeThis.innerHTML = '<marquee>I CHANGE THIS THROUGH INNER HTML</marquee>';

// let input = document.getElementById('input-text');
// // input.setAttribute('type','checkbox');
// input.style.borderColor = 'yellow';
// input.style.color = 'blue';

// const iniElement = document.createElement('p');
// iniElement.innerHTML = 'Hello thoy';
// const iniSection = document.getElementById('seksi');
// iniSection.append(iniElement);

// iniSection.removeChild(iniElement);

const fieldInput = document.getElementById('input-text');
const buttonInput = document.getElementById('click-me');
const divBapak = document.getElementById('input-nama');
const daftarSiswa = document.getElementById('daftar-siswa');

buttonInput.addEventListener('click',function(){
    let elementBaru = document.createElement('li');
    elementBaru.innerHTML = `
        <i>${fieldInput.value}</i>
        <button onclick='deleteThis(this)'>X</button>
        `;
    daftarSiswa.append(elementBaru);
    fieldInput.value = '';
});

function deleteThis(element){
    const parent = element.parentElement;
    daftarSiswa.removeChild(parent);
}