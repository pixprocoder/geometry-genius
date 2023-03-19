function getValueById(first, second) {
  const inputFieldFirst = document.getElementById(first);
  const inputFieldSecond = document.getElementById(second);
  const inputValueFirst = inputFieldFirst.value;
  const inputValueSecond = inputFieldSecond.value;

  // Initial Values
  const initialValue = 0.5;
  const piInitialValue = 3.14;

  //  Calculate Areas
  if (first === "ellipse-input-field-a") {
    const result = piInitialValue * inputValueFirst * inputValueSecond;
    return result.toFixed(2);
  }
  const result = initialValue * inputValueFirst * inputValueSecond;
  return result;

  //   // get and set result
  //   const objectNameElement = document.getElementById("object-name");
  //   const name = document.getElementById("triangle").innerText;
  //   objectNameElement.innerText = name;

  //   // get and set result
  //   const resultElement = document.getElementById("result");
  //   resultElement.innerText = result;
}
