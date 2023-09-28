// Get value from user
function Solve(val) {
  document.getElementById("calc").value += val;
}
// clear all input and result
function Clear() {
  document.getElementById("calc").value = "";
  document.getElementById("result").value = "";
}
// Backspace
function Back() {
  var ev = document.getElementById("calc");
  ev.value = ev.value.slice(0, -1);
}
// Show result
function Result() {
  document.getElementById("result").value = eval(document.getElementById("calc").value);
}
