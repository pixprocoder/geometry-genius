// Calculation Functions
//---------------------------------
function calculateThreeFormulas(first, second, text) {
  const inputFieldFirst = document.getElementById(first);
  const inputFieldSecond = document.getElementById(second);
  const nameElement = document.getElementById(text);
  const name = nameElement.innerText;
  const inputValueFirst = parseFloat(inputFieldFirst.value);
  const inputValueSecond = parseFloat(inputFieldSecond.value);
  inputFieldFirst.value = "";
  inputFieldSecond.value = "";

  // Initial Values
  const initialValue = 0.5;
  const piInitialValue = 3.14;

  //  Calculate Areas
  if (first === "ellipse-input-field-a") {
    const result = piInitialValue * inputValueFirst * inputValueSecond;
    const fixedResult = parseFloat(result.toFixed(2));
    return { result: fixedResult, name };
  }

  const result = initialValue * inputValueFirst * inputValueSecond;
  return { result, name };
}

function calculateTwoFormulas(first, second, text) {
  const inputFieldFirst = document.getElementById(first);
  const inputFieldSecond = document.getElementById(second);
  const nameElement = document.getElementById(text);
  const inputValueFirst = parseFloat(inputFieldFirst.value);
  const inputValueSecond = parseFloat(inputFieldSecond.value);
  const result = inputValueFirst * inputValueSecond;
  const name = nameElement.innerText;
  inputFieldFirst.value = "";
  inputFieldSecond.value = "";
  return { result, name };
}

// Get and set Functions
//---------------------------------
function setResults(results) {
  const parentContainer = document.getElementById("area-container-ul");
  const li = document.createElement("li");
  li.innerHTML = `
    <p>${results.name}</p>  
    <p>${results.result}</p>   
    `;
  parentContainer.appendChild(li);
  li.classList.add("area-container-li");
}
