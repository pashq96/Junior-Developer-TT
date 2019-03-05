import $ from 'jquery';


// Создание формы
$('#btn').click(function(){
    //Заполняем невидимую форму
    $('#Card').val($('#CardNumber1').val()+$('#CardNumber2').val()+$('#CardNumber3').val()+$('#CardNumber4').val());
    $('#mmyyyyExpiration').val($('#month').val()+ "/" +$('#year').val())
    $('#nameCard').val($('#name').val())
    $('#CVCCard').val($('#cvc').val());

    $('form').submit(function( event ) {
        if ( validateForm() ) { // если есть ошибки возвращает true
          event.preventDefault();
        }
    });
})

function validateForm() {
    $(".errorValid").removeClass('errorValid');
    let vNum;
    let vExpiration;
    let vNameCard;
    let vCVCCard;


    //Проверяет заполнение всех полей номера карты
    if($("#Card").val().length != 16) {
        vNum = true;
        $('.numberInput').addClass('errorValid')
    }else{vNum = false;}
    
    // var d = new Date();
    // var strDate =(d.getMonth()+1) + "/" +d.getFullYear();
    // console.log(strDate.match(/.{2}/))


    // Проверка заолнения даты
    if($('#mmyyyyExpiration').val().length != 7) {
        vExpiration = true;
        $('.MMYYYYselect').addClass('errorValid')
    }else{vExpiration = false;}

    // Проверка заолнения имени
    if($("#nameCard").val().length < 4) {
        vNameCard = true;
        $('#name').addClass('errorValid')
    }else{vNameCard = false;}

    // Проверка заолнения cvc
    if($("#CVCCard").val().length < 3) {
        vCVCCard = true;
        $('#cvc').addClass('errorValid')
    }else{vCVCCard = false;}


    return (vNum || vExpiration || vNameCard || vCVCCard)
}

$("input[type='cardNumber'], #cvc").on('input keyup', function(e) {

    //Позволяет вводить только цифры в номер карты
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }

    // переносит фокус по инпутам внутри #inpWrap
    if($(this).val().length >= 4) {
        $(this).next('input').focus();
    }
})

$("input[type='name']").on('input keyup', function(e) {

    //Позволяет вводить только заглавные латинские буквы в "Держатель карты"
    if (this.value.match(/[^A-Za-z\s]/g)) {
        this.value = this.value.replace(/[^A-Za-z\s]/g, '');
    }
})
