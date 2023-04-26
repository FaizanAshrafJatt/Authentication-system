
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }
  
 
  const userDataJSON = localStorage.getItem('userData');
  let userData = {};
  
    userData = JSON.parse(userDataJSON);
  
  
  
  userData[email] = {
    email,
    password,
  };
  
  
  localStorage.setItem('userData', JSON.stringify(userData));
 
  window.location.href = 'login.html';
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  // Retrieve user data from local storage
  const userDataJSON = localStorage.getItem('userData');
  if (!userDataJSON) {
    alert('Invalid email or password');
    return;
  }
  
  const userData = JSON.parse(userDataJSON);
  let found = false;
  
  // Loop through the user data to find matching email and password
  for (const key in userData) {
    if (userData.hasOwnProperty(key)) {
      const user = userData[key];
      if (user.email === email && user.password === password) {
        found = true;
        break;
      }
    }
  }
  
  if (!found) {
    alert('Invalid email or password');
    return;
  }
  
  // Redirect user to dashboard
  window.location.href = './dashboard.html';
}



function loginLink() {
  window.location.href = 'login.html';
}


function signupLink() {
  window.location.href = 'index.html';
}
