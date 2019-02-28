import $ from 'jquery';


var form = document.querySelector('#form')
var fields = form.querySelectorAll('.field')
var numberInput = document.getElementsByClassName('numberInput')
var day = document.getElementById('day')

// Записывает в number номер карты и делает переносит фокус 
// по инпутам
function test(obj) {
var inp1 = document.getElementById('CardNumber1');
var inp2 = document.getElementById('CardNumber2');
var inp3 = document.getElementById('CardNumber3');
var inp4 = document.getElementById('CardNumber4');
var number = document.getElementById('Card');
number.value = inp1.value + '' + inp2.value + '' + inp3.value + '' + inp4.value;
    if (obj.value.length == 4) {
        var next = obj.nextSibling;
        while(next.nodeType != 1 && next.nextSibling)
            next = next.nextSibling
        if (next.nodeType == 1)
            next.focus()
    }
}
// валидация номера карты
function validate(inp) {
inp.value = inp.value.replace(/[^0-9]/, "")
}
// валидация имени
function validatename(inp){
    inp.value = inp.value.replace(/[^A-Za-z\s]/, "")
}

// проверка формы
form.addEventListener('submit', function (event) {
	var name = document.querySelector('#name')
    var Card = document.getElementById('Card')
    var cvc = document.getElementById('cvc')

// обнуление ошибок
    errorValid()
// проверка инпутов с классом field
	fieldsValid()
// проверка имени 
	nameValid(name)
// проверка карты 
    cardValid(Card)
// проверка cvc
    cvcValid(cvc)
})

function errorValid(){
	for (var i = 0; i < fields.length; i++) {
	    fields[i].style.border= "1px solid transparent"
  	}
	for (var i = 0; i < numberInput.length; i++) {
    numberInput[i].style.border= "1px solid transparent"
	}
}

function fieldsValid(){
	for (var i = 0; i < fields.length; i++) {
	    if (!fields[i].value) {
	        fields[i].style.border= "1px solid red"
	        event.preventDefault()
	    }
  	}
}

function nameValid(name){
	if(!name.value || name.value.length < 4){
        name.style.border= "1px solid red"
        event.preventDefault()
    }
}

function cardValid(Card){
	if(!Card.value || Card.value.length < 16){
    	for (var i = 0; i < numberInput.length; i++) {
        numberInput[i].style.border= "1px solid red"
        event.preventDefault()
    	}
    }
}

function cvcValid(cvc){
	if(!cvc.value || cvc.value.length < 3){
        cvc.style.border= "1px solid red"
        event.preventDefault()
    }
}