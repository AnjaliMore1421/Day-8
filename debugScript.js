## Debug a Script Using Breakpoints

// Function to calculate total amount
function calculateTotal(price, quantity) {
    let total = price * quantity; // Multiply values
    debugger; // Execution will pause here in debugger
    return total; // Return result
}

// Call function
let result = calculateTotal(100, 2);

// Print output
console.log("Total:", result);


### Output

Total: 200
