function searchPlayer() {

    const uid = document.getElementById("uidInput").value.trim();
    const region = document.getElementById("regionSelect").value;

    if (uid === "") {
        alert("Please enter a Free Fire UID!");
        return;
    }

    window.location.href =
        "player.html?uid=" + encodeURIComponent(uid) +
        "&region=" + encodeURIComponent(region);
}
