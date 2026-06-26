function openYoutube() {

    let result = confirm(
        "You are redirecting to YouTube.\n\nClick OK to continue."
    );

    if (result) {

        window.open("https://www.youtube.com", "_blank");

    }

}