// var inputElement = document.querySelectorAll('.position1');

// // Listen for the "input" event, which triggers when the input value changes
// inputElements.forEach(function(inputElement) {
//   inputElement.addEventListener('keyup', function() {
//     // Update the value for the specific input element
//     inputElement.value = "Updated Value: " + inputElement.value;
//   });
// });
var inputElements = document.querySelectorAll('input[class^="position"]');

inputElements.forEach(function(inputElement) {
  inputElement.addEventListener('keyup', function() {
    // Update the value for the specific input element
    inputElement.value = "Updated Value: " + inputElement.value;
  });
});