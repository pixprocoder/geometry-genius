// Triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleBInputField = document.getElementById("triangle-input-field-b");
  const triangleHInputField = document.getElementById("triangle-input-field-h");
  const triangleBValue = triangleBInputField.value;
  const triangleHValue = triangleHInputField.value;

  const initialValue = 0.5;

  // calculate the triangle area
  const result = initialValue * triangleBValue * triangleHValue;
  console.log(result);
});

// rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const triangleWidthInputField = document.getElementById(
    "rectangle-input-field-w"
  );
  const triangleLengthInputField = document.getElementById(
    "rectangle-input-field-l"
  );
  const triangleWidthValue = triangleWidthInputField.value;
  const triangleLengthValue = triangleLengthInputField.value;

  // calculate the triangle area
  const result = triangleWidthValue * triangleLengthValue;
  console.log(result);
});

// rectangle calculation
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramBaseInputField = document.getElementById(
      "parallelogram-input-field-base"
    );
    const parallelogramHeightInputField = document.getElementById(
      "parallelogram-input-field-height"
    );
    const parallelogramBaseValue = parallelogramBaseInputField.value;
    const parallelogramHeightValue = parallelogramHeightInputField.value;

    // calculate the triangle area
    const result = parallelogramBaseValue * parallelogramHeightValue;
    console.log(result);
  });
