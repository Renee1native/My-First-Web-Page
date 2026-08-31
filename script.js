// variables
const clickedText = document.querySelector("#message");
const clickMeButton = document.querySelector("#click-button");

let counter = 0;

// event listener
clickMeButton.addEventListener("click", () => {
    counter = counter + 1;
    clickedText.textContent = `This has been clicked ${counter} times.`;
})

