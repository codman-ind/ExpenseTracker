// Variables
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
