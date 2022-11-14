console.log("hiiiiiiiii");
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('email');
const password = document.getElementById('password');
// const errortext = document.getElementsByClassName('');
// const errorIcon = document.getElementsByClassName('');

firstName.value = '';
lastName.value = '';
emailAddress.value = '';
password.value = '';

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    checkInputs(); 
})

function checkInputs(){
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailAddressValue = emailAddress.value;
    const passwordValue = password.value;


    if(firstNameValue === ''){
        setErrorFor(firstName, 'First Name can not be empty');
    }else{
        setSuccessFor(firstName);
    }

    if(lastNameValue === ''){
        setErrorFor(lastName, 'Last Name can not be empty');
    }else{
        setSuccessFor(lastName);
    }

    if(emailAddressValue === ''){
        setErrorFor(emailAddress, 'Email Address can not be empty');
    }
    else if(!isEmailValid(emailAddressValue)){
        setErrorFor(emailAddress, 'Looks like this is not an email')
    }
    else{
        setSuccessFor(emailAddress);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password can not be empty');
    }else{
        setSuccessFor(password);
    }


}

function setErrorFor(input, message){
    const formControl = input.parentElement.parentElement;
    const error = formControl.querySelector('em');

    error.innerText = message;

    //add error class name
    formControl.className = 'form-control error';
}


function setSuccessFor(input){
    const formControl = input.parentElement.parentElement;
    const error = formControl.querySelector('em');

    formControl.className = 'form-control success';
    error.innerText = "";

}


function isEmailValid(email){
    return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}