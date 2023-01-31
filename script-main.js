let ready = (callback) => {
    if (document.readyState == "loading")
        document.addEventListener("DOMContentLoaded", callback);
    else callback();
}

// Once document has loaded, set the header to occupy the full window height. window.innerHeight is a string with the height of the window, "px" is added as css needs the unit.
ready(
    () => {
        // document.querySelector(".header").style.height = window.innerHeight + "px";
        document.querySelector(".header").style.height = "1200px";
    }
)