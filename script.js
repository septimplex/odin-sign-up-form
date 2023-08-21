let inputs = document.querySelectorAll("input");
console.log("testing");

inputs.forEach((element) => {
    element.addEventListener("change", e =>{
        let inputValue = e.target.value;
        let inputName = e.target.id;
        let pFromCurrent = e.target.nextElementSibling;
        
        

        if(inputName == "name" || inputName == "last-name"){
            if(inputValue.length == 0){
                pFromCurrent.innerText = "Cannot leave this field empty."
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }

            else if(inputValue.length > 1){
                pFromCurrent.innerText = "";
                e.target.style.boxShadow = "0 0 2px 1px green";
                e.target.style.border = "1px green solid";
            }
    
            else{
                pFromCurrent.innerText = "Name has to be longer than 1 character.";
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            } 
        }

        if(inputName == "email"){
            if(inputValue.length == 0){
                pFromCurrent.innerText = "Cannot leave this field empty."
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }

            else if(!validateEmail(inputValue)){
                pFromCurrent.innerText = "Incorrect email format.";
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }
            else{
                pFromCurrent.innerText = "";
                e.target.style.boxShadow = "0 0 2px 1px green";
                e.target.style.border = "1px green solid";
            }
        }

        if(inputName == "phone"){
            if(inputValue.length == 0){
                pFromCurrent.innerText = "Cannot leave this field empty."
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }
            else if(!validatePhone(inputValue)){
                pFromCurrent.innerText = "Incorrect phone format.";
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }
            else{
                pFromCurrent.innerText = "";
                e.target.style.boxShadow = "0 0 2px 1px green";
                e.target.style.border = "1px green solid";
            }
        }

        if(inputName == "password"){
            if(inputValue.length == 0){
                pFromCurrent.innerText = "Cannot leave this field empty."
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }
            else if(inputValue.length <= 8){
                pFromCurrent.innerText = "Password has to be longer than 8 characters.";
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }

            else{
                pFromCurrent.innerText = "";
                e.target.style.boxShadow = "0 0 2px 1px green";
                e.target.style.border = "1px green solid";
            }
        }

        if(inputName == "confirm-password"){
            let pass = document.querySelector("#password");
            
            if(pass.value == inputValue){
                pass.nextElementSibling.innerText = "";
                e.target.style.boxShadow = "0 0 2px 1px green";
                e.target.style.border = "1px green solid";
            }
            else{
                pass.nextElementSibling.innerText = "Passwords do not match.";
                e.target.style.boxShadow = "0 0 2px 1px red";
                e.target.style.border = "1px red solid";
            }
            console.log(pass, pass.value);
        }
        
    });
    
});

function validateEmail(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    else{
        return false;
    }
}

function validatePhone(phone){
    if(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)){
        return true;
    }
    else{
        return false;
    }
}
