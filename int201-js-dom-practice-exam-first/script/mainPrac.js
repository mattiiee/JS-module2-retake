import { validateEmail, validatePassword, validateUsername } from "./validate.js";
const clickMe = document.getElementById('color-btn')
console.log(clickMe)

const bgColor = document.getElementById('rainbow')
console.log(bgColor)

clickMe.addEventListener('click', (e) => {
    const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];

    bgColor.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)]   
})


const addBtn = document.querySelector('#add-btn') //add btn
console.log(addBtn)

//section 2
addBtn.addEventListener('click', () => {
    const ulEle = document.querySelector('div>ul')// ul element
    const itemInput = document.querySelector('#item-input') //item input
    const liEle = document.createElement('li')//create li
    liEle.textContent = itemInput.value
    ulEle.appendChild(liEle)
    
})

//section 3
const submitBtn = document.querySelector('#submit-btn')
const formSection = document.getElementById("input-list");
const inputs = formSection.getElementsByTagName("input");
console.log(inputs)

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const errorMessage = formSection.querySelector(".error");

    const username = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;

    if (!validateUsername(username)) {
        errorMessage.textContent =
          "Username is Invalid make sure to contain uppercase, number and not special character";
      } else if (!validateEmail(email)) {
        errorMessage.textContent = "This is not a Email format! Contain @ and .com";
      } else if (!validatePassword(password)) {
        errorMessage.textContent =
          "Password is Invalid make sure to contain uppercase, lowercase, number and special character";
      } else {
        errorMessage.textContent = "Successfully! Yay";
      }
})
