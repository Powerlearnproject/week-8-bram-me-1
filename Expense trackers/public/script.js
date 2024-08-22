document.addEventListener('DOMContentLoaded', () => {
  // Add Expense Form Submission
  document.getElementById('expenseForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const category = document.getElementById('expenseCategory').value;
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value); // Ensure Amount is a number
    const date = document.getElementById('expenseDate').value;

    try {
      const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Category_ID: category, Description: name, Amount: amount, Date: date })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error adding expense');
      }

      alert('Expense added successfully');
      // Optionally, update UI to reflect new expense
    } catch (error) {
      console.error('Error adding expense:', error);
      alert(`Failed to add expense: ${error.message}`);
    }
  });

  // Add Income Form Submission
  document.getElementById('incomeForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('incomeAmount').value); // Ensure Amount is a number
    const date = document.getElementById('incomeDate').value;
    const source = document.getElementById('incomeSource').value;

    try {
      const response = await fetch('/api/incomes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Amount: amount, Date: date, Source: source })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error adding income');
      }

      alert('Income added successfully');
      // Optionally, update UI to reflect new income
    } catch (error) {
      console.error('Error adding income:', error);
      alert(`Failed to add income: ${error.message}`);
    }
  });

  // Add Financial Goal Form Submission
  document.getElementById('financialGoalForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const description = document.getElementById('goalDescription').value;
    const amount = parseFloat(document.getElementById('goalAmount').value); // Ensure Amount is a number
    const deadline = document.getElementById('goalDeadline').value;

    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Description: description, TargetAmount: amount, EndDate: deadline })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error adding financial goal');
      }

      alert('Financial goal added successfully');
      // Optionally, update UI to reflect new goal
    } catch (error) {
      console.error('Error adding financial goal:', error);
      alert(`Failed to add financial goal: ${error.message}`);
    }
  });

  // Add Category Form Submission
  document.getElementById('categoryForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const categoryName = document.getElementById('categoryName').value;

    try {
      const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Name: categoryName })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error adding category');
      }

      alert('Category added successfully');
      // Optionally, update UI to reflect new category
    } catch (error) {
      console.error('Error adding category:', error);
      alert(`Failed to add category: ${error.message}`);
    }
  });

  // Fetch and display expenses, incomes, goals, and categories
  const fetchData = async () => {
    try {
      const [expensesResponse, incomesResponse, goalsResponse, categoriesResponse] = await Promise.all([
        fetch('/api/expenses'),
        fetch('/api/incomes'),
        fetch('/api/goals'),
        fetch('/api/categories')
      ]);

      if (!expensesResponse.ok || !incomesResponse.ok || !goalsResponse.ok || !categoriesResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const expenses = await expensesResponse.json();
      const incomes = await incomesResponse.json();
      const goals = await goalsResponse.json();
      const categories = await categoriesResponse.json();

      // Example of updating UI with fetched data
      const transactionList = document.getElementById('transactionList');
      transactionList.innerHTML = '';

      expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `Expense: ${expense.Amount} on ${expense.Date}`;
        transactionList.appendChild(li);
      });

      // Similarly update other UI elements for incomes, goals, and categories
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
});
