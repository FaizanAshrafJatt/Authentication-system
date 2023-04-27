function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  userData[email] = {
    email,
    password,
  };

  localStorage.setItem('userData', JSON.stringify(userData));

  window.location.href = './pages/login.html';
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const user = userData[email];
  if (!user || user.password !== password) {
    alert('Invalid email or password');
    return;
  }

  window.location.href = 'dashboard.html';
}

function loginLink() {
  window.location.href = 'login.html';
}

function signupLink() {
  window.location.href = 'index.html';
}
