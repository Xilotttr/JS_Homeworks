let input=document.querySelector('input');
let button=document.querySelector("button");
let rules_list = document.querySelector('.rules')
let rule = rules_list.children;


button.addEventListener("click", ()=> verification(input.value))

function verification(str){
    try{
        str_check(str);
        Length(str);
        letters_check(str);
        dog_check(str);
        num_check(str);
        
       // throw 'Verification done'
        
    } catch(e){

    }
}

function Length(a){
    if(a.length < 5){
        console.log('Verification failed (Length of string less than 5 symbols)')
        rule[1].style.color = 'red'
        // throw 'Verification failed (Legth of string less than 5 symbols)'
    }
    else if(a.length > 64){
        rule[2].style.color = 'red'
        console.log('Verification failed (Length of string greater than 64 symbols)')
        // throw 'Verification failed (Length of string greater than 64 symbols)'
    }
    else{
        rule[1].style.color = 'green';
        rule[2].style.color = 'green'
    }
}

function dog_check(a){
    if(!a.includes('@')){
        rule[6].style.color = 'red'
        console.log('Verification failed (There is no `@` in the string)')
        // throw 'Verification failed (There is no `@` in the string)'
    }
    else{
        rule[6].style.color = 'green'
    }
}
function num_check(a){
    if(!/\d/.test(a)){
        rule[5].style.color = 'red'
        console.log('Verification failed (There is no digits in the string)')
        // throw 'Verification failed (There is no digits in the string)'
    }
    else{
        rule[5].style.color = 'green'
    }
}

function str_check(a){
    if(a == ''){
        console.log('Your string is empty')
        rule[7].style.color = 'red'
        // throw 'Your string is empty'
    }
    else{
        rule[7].style.color = 'green'
    }
}

function letters_check(a){
    if(!/[a-zа-яA-ZА-я]/.test(a)){
        rule[3].style.color = 'red'
        console.log('Verification failed (There is NO letters in the string)')
        // throw 'Verification failed (There is NO letters in the string)'
    }
    else{
        rule[3].style.color = 'green'
    }

    if(!/[A-ZА-Я]/.test(a)){
        rule[4].style.color = 'red'
        console.log('Verification failed (There is NO uppercase letters in the string)')
        // throw 'Verification failed (There is NO uppercase letters in the string)'
    }
    else{
        rule[4].style.color = 'green'
    }
}

