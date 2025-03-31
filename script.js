// Function to handle the form submission and add the medicine item
function addMedicine(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const medicineName = document.getElementById('medicineName').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    // Calculate total price
    const totalPrice = (quantity * price).toFixed(2);

    // Create a new row for the table
    const table = document.getElementById('medicineTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    // Insert cells into the row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    // Add values to the cells
    cell1.textContent = medicineName;
    cell2.textContent = quantity;
    cell3.textContent = price;
    cell4.textContent = totalPrice;

    // Clear form input fields after submission
    document.getElementById('medicineForm').reset();
}
