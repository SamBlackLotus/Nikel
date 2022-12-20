const myModal = new bootstrap.Modal("#register-modal");

// CRIAR CONTA //
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password =document.getElementById("password-create-input").value;

    if(email.length < 5) {
        alert("Preencha o campo com um endereço de e-mail válido.");
        return;
    }

    if (password.length < 6) {
        alert("A senha deve conter pelo menos 6 dígitos.");
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    })

    myModal.hide();
    alert("Conta criada com sucesso!");
    
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}