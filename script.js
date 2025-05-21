const text = document.getElementById('text');
const amount = document.getElementById('amount');
const addBtn = document.getElementById('add');
const transactions = document.getElementById('transactions');
const balanceDisplay = document.getElementById('balance');

let balance = 0;

addBtn.addEventListener('click', function () {
  const description = text.value.trim();
  const value = parseFloat(amount.value.trim());

  if (!description || isNaN(value)) {
    alert('Please fill in both fields with valid data.');
    return;
  }

  // Create transaction item
  const li = document.createElement('li');
  li.classList.add(value >= 0 ? 'income' : 'expense');
  li.innerHTML = `
    ${description} <span>${value >= 0 ? '+' : '-'}$${Math.abs(value).toFixed(2)}</span>
  `;

  // Append to transaction list
  transactions.appendChild(li);

  // Update balance
  balance += value;
  balanceDisplay.textContent = `$${balance.toFixed(2)}`;

  // Clear input fields
  text.value = '';
  amount.value = '';
});
