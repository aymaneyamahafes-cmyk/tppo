const savedusername = JSON.parse(localStorage.getItem("username") || "null");
if (savedusername) {
    nom.value = savedusername || "";
    email.value = savedusername || "";
    password.value = savedusername || "";
}

button.addEventListener("click", function(event){
    event.preventDefault();

    const user ={
        username: nom.value,
        email: email.value,
        password: password.value
    };
    localStorage.setItem("username", JSON.stringify(user));
    alert("Name: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});