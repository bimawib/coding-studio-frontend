console.log('hello thoy');

const iniObject = {
    nama: "Bima",
    profesi: "Pengangguran Akut",
};

// WITH OBJECT DESTRUCTURING
const { nama: namae } = iniObject;
console.log(namae);

// WITHOUT OBJECT DESTRUCTURING
console.log(iniObject.profesi);

// ARITHMETIC
console.log(3 + 10);
console.log(15 - 2);
console.log(5 * 2 + 3);
console.log(39 / 3);
console.log(3 ** 2 + 4);
console.log(38 % 25);
let namber = 12;
console.log(++namber);
console.log(namber++);
console.log(--namber);

// FUNCTION
function haloKamu(name = "kamu"){
    console.log('halo '+name);
}

function calculateArea(p, l){
    return p * l;
}
let luas = calculateArea(4,5);
console.log(luas);

const iniJugaFungsi = () => {
    console.log('kal kawaii');
}
iniJugaFungsi();