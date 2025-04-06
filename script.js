//your code here!
const list = document.getElementById('infinite-list');
let itemCount = 0;

// Function to add list items
function addItems(count = 2) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial items
addItems(10);

// Infinite scroll handler
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    addItems(2);
  }
});
