document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const validUsername = "Raushani";
    const validPassword = "kuhu123";

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').style.color = "green";
        document.getElementById('message').textContent = "Login successful!";
    } else {
        document.getElementById('message').style.color = "black";
        document.getElementById('message').textContent = "Invalid username or password.";
    }
});