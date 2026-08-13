function openHobby(hobby) {
    let card = document.getElementById(hobby);
    card.classList.add("active");
}

function closeHobby(hobby) {
    let card = document.getElementById(hobby);
    card.classList.remove("active");
}