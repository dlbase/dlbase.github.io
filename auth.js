// Simuler un système d'authentification
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    document.getElementById('error-msg').textContent = "Veuillez remplir tous les champs.";
    return;
  }

  // Enregistrer les informations d'utilisateur dans localStorage
  let users = JSON.parse(localStorage.getItem('users')) || {};
  if (!users[email]) {
    // Inscription
    users[email] = { password, databases: [] };
    localStorage.setItem('users', JSON.stringify(users));
  } else if (users[email].password !== password) {
    document.getElementById('error-msg').textContent = "Mot de passe incorrect.";
    return;
  }

  // Sauvegarder l'email de l'utilisateur connecté
  localStorage.setItem('loggedInUser', email);
  window.location.href = 'dashboard.html';
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}
