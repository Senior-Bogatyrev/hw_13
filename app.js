let uppercaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let lowercaseLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z']

let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

$('#generateBtn').click(function(){
    if ($('.inputWidth').val() > 30 || $('.inputWidth').val() < 1){
        $('#display').val('Число должно быть в диапазоне 1-30').css('color', 'red');
    } else{
        let result ='';
        let randomList = new Array();
        if ($('#numeric').is(':checked')){
            randomList = randomList.concat(digits);
        };
        if ($('#uppercase').is(':checked')){
            randomList = randomList.concat(uppercaseLetter);
        };
        if ($('#lowercase').is(':checked')){
            randomList = randomList.concat(lowercaseLetter);
        };
        for(let i=0; i<$('.inputWidth').val(); i++){
            result += randomList[getRandomNumber(1, randomList.length - 1)]
        };
        $('#display').val(result).css('color', 'black');
    }
});
