# Node.js WarmUp

After some time, I needed to remember some Node.js basics. Here is my WarmUp repository, where I will be putting a checkmark (✅) after completing each exercise. Feel free to use it as you want, my exercises answers will be on here too. 😁

## Table of Contents

1. [Introduction](#introduction)
2. [Exercises](#exercises)
    - [Exercise 1: Synchronous File Read](#exercise-1---synchronous-file-read)
    - [Exercise 2: Asynchronous File Read](#exercise-2---asynchronous-file-read)
    - [Exercise 3: Asynchronous File Read with Promises](#exercise-3---asynchronous-file-read-with-promises)
    - [Exercise 4: System Information](#exercise-4---system-information)
    - [Exercise 5: Parallel File Read](#exercise-5---parallel-file-read)
    - [Exercise 6: Path Operations](#exercise-6---path-operations)
    - [Exercise 7: Directory Read](#exercise-7---directory-read)
    - [Exercise 8: Process](#exercise-8---process)
    - [Exercise 9: File Stats](#exercise-9---file-stats)
    - [Exercise 10: Linter Installation](#exercise-10---linter-installation)
    - [Exercise 11: HTTP Server](#exercise-11---http-server)
    - [Exercise 11.5: Mini CRUD](#exercise-115---mini-crud)
    - [Exercise 12: Net Server](#exercise-12---net-server)
    - [Exercise 13: Enhanced HTTP Server](#exercise-13---enhanced-http-server)
3. [How to Use](#how-to-use)
4. [Contributing](#contributing)
5. [License](#license)

## Introduction

This repository is a collection of basic Node.js exercises meant to refresh and reinforce fundamental concepts. Each exercise is marked with a checkmark (✅) once it is completed.

## Exercises

### Exercise 1 - Synchronous File Read ✅
- [✅] Read the information from a file synchronously:
    - Check if it is a file,
    - and the size of the file
- [✅] Read a text file synchronously and print it

### Exercise 2 - Asynchronous File Read ✅
- [✅] Read a file asynchronously and print it

### Exercise 3 - Asynchronous File Read with Promises ✅
- [✅] Read a file asynchronously using a promise

### Exercise 4 - System Information ✅
- [✅] Print important system information:
    ✅ - RAM memory 
    ✅ - Processor 
    ✅ - Number of threads
    ✅ - Operating system

### Exercise 5 - Parallel File Read ✅
- [✅] Make parallel requests to read two text files

### Exercise 6 - Path Operations
- [✅] Print the path separator of your operating system
- [✅] Join a file with a directory, directory: fileDirectory, file: testFileThree.txt:
    - [✅] Print the file name inside fileDirectory 
- [✅] Get the file extension of testFileThree.txt

### Exercise 7 - Directory Read ✅
- [✅] Read a directory/folder

### Exercise 8 - Process
- [✅] What is `process`?
    - ✅=> Process generally refers to the instance of a program execution. When referring to a process, it refers to the actual execution of a program. This process is executed within an operating system environment that provides everything necessary for the program to run, such as environment variables, hardware resources, execution information, etc.
    - ✅=> In Node.js, we have a global object called `process` that helps us control (such as exiting the process) and obtain information about the execution instance of the program (such as the process ID, the argv (argument vector) of a program, the environment variables in the operating system environment, etc.).

- [✅] Print the console arguments (argv)
- [✅] Exit the process (exit codes: [geeksforgeeks](https://www.geeksforgeeks.org/node-js-exit-codes/)):
    - ✅ Exit the process with an error
    - ✅ Exit the process without an error
    - ✅ register an event on process to indicate when the process is finished
- [✅] Print the current executed file
- [✅] Print the arguments passed to the console, i.e., the argument vector (argv)
- [✅] Set a temporary environment variable (a value that is passed within the console) when running a program and print that environment variable
// NOTE: To pass a temporary environment variable put the name of the varible equals the value before the execute command (i.e. VARIABLE=123 npm run exercise)
- [✅] Read a directory (like the `ls` command) with the name passed in the argument vector

<!-- Some documentation about event emitters https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter -->

### Exercise 9 - File Stats
- [✅] Read the `stat` of all files in a folder passed as an argument (using promises) [done in exercise 8]
- [✅] If an error occurs, exit the process with an error [done in exercise 8]

### Exercise 10 - Linter Installation
- [✅] Install the linter as a development dependency (standard)

### Exercise 11 - HTTP Server
- [✅] What is HTTP?
    - ✅ => HTTP is a protocol for sending packets over a network, using hypertext as the main means of communication, headers that contain what should arrive and important information about the request, whether it was a POST or a GET, the body of the request, the type of data sent... recipient, this request can also contain a body.
- [✅] Use the native module to create an HTTP server
- [✅] When the server receives a request, terminate it by sending a response that says "Hello world"
- [✅] Set the server to listen on port (8080) and print that the server is listening on that port

<!-- ✅ Good documentation here of http module!: https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction -->
<!-- https://chatgpt.com/share/e35a2437-4f6a-417c-85ab-7a3dcb02160f -->

### Exercise 12 - Mini CRUD
- [✅] Create an echo server, try using the ReadableStream.pipe() to send back a response

<!-- note: an echo server is an application that allows a client and a server to connect so a client can send a message to the server and the server can receive the message and send, or echo, it back to the client. -->


### Exercise 13 - Mini CRUD
- [x] Create an api that allows you to do GET and POST and put the post body in a file, with responses for 404 and 200

### Exercise 14 - Net Server
- [x] What is a `net` server?
    - It is a server that uses TCP but does not have the same rules as an HTTP server.
- [x] Using the native `net` module:
    - Create a function that tells you if a port you pass is free
    - Create a listener that, when there is an error, returns one that is available

### Exercise 15 - Enhanced HTTP Server
- [x] With the HTTP server made in exercise 11, use the function from exercise 11 to find if the port you want to use is available, and if not, set any available port. It should look like this:
- [x] Print all environment variables of the operating system
- [x] Use an environment variable for the `desiredPort`, passed from the command line when you run it

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/ShermanPI/WarmUpNodeJs
    ```
2. Navigate to the project directory:
    ```bash
    cd nodejs-warmup
    ```
3. Install any necessary dependencies (if applicable):
    ```bash
    npm install
    ```
4. Run the exercises as needed:
    ```bash
    npm run exercise<numberOfTheExercise>
    ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional exercises, feel free to open an issue or submit a pull request.

### P.D: special thanks to @midudev
