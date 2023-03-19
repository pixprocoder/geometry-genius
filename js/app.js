// Triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleResult = calculateThreeFormulas(
    "triangle-input-field-b",
    "triangle-input-field-h",
    "triangle"
  );

  setResults(triangleResult);
});

// Pentagon calculation
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const pentagonResult = calculateThreeFormulas(
    "pentagon-input-field-p",
    "pentagon-input-field-b",
    "pentagon"
  );
  setResults(pentagonResult);
});

// Rhombus calculation
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusResult = calculateThreeFormulas(
    "rhombus-input-field-d1",
    "rhombus-input-field-d2",
    "rhombus"
  );
  setResults(rhombusResult);
});

// Ellipse calculation
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const ellipseResult = calculateThreeFormulas(
    "ellipse-input-field-a",
    "ellipse-input-field-b",
    "ellipse"
  );
  setResults(ellipseResult);
});

// Rectangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleResult = calculateTwoFormulas(
    "rectangle-input-field-w",
    "rectangle-input-field-l",
    "rectangle"
  );
  setResults(rectangleResult);
});

// Parallelogram calculation
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const parallelogramResult = calculateTwoFormulas(
      "parallelogram-input-field-base",
      "parallelogram-input-field-height",
      "parallelogram"
    );
    setResults(parallelogramResult);
  });
