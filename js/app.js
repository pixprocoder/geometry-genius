// Triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleResult = calculateThreeFormulas(
    "triangle-input-field-b",
    "triangle-input-field-h",
    "triangle"
  );
  const elements = getElements("object-name", "result", triangleResult);
  console.log(elements);
});

// Pentagon calculation
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonResult = calculateThreeFormulas(
    "pentagon-input-field-p",
    "pentagon-input-field-b"
  );
  console.log(pentagonResult);
});

// Rhombus calculation
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusResult = calculateThreeFormulas(
    "rhombus-input-field-d1",
    "rhombus-input-field-d2"
  );
  console.log(rhombusResult);
});

// Ellipse calculation
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseResult = calculateThreeFormulas(
    "ellipse-input-field-a",
    "ellipse-input-field-b"
  );
  console.log(ellipseResult);
});

// Rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleResult = calculateTwoFormulas(
    "rectangle-input-field-w",
    "rectangle-input-field-l"
  );
  console.log(rectangleResult);
});

// Parallelogram calculation
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramResult = calculateTwoFormulas(
      "parallelogram-input-field-base",
      "parallelogram-input-field-height"
    );
    console.log(parallelogramResult);
  });
