
  const display = document.getElementById("display");
  let errorShown = false; // flag to check if error is displayed

    
  function appendToDisplay(x) {
    if (errorShown) {
      display.value = "";   // clear the error message
      errorShown = false;   // reset flag
    }
    display.value += x;
  }

  function clearDisplay() {
    display.value = "";
    errorShown = false; // reset flag too
  }
function calculate() {
  try {
    // Replace all "%" with "/100" so eval can handle it
    let expression = display.value.replace(/%/g, "/100");

    display.value = eval(expression);  // evaluate modified expression
  } catch (error) {
    display.value = "Error Enter a valid number";
    errorShown = true; // mark that error is shown
  }
}



