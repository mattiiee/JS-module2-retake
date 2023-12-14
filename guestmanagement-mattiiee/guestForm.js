//65130500091 อิสมัต บุญมาเลิศ
// import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchBar = document.getElementById('search-input')
    const addGusetBtn = document.getElementById('add-guest-btn')

    searchBar.addEventListener('keyup', searchGuest)

    addGusetBtn.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    let displayArea = document.querySelector('#display-area');
    let addGuest = document.createElement('div')
    let guestName = document.createElement('span')
    let xIcon = document.createElement('span')
    guestName.textContent = `${guestItem.firstname} ${guestItem.lastname}`
    xIcon.setAttribute('class', 'remove-icon')
    xIcon.setAttribute('id', `${guestItem.firstname}-${guestItem.lastname}`)
    xIcon.setAttribute('style', 'cursor:pointer;color:red')
    xIcon.textContent = ' [X]'
    xIcon.addEventListener('click', removeGuest)

    addGuest.appendChild(guestName)
    addGuest.appendChild(xIcon)
    displayArea.appendChild(addGuest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    let displayArea = document.getElementById('display-area')
    displayArea.innerHTML = ''

    guestResult.forEach((guest) => {
      displayGuest(guest)
    })
    
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    let matchedGuests = guests.searchGuests(event.target.value)
    displayGuests(matchedGuests)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstNameInput = document.getElementById('firstname-input')
    const lastNameInput = document.getElementById('lastname-input')
    
    guests.addNewGuest(firstNameInput.value,lastNameInput.value)

    displayGuest({firstname: firstNameInput.value, lastname: lastNameInput.value})
    firstNameInput.value = ''
    lastNameInput.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const removeValue = event.target.id // Kenny-Poppy
    const splitValue = removeValue.split('-') // [Kenny, Poppy]
    const fname = splitValue[0] // Kenny  
    const lname = splitValue[1] // Poppy
    const deleteGuest = {firstname: `${fname}`, lastname:`${lname}`}

    guests.removeGuest(deleteGuest)
    // ขึ้นไปลบ Div ข้างบนใน Element
    const removeDiv = event.target.parentElement
    removeDiv.remove()
  }
  
  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}


module.exports = guestForm
// export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
