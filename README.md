# Registration-Form

This project is a simple **Registration Form** built using **HTML, JavaScript, and Tailwind CSS**.
The form collects user information such as **Name, Email, and Password** and performs **client-side validation using JavaScript** before submission.

This project focuses only on **frontend development**, demonstrating form validation and UI styling.

---

## Technologies Used

* HTML5
* JavaScript (Form Validation)
* Tailwind CSS (Styling)

---

## Features

* User-friendly registration form
* Input fields for:

  * Name
  * Email
  * Password
* Form validation using JavaScript
* Prevents submission if fields are empty
* Email format validation
* Password length validation (minimum 6 characters)
* Styled using Tailwind CSS

---

## Form Validation Rules

The form validates the following conditions before submission:

1. **Name Field**

   * Cannot be empty.

2. **Email Field**

   * Must follow a valid email format.

3. **Password Field**

   * Must contain at least **6 characters**.

If any field is invalid, an **error message is displayed** and the form will not submit.

---

## How It Works

1. The user enters their **name, email, and password**.
2. When the **Submit button** is clicked:

   * JavaScript checks all fields.
   * If validation fails, an error message is shown.
   * If validation passes, the form displays a **success message**.

---

## Project Structure

```
registration-form/
│
├── index.html
├── script.js
└── README.md
```

---

## Purpose of the Project

This project was created to practice:

* HTML form creation
* Tailwind CSS styling
* JavaScript form validation
* Handling user input
* Preventing default form submission

---

## Future Improvements

Possible enhancements for this project include:

* Confirm password validation
* Password strength indicator
* Real-time input validation
* Responsive design improvements
* Backend integration for storing user data

---


---

## Conclusion

This project demonstrates the basic implementation of a **registration form with JavaScript validation and Tailwind CSS styling**, focusing purely on **frontend development concepts**.
