let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = registerName.value;
  const email = registerEmail.value;
  const password = registerPassword.value;
  const confirm = registerConfirm.value;
  const error = document.getElementById("registerError");

  if (!name || !email || !password || !confirm) {
    error.textContent = "Tous les champs sont obligatoires";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = "Email invalide";
    return;
  }

  if (password !== confirm) {
    error.textContent = "Les mots de passe ne correspondent pas";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", email);

  window.location.href = "iindex.html";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = loginEmail.value;
  const password = loginPassword.value;
  const error = document.getElementById("loginError");

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    error.textContent = "Email ou mot de passe incorrect";
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", email);

  window.location.href = "iindex.html";
});
