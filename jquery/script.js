const elemento = $('.jepun');
console.log(elemento);
elemento.attr('style','color: blue')
// elemento.css('font-weight',900);
// elemento.css('text-decoration','line-through');
elemento.css({
    fontWeight: 900,
    textDecoration: 'line-through',
});

const texto = $('#text');
console.log(texto);
texto.html('<h1>ilapyukt</h1>');

const button = $('#btn');

button.click(function(){
    button.css('backgroundColor','purple');
});

button.mouseenter(function(){
    button.css('backgroundColor','red');
});
button.mouseleave(function(){
    button.css('backgroundColor','white');
});