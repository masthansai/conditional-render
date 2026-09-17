// State (equivalent to useState(0))
let count = 0;

// DOM Element
const counterBtn = document.getElementById('counterBtn');

// Event Handler (equivalent to setCount(count + 1))
counterBtn.addEventListener('click', () => {
  count += 1;
  counterBtn.textContent = `Count: ${count}`;
});
