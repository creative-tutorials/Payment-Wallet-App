const form = document.getElementById("form");
const username = document.getElementById("userInput");
const password = document.getElementById("passwrdInput");
const alertMsg = document.querySelector(".alert");
const name = document.querySelector(".welcome")
const amountInput = document.getElementById("amount");
const add_btn = document.getElementById("new_transaction");
const tab1 = document.getElementById("d1");
const tab2 = document.getElementById("d2");
const tab3 = document.getElementById("d3");
const tab4 = document.getElementById("d4");
const send = document.getElementById("send");
const box = document.querySelector(".c3");

let custom = "Password Lenght must be greate than '6'";
let custom2 = "Form Validation can't be completed please fill all field";
// * Custom messages alerted to the wrapper
let set1 = 10;
let set2 = 20;
let set3 = 30;
let set4 = 40;

// ! Declaring variables and setting them to be a number

const date = new Date(); //* getting todays date
const day = date.getDate(); //* getting today's full date with getDate function
const month = date.getMonth() + 1; //* getting today's month with getMonth function
const year = date.getFullYear();//* getting current year in full with getFullYear function

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
]; //* calling all the months
const d = new Date(); //* getting todays date
let fullMonth = monthNames[d.getMonth()]

form.addEventListener("submit", function(event) { //* using the submit event to submit the form
    let auth = { "Username": username.value, "Password": password.value }
    event.preventDefault(); //* first prevent form from it's default submit state
    if(!username.value){ //* if username input value is null
        alertMsg.classList.add("active");
        username.classList.add("invalid");
        username.classList.replace("valid", "invalid");
        alertMsg.innerHTML = `${custom2}`;
    }else{
        alertMsg.classList.remove("active");
        username.classList.replace("invalid", "valid");
    }
    if(!password.value){ //* if password input value is null
        alertMsg.classList.add("active");
        password.classList.add("invalid");
        password.classList.replace("valid", "invalid");
        alertMsg.innerHTML = `${custom2}`;
    }else{
        alertMsg.classList.remove("active");
        password.classList.replace("invalid", "valid");

        validatePassword(); // TODO Funtion to validate password
    }

    username.addEventListener("keyup", () => { // * username on keyup event once any key is pressed
        if(!username.value){
            alertMsg.classList.add("active");
            username.classList.add("invalid");
            username.classList.replace("valid", "invalid");
            alertMsg.innerHTML = `${custom2}`;
        }else{
            alertMsg.classList.remove("active");
            username.classList.replace("invalid", "valid");
        }
    });
    password.addEventListener("keyup", () => { // * Password on keyup event once any key is pressed
        if(!password.value){
            alertMsg.classList.add("active");
            password.classList.add("invalid");
            password.classList.replace("valid", "invalid");
            alertMsg.innerHTML = `${custom2}`;
        }else{
            alertMsg.classList.remove("active");
            password.classList.replace("invalid", "valid");
            validatePassword();
        }
    });

    function validatePassword() { 
        if(password.value.length < 6){ //* if password value length is less that 6
            alertMsg.classList.add("active");
            alertMsg.innerHTML = `${custom}`;
            password.classList.add("invalid");
            password.classList.replace("valid", "invalid");
        }else{
            alertMsg.classList.remove("active");
            alertMsg.innerHTML = `${custom}`;
            password.classList.replace("invalid", "valid");
        }
     }
     if(username.classList.contains("valid") && password.classList.contains("valid")){
         console.info("Login completed");
         
         let dataComponent = [
            {
                users: `${username.value}`
            }
        ]

         localStorage.setItem("Authenticate", JSON.stringify(dataComponent));
         var sendData = JSON.parse(localStorage.getItem("Authenticate"));
         console.log(sendData);
         name.innerHTML = `Welcome ${dataComponent[0].users}`;
         document.querySelector(".wrapper").style.display = "none";
         document.querySelector(".container").style.display = "block";

        console.log(dataComponent);
     }else{
         console.error("failed to validate form");
     }
});
tab1.addEventListener("click", () => {
    amountInput.value = `${set1}`;
});
tab2.addEventListener("click", () => {
    amountInput.value = `${set2}`;
});
tab3.addEventListener("click", () => {
    amountInput.value = `${set3}`;
});
tab4.addEventListener("click", () => {
    amountInput.value = `${set4}`;
});

send.addEventListener("click", () => {
    let dialogue = prompt("Enter transaction reason");
    if(!amountInput.value){ //* if amount input value null
        console.error("failed to send transaction");
    }else{
       return SendT();
       function SendT() { 
        //    
        if(amountInput.value > 9999){ //* if the input value is greater than 9999
            console.error("You can't send transaction below 20")
        }else{
            console.log("transaction in progress...");
            setTimeout(() => {
                console.clear();
            }, 8000);
            setTimeout(() => {
                console.info("Transaction sent sucessfully");
                let newdiv = document.createElement("div");
                box.appendChild(newdiv);
                 newdiv.innerHTML = `<div class="c3">
                <div class="bbx">
                    <div class="trc">
                        <img src="image/search.png" alt="image on transaction">
                    </div>
                    <div class="right1">
                        <p id="process">${dialogue}</p>
                        <p id="date">${fullMonth + ' ' + day + ' ' + year}</p>
                    </div>
                    <div class="right2">
                        <p id="cash_paid">$${amountInput.value}</p>
                    </div>
                </div>
            </div>`
            let dataComponent = [ // ! inputing an array with different data
                {
                    users: `${username.value}`,
                    transactionRet: `${dialogue}`,
                    date: `${fullMonth + ' ' + day + ' ' + year}`,
                    price: '$' + `${amountInput.value}`
                }
            ]
            localStorage.setItem("Authenticate", JSON.stringify(dataComponent));
            var sendData = JSON.parse(localStorage.getItem("Authenticate"));
            }, 15000);
        }
        if(amountInput.value < 10000){ //* if the input value is less than 10000
            console.error("You can't send transaction above/below 40,000")
        }else{
            console.log("transaction in progress...");
            setTimeout(() => {
                console.clear();
            }, 8000);
            setTimeout(() => {
                console.info("Transaction sent sucessfully");
                let newdiv = document.createElement("div");
                box.appendChild(newdiv);
                newdiv.innerHTML = `<div class="c3">
                <div class="bbx">
                    <div class="trc">
                        <img src="image/search.png" alt="image on transaction">
                    </div>
                    <div class="right1">
                        <p id="process">${dialogue}</p>
                        <p id="date">${fullMonth + ' ' + day + ' ' + year}</p>
                    </div>
                    <div class="right2">
                        <p id="cash_paid">$${amountInput.value}</p>
                    </div>
                </div>
            </div>`
            let dataComponent = [
                {
                    users: `${username.value}`,
                    transactionRet: `${dialogue}`,
                    date: `${fullMonth + ' ' + day + ' ' + year}`,
                    price: '$' + `${amountInput.value}`
                }
            ]
            localStorage.setItem("Authenticate", JSON.stringify(dataComponent));
            var sendData = JSON.parse(localStorage.getItem("Authenticate"));
            }, 15000);
        }
        }
    }
});
add_btn.addEventListener("click", () => {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".app").style.display = "block";
});
document.getElementById("back").addEventListener("click", () => {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".app").style.display = "none";
});