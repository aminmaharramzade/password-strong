const test = document.querySelector("#test");
const input = document.querySelector("#input");

input.addEventListener("input", function () {
  if (input.value.length < 6) {
    test.textContent = "Password is weak";
    test.style.color = "#EF0107";
  } else if (input.value.length < 12) {
    test.textContent = "Password is medium";
    test.style.color = "#FFD700";
  } else if (input.value.length < 20) {
    test.textContent = "Password is strength";
    test.style.color = "#03C03C";
  } else {
    test.textContent = "Must be 8-20 characters long.";
    test.style.color = "#fff";
  }
});
