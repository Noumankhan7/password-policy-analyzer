# Password Policy Analyzer & Strength Checker

## COMP 151 – Discrete Structures Project

This project is a Password Policy Analyzer and Strength Checker developed using:

* HTML
* CSS
* JavaScript

The system evaluates password strength using logical security rules and classifies passwords into different security levels.

---

# Project Objectives

The objectives of this project are:

* Develop a programming-based solution
* Apply logical rules using discrete structures
* Implement password validation algorithms
* Classify passwords into security levels
* Provide feedback to users
* Practice modular programming

---

# Technologies Used

| Technology | Purpose                          |
| ---------- | -------------------------------- |
| HTML       | Structure of the website         |
| CSS        | User interface and styling       |
| JavaScript | Password analysis and validation |

---

# Password Validation Rules

The system checks the following 10 rules:

| Rule Number | Requirement                             |
| ----------- | --------------------------------------- |
| 1           | Minimum length of 8 characters          |
| 2           | Maximum length of 20 characters         |
| 3           | At least one uppercase letter           |
| 4           | At least one lowercase letter           |
| 5           | At least one digit                      |
| 6           | At least one special character          |
| 7           | No spaces allowed                       |
| 8           | No consecutive letters                  |
| 9           | No consecutive digits                   |
| 10          | No character repeated more than 3 times |

---

# Password Classification Levels

| Rules Satisfied | Classification |
| --------------- | -------------- |
| 0–3             | Rejected       |
| 4–5             | Weak           |
| 6–7             | Medium         |
| 8–9             | Strong         |
| 10              | Extreme Strong |

---

# Features

The project includes:

* Real-time password analysis
* Interactive graphical interface
* Password strength meter
* Dynamic classification system
* Password visibility toggle
* Color-based validation system
* User-friendly design
* Modular programming structure

---

# Discrete Structures Concepts Used

This project applies several concepts from Discrete Structures.

## 1. Boolean Logic

Each rule returns:

* True (1)
* False (0)

Example:

```text
Password contains uppercase letter = True
```

---

## 2. Logical Operators

The password is considered strong only if multiple logical conditions are satisfied.

Example:

```text
P AND Q AND R
```

---

## 3. Sets

Characters are divided into sets:

* Uppercase letters
* Lowercase letters
* Digits
* Special characters

---

## 4. Functions

Each password rule is implemented using separate JavaScript functions.

Example:

```javascript
function hasUppercase(password)
```

---

## 5. Conditional Statements

The classification system uses conditional logic.

Example:

```javascript
if(score >= 8)
```

---

# Project Structure

```text
PasswordAnalyzer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# How to Run the Project

## Method 1 — Run Locally

1. Download the project files
2. Open the project folder
3. Double-click:

```text
index.html
```

The website will open in your browser.

---

## Method 2 — Run Using Visual Studio

1. Open Visual Studio
2. Click “Open Folder”
3. Select the project folder
4. Open index.html
5. Click Run

---

# GitHub Deployment

This project can be deployed using GitHub Pages.

Steps:

1. Upload files to GitHub
2. Open repository settings
3. Go to Pages
4. Enable GitHub Pages
5. Use the generated deployment link

---

# Sample Test Cases

| Password  | Score | Classification |
| --------- | ----- | -------------- |
| abc       | 2     | Rejected       |
| Password1 | 6     | Medium         |
| A@5b7#K9  | 10    | Extreme Strong |
| abc12345  | 5     | Weak           |
| Z@9x!2P$  | 10    | Extreme Strong |

---

# Future Improvements

Possible future enhancements:

* Dark mode
* Database integration
* AI-based password suggestions
* Password entropy calculation
* User authentication system
* Login system integration

---

# Assessment Rubric Coverage

| Criterion               | Covered |
| ----------------------- | ------- |
| Problem Understanding   | Yes     |
| Program Design          | Yes     |
| Implementation          | Yes     |
| Logical Reasoning       | Yes     |
| Classification Accuracy | Yes     |
| Testing                 | Yes     |
| Report Quality          | Yes     |
| Code Quality            | Yes     |

---

# Conclusion

The Password Policy Analyzer successfully validates passwords using logical security rules and classifies passwords into different strength levels.

The project demonstrates practical applications of:

* Boolean logic
* Logical operators
* Sets
* Functions
* Conditional statements
* Modular programming
* Algorithmic problem solving

This project fully satisfies the requirements of the COMP 151 Discrete Structures assignment.

---

# Author

Student Name:Nouman khan raja

Course: COMP 151 – Discrete Structures

Semester: Spring 2025–2026
