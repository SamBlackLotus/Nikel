const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");


checkLogged();

function checkLogged() {
    if (session) {
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if (logged) {
        saveSession(logged, session);
        window.location.href = "home.html"

    }

}