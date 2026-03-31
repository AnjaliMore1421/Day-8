# Day 8 – Full Deep Content

## Deep Theory

### 1)Custom Error Classes

Custom Error Classes are used to create your own error types by extending the built-in `Error` class. This helps in better error handling and debugging.

### Syntax

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
```

### Example

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

if (age < 18) {
    throw new ValidationError("Age must be 18+");
}
```

### Benefits

- Clear error handling  
- Easy debugging  
- Better code structure

  ## 2)Error Boundaries in JS Apps

Error boundaries are used to catch runtime errors in application components and prevent the entire app from crashing. They help display a fallback UI instead of a blank screen.

They are mainly used in **React applications** to handle errors during rendering, lifecycle methods, and child components.

### Benefits
- Prevents full app crash  
- Shows fallback UI  
- Improves user experience  
- Easier debugging

  ## 3)Debugging Memory Leaks

Debugging memory leaks involves identifying and fixing cases where memory is not released properly. This often happens because of unused variables, event listeners, or timers that continue to stay in memory.

Memory leaks can reduce performance and increase memory usage over time.

###  Example
const interval = setInterval(() => {
    console.log("Running...");
}, 1000);

// Clear when no longer needed
clearInterval(interval);
```

If `clearInterval()` is not used, the timer keeps running and may cause a memory leak.

### Benefits
- Improves performance
- Reduces memory usage
- Prevents crashes
- Smooth execution

## 4)Chrome DevTools Advanced Usage

Chrome DevTools is used for advanced debugging, performance monitoring, and inspecting application behavior directly in the browser.

It helps in analyzing:
- Memory usage and leaks
- Performance issues
- DOM and CSS changes

###  Example

Use the **Network tab** to check API status codes like `200`, `404`, or `500`, and the **Memory tab** to identify memory leaks.

### Benefits
- Faster debugging
- Better performance analysis
- Easy issue tracking
- Improved development workflow

 ## 5)Handling Async Errors Properly

Handling async errors properly means catching errors that occur in asynchronous operations like API calls, promises, or `async/await` functions.

This is usually done using `try...catch` with `async/await` or `.catch()` with promises to prevent application crashes.

###  Example

async function fetchData() {
    try {
        const response = await fetch("api/data");
    } catch (error) {
        console.log("Error:", error.message);
    }
}
```

### Benefits
- Prevents app crashes
- Better error handling
- Easier debugging
- Improved user experience 
