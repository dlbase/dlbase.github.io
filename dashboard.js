// Vérifier si l'utilisateur est connecté
const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
  window.location.href = 'index.html';
}

const users = JSON.parse(localStorage.getItem('users')) || {};
const user = users[loggedInUser];

function createDatabase() {
  const dbName = document.getElementById('dbName').value;
  if (!dbName) return;

  if (user.databases.length >= 5) {
    alert("Vous avez atteint la limite de 5 bases de données.");
    return;
  }

  user.databases.push({ name: dbName, size: 0, maxSize: 50 });
  localStorage.setItem('users', JSON.stringify(users));
  displayDatabases();
}

function displayDatabases() {
  const dbList = document.getElementById('dbList');
  dbList.innerHTML = '';

  user.databases.forEach(db => {
    const li = document.createElement('li');
    li.innerHTML = `${db.name} - ${db.size} Mo / ${db.maxSize} Mo 
    <a href="api.html?db=${db.name}">Voir API</a>`;
    dbList.appendChild(li);
  });
}

displayDatabases();
