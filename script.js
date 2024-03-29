function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror(id,error){
//sets error inside tag of id
element=document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
var returnval=true;
clearErrors();
//for name
var name = document.forms['myForm']["fname"].value;
if(name.length<5){
    seterror("name","*Length of the name is too short");
    returnval = false;
}
 //name should be filled it cannot be blank
if(name.length == 0){
    seterror("name","*Username cannot be blank");
    returnval = false;
}
//for phone number
var phone = document.forms['myForm']["fphone"].value;
if(phone.length!=10){
    seterror("phone","*Length of the phone number is too long");
    returnval = false;
}
//for password
var password = document.forms['myForm']["fpass"].value;
if(password.length< 8){
    seterror("pass","*Password is not strong");
    returnval = false;
}
//for confirmpassword

var Cpassword = document.forms['myForm']["fcpass"].value;
if(Cpassword!=password){
    seterror("cpass","*password and confirm password should match");
    returnval = false;
}


return returnval;

}