console.log("Script loaded successfully!");
const btn = document.getElementById("btn");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log(btn);
console.log(nom.value);
console.log(email.value);
console.log(password.value);
btn.addEventListener("click", function() {
    console.log("Button clicked!");
    console.log("Nom: " + nom.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);
    alert("bonne inscription");
    
    if (nom.value === "") {
        alert("Nom est manquant");
        return;
    }

    if (email.value === "") {
        alert("Email est manquant");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Email doit contenir @");
        return;
    }

    if (password.value === "") {
        alert("Mot de passe est manquant");
        return;
    }

    if (password.value.length < 6) {
        alert("Mot de passe doit contenir au moins 6 caractères");
        return;
    }
    alert(nom.value + " " + email.value + " " + password.value);
});