// variables
const clickedText = document.querySelector("#message");
const clickMeButton = document.querySelector("#click-button");

let counter = 0;

// event listener
clickMeButton.addEventListener("click", () => {
    counter = counter + 1;
    clickedText.textContent = `This has been clicked ${counter} times.`;
})

//-----------------------------------------------------------------------//
const styleTextBox = document.querySelector("#name-input");

const myClassList = ["valid-input1","valid-input2","valid-input3"]//array

let indexForClass = 0;


styleTextBox.addEventListener("input", () => {
    styleTextBox.classList.remove(myClassList[indexForClass]);
    indexForClass = (indexForClass + 1) % 3; // Modulo
    styleTextBox.classList.add(myClassList[indexForClass]);
})


//-----------------------------------------------------------------------//
const skillInput = document.querySelector("#item-input");
const addSkillButton = document.querySelector("#add-item-button");
const skillList = document.querySelector("#item-list");

addSkillButton.addEventListener("click", () => {
    const newSkillValue = skillInput.value;

    const newSkillItem = document.createElement("li");
    newSkillItem.textContent = newSkillValue;

    skillList.appendChild(newSkillItem);
    skillInput.value = "";

})

const removeSkillButton = document.querySelector("#remove-item-button");
removeSkillButton.addEventListener("click", () => {
    const fullSkillList = document.querySelectorAll("#item-list li");
    fullSkillList[fullSkillList.length - 1].remove();
})
//-----------------------------------------------------------------------//
 const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const nameInput = document.querySelector("#name");
    const errorMessage = document.querySelector("#name-error");
  
    if (nameInput.value.trim() === ""){
      errorMessage.textContent = "Error: Name cannot be empty";
     } else{
          console.log('Accepted: ${nameInput.value}');
          nameInput.value = "";
          errorMessage.textContent = "";
    }
})