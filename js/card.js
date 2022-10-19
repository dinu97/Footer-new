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

function checkforblank(){
    var errormessage =" ";
        if(document.getElementById('formControlSm').value==" "){
            errormessage +="please enter card number \n";
            document.getElementById('formControlSm').style.borderColor="red";
    }

    if(document.getElementById('card__input').value==" "){
        errormessage +="please enter date \n";
        document.getElementById('card__input').style.borderColor="red";
        
    }
    if(document.getElementById('cvv').value==" "){
        errormessage +="please enter cvc number \n";
        document.getElementById('cvv').style.borderColor="red";
        
    }
    if(document.getElementById('card-number').value==" "){
        alert(errormessage);
        return false;
        
    }
    if(errormessage != ""){
        errormessage +="please select country \n";
        document.getElementById('card-number').style.borderColor="red";
        
    }

    
}
