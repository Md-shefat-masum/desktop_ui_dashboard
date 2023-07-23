document.addEventListener("DOMContentLoaded", () => {
    Turbolinks.start()
    document.addEventListener("turbolinks:load", function (event) {
        console.log("page loaded");
    });
    document.addEventListener("turbolinks:before-render", function (event) {});
    document.addEventListener("turbolinks:render", function (event) {});
});
