function searchPlayer() {

    const uid = document.getElementById("uidInput").value.trim();

    if (uid === "") {
        alert("Please enter a Free Fire UID!");
        return;
    }

    if (uid === "1234567890") {
        window.location.href = "player.html?uid=" + uid;
    } else {
        alert("Player Not Found!");
    }
}
