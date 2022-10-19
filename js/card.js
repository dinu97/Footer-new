function cardspace(){
    var carddigit = document.getElementById('formControlSm').value;
if(carddigit.length == 4 ||carddigit.length == 9 || carddigit.length == 14){
    document.getElementById('formControlSm').value = carddigit +" "; 
    document.getElementById('formControlSm').max=1;
}
}

function addslashes(){
    var expiredate = document.getElementById('card__input').value;
if(expiredate.length == 2 ){
    document.getElementById('card__input').value = expiredate +"/"; 
    document.getElementById('card__input').max=1;
}
}