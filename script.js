// Variables
let expenses = [];
let budget = 0;
let categoryExpenseChart;

// Initialize Chart
function initChart() {
    const ctx = document.getElementById('categoryExpenseChart').getContext('2d');
    const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Others'];
    const categoryData = categories.map(() => 0); // Initialize with zeros

    categoryExpenseChart = new Chart(ctx, {
        type: 'pie',// Variables
let expenses = [];
let budget = 0;
let categoryChart;

// Initialize Chart
function initChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Others'];
    const categoryData = categories.map(() => 0); // Initialize with zeros

    categoryChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: categoryData,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#f0f0f0',
                    }
                }
            }
        }
    });
}

// Add Expense
document.getElementById('addExpense').addEventListener('click', function () {
    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const date = document.getElementById('expenseDate').value;
    const category = document.getElementById('expenseCategory').value;

    if (name && amount && date) {
        const expense = { name, amount, date, category };
        expenses.push(expense);
        updateExpenseList();
        updateCategoryChart();
        checkBudget();
        clearInputs();
    }
});

// Function to clear inputs
function clearInputs() {
    document.getElementById('expenseName').value = '';
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDate').value = '';
    document.getElementById('expenseCategory').value = 'Food'; // Reset to default
}

// Function to update expense list
function updateExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach((exp, index) => {
        const li = document.createElement('li');
        li.className = 'expense-list-item';
        li.textContent = `${exp.name} - ₹${exp.amount} on ${exp.date}`;
        expenseList.appendChild(li);
    });
}

// Function to update category chart
function updateCategoryChart() {
    const categoryCounts = {
        Food: 0,
        Transport: 0,
        Entertainment: 0,
        Utilities: 0,
        Others: 0
    };

    expenses.forEach(exp => {
        categoryCounts[exp.category] += exp.amount;
    });

    categoryChart.data.datasets[0].data = Object.values(categoryCounts);
    categoryChart.update();
}

// Budget Setup
document.getElementById('setBudget').addEventListener('click', function () {
    budget = parseFloat(document.getElementById('budgetAmount').value);
    checkBudget();
});

// Function to check budget
function checkBudget() {
    const totalExpense = expenses.reduce((acc, exp) => acc + exp.amount, 0);
    const budgetStatus = document.getElementById('budgetStatus');
    
    if (budget > 0) {
        if (totalExpense > budget) {
            budgetStatus.textContent = 'Budget Exceeded!'; 
            budgetStatus.style.color = 'red';
        } else {
            budgetStatus.textContent = `Remaining Budget: ₹${(budget - totalExpense).toFixed(2)}`;
            budgetStatus.style.color = 'green';
        }
    }
}

// Export Reports (placeholder function)
document.getElementById('exportReports').addEventListener('click', function () {
    alert('Exporting reports is not implemented yet!');
});

// Initialize
initChart();

        data: {
            labels: categories,
            datasets: [{
                data: categoryData,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
            }]
        }
    });
}

// Add Expense
document.getElementById('addExpenseButton').addEventListener('click', function () {
    const name = document.getElementById('expenseNameInput').value;
    const amount = parseFloat(document.getElementById('expenseAmountInput').value);
    const date = document.getElementById('expenseDateInput').value;
    const category = document.getElementById('expenseCategorySelect').value;

    if (name.trim() === '' || isNaN(amount) || amount <= 0 || !date) {
        alert('Please provide valid inputs.');
        return;
    }

    const expense = { name, amount, date, category };
    expenses.push(expense);
    updateExpenseList();
    updateCategoryChart();
    checkBudget();
    clearInputs();
});

// Function to clear inputs
function clearInputs() {
    document.getElementById('expenseNameInput').value = '';
    document.getElementById('expenseAmountInput').value = '';
    document.getElementById('expenseDateInput').value = '';
    document.getElementById('expenseCategorySelect').value = 'Food'; // Reset to default
}

// Function to update expense list
function updateExpenseList() {
    const expenseListContainer = document.getElementById('expenseListContainer');
    expenseListContainer.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${expense.name}: ₹${expense.amount} on ${expense.date} [${expense.category}]`;
        li.classList.add('singleExpenseItem');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            expenses.splice(index, 1); // Remove the expense from the array
            updateExpenseList(); // Update the displayed list
            updateCategoryChart(); // Update the chart
            checkBudget(); // Check the budget
        };
        li.appendChild(deleteButton);
        expenseListContainer.appendChild(li);
    });
}

// Function to update category chart
function updateCategoryChart() {
    const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Others'];
    const categoryData = categories.map(category => 
        expenses.filter(exp => exp.category === category).reduce((acc, exp) => acc + exp.amount, 0)
    );

    categoryExpenseChart.data.datasets[0].data = categoryData;
    categoryExpenseChart.update();
}

// Function to set budget
document.getElementById('setBudgetButton').addEventListener('click', function () {
    budget = parseFloat(document.getElementById('monthlyBudgetInput').value);
    if (isNaN(budget) || budget < 0) {
        alert('Please enter a valid budget amount.');
        return;
    }
    checkBudget();
});

// Function to check budget
function checkBudget() {
    const totalExpenses = expenses.reduce((acc, exp) => acc + exp.amount, 0);
    const budgetStatusMessage = document.getElementById('budgetStatusMessage');

    if (budget > 0) {
        if (totalExpenses > budget) {
            budgetStatusMessage.textContent = 'You have exceeded your budget!';
            budgetStatusMessage.style.color = 'red';
        } else {
            budgetStatusMessage.textContent = `Remaining Budget: ₹${(budget - totalExpenses).toFixed(2)}`;
            budgetStatusMessage.style.color = 'green';
        }
    }
}

// Export Reports
document.getElementById('exportReportsButton').addEventListener('click', function () {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "Expense Name,Amount,Rupees,Date,Category\n"
        + expenses.map(e => `${e.name},${e.amount},₹${e.amount},${e.date},${e.category}`).join("\n");
        
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "expenses.csv");
    document.body.appendChild(link);
    link.click();
    alert('Expenses exported successfully!');
});

// Initialize everything
initChart();
