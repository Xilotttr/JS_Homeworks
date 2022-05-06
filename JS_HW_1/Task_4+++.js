let age_4 = prompt('Enter your age');
function ages_4(age){
    let age_2 = 18, age_3 = 60
    age = Number(age)
    if(!isNaN(age) && age > 0)
    {
        if(age < age_2)
        {
        console.log (`You don't have access cause your age is ` + age + ` It's less then`)
        }
        else if(age >= age_2 && age < age_3)
        {
            console.log ('Welcome !')
        }
        else if(age > age_3)
        {
        console.log ('Keep calm and look Culture channel')
        }
        else
        {
            console.log ('Technical work')
        }
    }
    else
    {
        if(isNaN(age))
        {
            console.log('Entered data is NaN')
        }
        else if(age < 0)
        {
            console.log('Entered data less than 0')
        }
    }  
}     
      
      ages_4(age_4);