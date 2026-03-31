## Write a Custom Error Handler

// Custom Error Class created by extending built-in Error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message); // Pass message to parent Error class
        this.statusCode = statusCode; // Store custom status code
        this.name = "AppError"; // Set custom error name
    }
}

// Centralized error handler function
function handleError(error) {
    console.log("------ ERROR HANDLER ------");
    console.log("Name:", error.name); // Prints error type
    console.log("Message:", error.message); // Prints error message
    console.log("Status Code:", error.statusCode || 500); // Default 500 if not provided
}

// Async function to simulate data fetching
async function fetchUserData(userId) {
    try {
        // Check if userId is missing
        if (!userId) {
            throw new AppError("User ID is required", 400);
        }

        // Simulate successful async response
        return Promise.resolve(`User data for ID: ${userId}`);
    } catch (error) {
        // Send error to central handler
        handleError(error);
    }
}

// Calling function without parameter to trigger error
fetchUserData();
```

### Output

------ ERROR HANDLER ------
Name: AppError
Message: User ID is required
Status Code: 400
