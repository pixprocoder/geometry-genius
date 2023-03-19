// Triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleBInputField = document.getElementById("triangle-input-filed-b");
  const triangleHInputField = document.getElementById("triangle-input-filed-h");
  const triangleBValue = triangleBInputField.value;
  const triangleHValue = triangleHInputField.value;

  const initialValue = 0.5;

  // calculate the triangle area
  const result = initialValue * triangleBValue * triangleHValue;
});
