let input=document.querySelector('input');
let button=document.querySelector("button");
let result=document.querySelector('.result_field')


button.addEventListener("click", ()=> verification(input.value))

function verification(str){
    result.innerHTML='';
    try{
        str_check(str);
        Length(str);
        letters_check(str);
        dog_check(str);
        num_check(str);
        
        throw 'Verification done'
        
    } catch(e){
        result.append(e);
    }
}

function Length(a){
    if(a.length < 5){
        console.log('Verification failed (Length of string less than 5 symbols)')
        throw 'Verification failed (Legth of string less than 5 symbols)'
    }
    else if(a.length > 64){
        console.log('Verification failed (Length of string greater than 64 symbols)')
        throw 'Verification failed (Length of string greater than 64 symbols)'
    }
}

function dog_check(a){
    if(a.includes('@') != true){
        console.log('Verification failed (There is no `@` in the string)')
        throw 'Verification failed (There is no `@` in the string)'
    }
}
function num_check(a){
    if(!/\d/.test(a)){
        console.log('Verification failed (There is no digits in the string)')
        throw 'Verification failed (There is no digits in the string)'
    }
}

function str_check(a){
    if(a == ''){
        console.log('Your string is empty')
        throw 'Your string is empty'
    }
}

function letters_check(a){
    if(!/[a-zа-яA-ZА-я]/.test(a)){
        console.log('Verification failed (There is NO letters in the string)')
        throw 'Verification failed (There is NO letters in the string)'
    }

    if(!/[A-ZА-Я]/.test(a)){
        console.log('Verification failed (There is NO uppercase letters in the string)')
        throw 'Verification failed (There is NO uppercase letters in the string)'
    }
}

