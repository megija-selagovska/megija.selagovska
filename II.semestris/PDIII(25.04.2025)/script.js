function myFunction()
{
    let nameObj= document.getElementById("input_name");
    //alert(nameObj.value);
    let headderObj= document.getElementById("Hello");
    let ageObj= document.getElementById("input_age");
    headderObj.innertext= "Hello" + nameObj.value+ ageObj.value;
    if(ageObj.value<=0 || ageObj.value== ""|| !ageObj.value.match(/[0-18]/))
    {
        alert("Error: age is incorrect!");
        return;
    }

    
    let age = ageObj.value;
let citizenship =true;
if(age>=18 && citizenship)
{
    console.log("var balsot");
}
else
if(age>=18 && citizenship==false)
{
    console.log("nav pilsonis, bet ir 18");
}
else
if(age<=18 && citizenship==true)
{
    console.log("ir pilsonis, bet nav 18")
}

}
function Atzīmesrezultāti() {
let atzīme=document.getElementById("atzīme").value;
if (atzīme=90-100:"izcili")
    else
if(atzīme=70-89:"Labi")
    else
if(atzīme=50-69:"Vidēji")
    else
if(atzīme=0-49:"slikti")
    
}
