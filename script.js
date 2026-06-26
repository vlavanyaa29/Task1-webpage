function openZoom() {

    let result = confirm(
        "You are opening Zoom.\n\nClick OK to continue."
    );

    if (result) {
        window.open("https://zoom.us", "_blank");
    }
}