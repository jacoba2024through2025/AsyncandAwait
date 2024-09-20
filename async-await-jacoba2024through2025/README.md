[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15990959&assignment_repo_type=AssignmentRepo)
# Async/Await

There is a test suite to guide you and help you check yourself. To run the test suite, just view `SpecRunner.html` in your browser. I suggest using live server so that your tests rerun when you save you file.

**Important:** The test cases specify the name of the required methods, arguments, etc. So **read each test case carefully.** Test cases are located in the spec folder.

# Exercises
All functions should be defined in main.js located in the src folder. **This is the only file you should edit.**

Task:

You have been provided fetchUserData function and it should return user data for a given userId after a one second delay. It should resolve with the user's information or rejects with an error message 'User not found'.

Next define an async function displayUserData that uses await to fetch user data and then display it. Inside the try block, we await the fetchUserData function, and if successful, we log the user's ID and name. If an error occurs, we catch it in the catch block and log an error message.

user data is provided below:
           {
                1: { id: 1, name: 'John' },
                2: { id: 2, name: 'Mark' },
                3: { id: 3, name: 'Adam' },
            };
**All test cases must pass**
Hint: Use your console to help you debug.


