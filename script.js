// Retrieve expenses from local storage or initialize an empty array
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// Function to save expenses to local storage
function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Function to add an expense
function addExpense(name, amount) {
  const expense = { name, amount };
  expenses.push(expense);
  saveExpenses();
}

// Function to delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  saveExpenses();
}

// Function to edit an expense
function editExpense(index, name, amount) {
  // expenses.splice(index, 1);
  const expense = expenses[index];
  expense.name = name;
  expense.amount = amount;
  saveExpenses();
}

// Function to display expenses in the table
function displayExpenses() {
  const tbody = document.querySelector('#expenseTable tbody');
  tbody.innerHTML = '';

  expenses.forEach((expense, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${expense.amount}</td>
      <td>
        <button class="editButton" data-index="${index}">Edit</button>
        <button class="deleteButton" data-index="${index}">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Event listener for form submission
document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('expenseName').value;
  const amount = document.getElementById('expenseAmount').value;
  addExpense(name, amount);
  displayExpenses();
  this.reset();
});

// Event listener for edit and delete buttons
document.getElementById('expenseTable').addEventListener('click', function(event) {
  if (event.target.classList.contains('editButton')) {
 
    
    const index = event.target.dataset.index;
    const expense = expenses[index];
  
    document.getElementById('expenseName').value = expense.name;
    document.getElementById('expenseAmount').value = expense.amount;
    document.getElementById('expenseForm').dataset.index = index;
    
  } else if (event.target.classList.contains('deleteButton')) {
    const index = event.target.dataset.index;
    deleteExpense(index);
    displayExpenses();
  }
});

// Event listener for form update
document.getElementById('expenseForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('expenseName').value;
  const amount = document.getElementById('expenseAmount').value;
  const index = this.dataset.index;
  editExpense(index, name, amount);
  displayExpenses();
  this.reset();
  delete this.dataset.index;
});

// Initial display of expenses
displayExpenses();
