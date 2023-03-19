function getValueById(first, second) {
  const inputFieldFirst = document.getElementById(first);
  const inputFieldSecond = document.getElementById(second);
  const inputValueFirst = inputFieldFirst.value;
  const inputValueSecond = inputFieldSecond.value;
  const initialValue = 0.5;
  //  calculate the triangle area
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
