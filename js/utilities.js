// Calculation Functions
//---------------------------------
function calculateThreeFormulas(first, second, text) {
  const inputFieldFirst = document.getElementById(first);
  const inputFieldSecond = document.getElementById(second);
  const nameElement = document.getElementById(text);
  const inputValueFirst = inputFieldFirst.value;
  const inputValueSecond = inputFieldSecond.value;
  const name = nameElement.innerText;

  // Initial Values
  const initialValue = 0.5;
  const piInitialValue = 3.14;

  //  Calculate Areas
  if (first === "ellipse-input-field-a") {
    const result = piInitialValue * inputValueFirst * inputValueSecond;
    const fixedResult = parseFloat(result.toFixed(2));
    return { fixedResult, name };
  }
  const result = initialValue * inputValueFirst * inputValueSecond;
  return { result, name };
}

function calculateTwoFormulas(first, second) {
  const inputFieldFirst = document.getElementById(first);
  const inputFieldSecond = document.getElementById(second);
  const inputValueFirst = inputFieldFirst.value;
  const inputValueSecond = inputFieldSecond.value;
  const result = inputValueFirst * inputValueSecond;
  return result;
}

// Get and set Functions
//---------------------------------
function getElements(objectName, objectResult, results) {
  const parentContainer = document.getElementById("area-container-ul");
  const objectNameElement = document.getElementById(objectName);
  const resultElement = document.getElementById(objectResult);
  const name = objectNameElement?.innerText;
  const result = resultElement?.innerText;

  const li = document.createElement("li");
  li.innerHTML = `
  <p id="object-name" class="name">${results.name}</p>  
  <p id="result" class="result">${results.result}</p>   
  `;
  parentContainer.appendChild(li);
  li.classList.add("area-container-li");

  return { result, name };
}
