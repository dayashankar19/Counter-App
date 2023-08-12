const incr = document.getElementById("btn1");
const decr = document.getElementById("btn2");
const res = document.getElementById("btn3");
const values = document.getElementById("value");

let count = 0;
function increment() {
  count = count + 1;
  values.textContent = count;
}
function decrement() {
  if (count == 0) {
    return;
  }
  count = count - 1;
  values.textContent = count;
}
function reset() {
  count = 0;
  values.textContent = count;
}
incr.addEventListener("click", increment);
decr.addEventListener("click", decrement);
res.addEventListener("click", reset);
