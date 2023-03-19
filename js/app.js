// Triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleResult = getValueById(
    "triangle-input-field-b",
    "triangle-input-field-h"
  );
  console.log(triangleResult);
});

// pentagon calculation
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonResult = getValueById(
    "pentagon-input-field-p",
    "pentagon-input-field-b"
  );
  console.log(pentagonResult);
});

// rhombus calculation
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusResult = getValueById(
    "rhombus-input-field-d1",
    "rhombus-input-field-d2"
  );
  console.log(rhombusResult);
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
