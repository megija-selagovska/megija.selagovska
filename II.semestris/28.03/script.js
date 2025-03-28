function myFunction()
{
    let nameObj= document.getElementById("input_name");
    //alert(nameObj.value);
    let headderObj = document.getElementById("Hello");
    let SurnameObj = document.getElementById("input_surname");
    let ageObj= document.getElementById("input_age");
    headderObj.innerText ="Hello "  +  nameObj.value+ SurnameObj.value + "!" +ageObj.value;
    if (ageObj.value <= 0 || ageObj.value == "" || ageObj.value.match(/[^0-9]/))
    {
        alert("Error: age is incorrect!");
        return;
    }

   
}