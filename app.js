
//** first we are going to extract the elements from our html with
// these constants===>
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')


//now we are going to validate our form with formValidation 
//function that we will declare below==>
form.addEventListener('submit',function(event){
    event.preventDefault()
    formValidation(event)
})

 // we are going to have function that will gets triggered whenever
 // our required conditions are NOT met==> setError() function ==>
function setError(element, message){
    //based on the element that have the error, we will first get
    // its parent element, so it will be the input-control div that
    // will have all the input content inside it, also with the error
    // message that we want to add to it ==>
    const inputControl = element.parentElement;

    // then we will get the div with the alert-message  class in that
    // input-control div and give it a name to access it more easily==>
    const alertMessage = inputControl.querySelector('.alert-message')

    //and now we are going to set the text inside of our alert-message div
    // to be the message that we will have inside our function as a message parameter==>
    alertMessage.innerText = message

    //and now we will add the alert-input class name to our input ==>
    element.classList.add('alert-input')
    element.classList.remove('success')

}


//also we need an success function that will get only an element as a
// parameter and we will trigger it when the user provided the required 
//data with the format that we want:==>
    function setSuccess(element){
       //this time also we will extract the parent element of our input,
       // that will be input-control:==>
        const inputControl = element.parentElement;
        
       //also we are going to extract the aler-message div again to set
       // the text inside it to be an empty string ==>
        const alertMessage = inputControl.querySelector('.alert-message')

       //now we will set alertMessage to be an empty string (we will clear it:) ==>
        alertMessage.innerText = ''

       // we are going to delete the alert-input class name from our input to also
       // not show the alert image and also turn its border to be black again: ==>
        element.classList.remove('alert-input')
       //we also nee dto deactivate class name of success, in case that it have been
       // triggered before and now the input value does not meet the criteria we want
        element.classList.add('success')
    }

// i copied this from this link from codeOpen 
//(https://codepen.io/javascriptacademy-stash/pen/oNeNMNR?editors=0010), 
//i learned about it from a toturial video (https://www.youtube.com/watch?v=CYlNJpltjMM)
// from youtube JavaScript Academy channel
// this regrex will simply check the validation of our email
// TODO : i should definetly check about this method and how it works, but for now 
//i will just copy and paste it: ==>
    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


// * in this function, we are going to validate our inputs
function formValidation(event){
    // * first we are going to get the value of every input in our form, but also we are
    // going to use .trim() method, as it will get rid of all the white spaces including
    // spaces and so on===>
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    // now we need to add every validation condition that we need for our inputs to be checked
    if (firstName.value === ""){
        setError(firstName, 'First Name cannot be empty')
    } else if (firstName.value.length <=2 && firstName.value.length>0){
        setError(firstName, 'Please enter a valid Name')
    } else {
        setSuccess(firstName)
    }


    if(lastName.value === ''){
        setError(lastName,'Last Name cannot be empty')
    }else if (lastName.value.length <=2 && firstName.value.length>0){
        setError(lastName, 'Please enter a valid Name')
    }else {
        setSuccess(lastName)
    }
    

    if(emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}