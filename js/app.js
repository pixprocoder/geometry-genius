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

// parallelogram calculation
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

// rhombus calculation
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusD1InputField = document.getElementById("rhombus-input-field-d1");
  const rhombusD2InputField = document.getElementById("rhombus-input-field-d2");
  const rhombusD1Value = rhombusD1InputField.value;
  const rhombusD2Value = rhombusD2InputField.value;

  const initialValue = 0.5;
  // calculate the triangle area
  const result = initialValue * rhombusD1Value * rhombusD2Value;
  console.log(result);
});

// pentagon calculation
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonPInputField = document.getElementById("pentagon-input-field-p");
  const pentagonBInputField = document.getElementById("pentagon-input-field-b");
  const pentagonPValue = pentagonPInputField.value;
  const pentagonBValue = pentagonBInputField.value;

  const initialValue = 0.5;
  // calculate the triangle area
  const result = initialValue * pentagonPValue * pentagonBValue;
  console.log(result);
});

// ellipse calculation
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseAInputField = document.getElementById("ellipse-input-field-a");
  const ellipseBInputField = document.getElementById("ellipse-input-field-b");
  const ellipseAValue = ellipseAInputField.value;
  const ellipseBValue = ellipseBInputField.value;

  const initialValue = 3.14;
  // calculate the triangle area
  const result = initialValue * ellipseAValue * ellipseBValue;
  console.log(result.toFixed(2));
});
