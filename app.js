// Get the display element
const display = document.querySelector(".display input");

// Get all the buttons
const buttons = document.querySelectorAll(".calculator button");

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the clicked button value
    const buttonValue = button.textContent;

    if (buttonValue === "AC") {
      // Clear the display
      display.value = "";
    } else if (buttonValue === "=") {
      // Evaluate the expression and display the result
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    } else {
      // Append the button value to the display
      display.value += buttonValue;
    }
  });
});
