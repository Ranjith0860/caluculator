
  const display = document.getElementById("display");
  let errorShown = false; // flag to check if error is displayed

    function calculate() {
    try {
      display.value = eval(display.value);  // evaluate expression
    } catch (error) {
      display.value = "Error Enter a valid number";
      errorShown = true; // mark that error is shown
    }
  }
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



