# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express applications: unhandled promise rejections.  An asynchronous operation within a route handler throws an error, but it's not properly caught, leading to a potential crash.

The `bug.js` file contains the problematic code. The `bugSolution.js` file shows how to fix this using proper error handling within the asynchronous operation and a top-level `unhandledRejection` event listener.