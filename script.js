// Show or  Hide Password
        function togglePassword() {
            let pass = document.getElementById("password");

            if (pass.type == "password") {
                pass.type = "text";
            } else {
                pass.type = "password";
            }
        }

        // Form Validation
        document.getElementById("registerForm").addEventListener("submit", function (e) {

            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let message = document.getElementById("message");

            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (name === "" || email === "" || password === "") {
                message.innerText = "All fields are required";
                return;
            }

            if (!email.match(emailPattern)) {
                message.innerText = "Enter a valid email";
                return;
            }
            if (password.length < 6) {
                message.innerText = "Password must be at least 6 characters";
                return;
            }


            message.innerText = "Registration Successful!";
            message.classList.remove("text-red-500");
            message.classList.add("text-green-500");

        });
