const clickedText = document.querySelector("#message");
const clickMeButton = document.querySelector("#click-button");

let counter = 0;

clickMeButton.addEventListener("click", () => {
    counter = counter + 1;

    clickedText.textContent =
        `This has been clicked ${counter} times.`;
});




const styleTextBox = document.querySelector("#name-input");

const myClassList = [
    "valid-input1",
    "valid-input2",
    "valid-input3"
];

let indexForClass = 0;

styleTextBox.addEventListener("input", () => {

   
    styleTextBox.classList.remove(
        myClassList[indexForClass]
    );


    indexForClass =
        (indexForClass + 1) % myClassList.length;


    styleTextBox.classList.add(
        myClassList[indexForClass]
    );
});




const skillInput = document.querySelector("#item-input");
const addSkillButton = document.querySelector("#add-item-button");
const removeSkillButton =
    document.querySelector("#remove-item-button");

const skillList = document.querySelector("#item-list");



addSkillButton.addEventListener("click", () => {

    const newSkillValue = skillInput.value.trim();


    if (newSkillValue === "") {
        return;
    }


    const newSkillItem = document.createElement("li");

    newSkillItem.textContent = newSkillValue;

    skillList.appendChild(newSkillItem);


    skillInput.value = "";
});


removeSkillButton.addEventListener("click", () => {

    const fullSkillList =
        document.querySelectorAll("#item-list li");


    if (fullSkillList.length > 0) {
        fullSkillList[fullSkillList.length - 1].remove();
    }
});




const contactForm =
    document.querySelector("#contact-form");

const contactName =
    document.querySelector("#contact-name");

const contactEmail =
    document.querySelector("#contact-email");

const subject =
    document.querySelector("#subject");

const contactMessage =
    document.querySelector("#contact-message");

const successMessage =
    document.querySelector("#success-message");



contactForm.addEventListener("submit", (event) => {


    event.preventDefault();

    let hasError = false;


 

    const nameError =
        document.querySelector("#contact-name-error");

    if (contactName.value.trim() === "") {

        nameError.textContent =
            "Error: Name cannot be empty.";

        hasError = true;

    } else {

        nameError.textContent = "";
    }


 

    const emailError =
        document.querySelector("#contact-email-error");

    if (contactEmail.value.trim() === "") {

        emailError.textContent =
            "Error: Email cannot be empty.";

        hasError = true;

    } else if (!contactEmail.value.includes("@")) {

        emailError.textContent =
            "Error: Please enter a valid email address.";

        hasError = true;

    } else {

        emailError.textContent = "";
    }


   

    const subjectError =
        document.querySelector("#subject-error");

    if (subject.value.trim() === "") {

        subjectError.textContent =
            "Error: Subject cannot be empty.";

        hasError = true;

    } else {

        subjectError.textContent = "";
    }




    const messageError =
        document.querySelector("#contact-message-error");

    if (contactMessage.value.trim() === "") {

        messageError.textContent =
            "Error: Message cannot be empty.";

        hasError = true;

    } else {

        messageError.textContent = "";
    }



    if (!hasError) {

        successMessage.textContent =
            "Accepted! Your message was submitted successfully.";

        // Clear the form
        contactForm.reset();

    } else {

        successMessage.textContent = "";
    }
});




// Clear name error
contactName.addEventListener("input", () => {

    document.querySelector("#contact-name-error")
        .textContent = "";

    successMessage.textContent = "";
});


// Clear email error
contactEmail.addEventListener("input", () => {

    document.querySelector("#contact-email-error")
        .textContent = "";

    successMessage.textContent = "";
});


// Clear subject error
subject.addEventListener("input", () => {

    document.querySelector("#subject-error")
        .textContent = "";

    successMessage.textContent = "";
});


// Clear message error
contactMessage.addEventListener("input", () => {

    document.querySelector("#contact-message-error")
        .textContent = "";

    successMessage.textContent = "";
});


// Fun Facts API
const factButton = document.querySelector("#fact-button");
const factText = document.querySelector("#fact-text");

factButton.addEventListener("click", () => {
    factText.textContent = "Loading a fun fact...";

    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then(response => response.json())
        .then(data => {
            factText.textContent = data.text;
        })
        .catch(error => {
            factText.textContent = "Sorry, I couldn't get a fun fact right now.";
        });
});