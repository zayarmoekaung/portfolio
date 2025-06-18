function goto(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    } else {
        console.log(`Element with ID '${elementId}' not found.`);
    }
}
function resetActive() {
    const activeElements = document.getElementsByClassName('active');
    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove('active');
    }
}
function home() {
    window.location.href = "/demo/vone/index.html";
}
function about() {
    goto("about");
    const about_btn = document.getElementById("about_btn");
    resetActive();
    if (about_btn) {
        about_btn.classList.add("active");
    }
}
function contact() {
    goto("contact");
    const contact_btn = document.getElementById("contact_btn");
    resetActive();
    if (contact_btn) {
        contact_btn.classList.add("active");
    }
}
function projects() {
    goto("projects");
    const projects_btn = document.getElementById("projects_btn");
    resetActive();
    if (projects_btn) {
        projects_btn.classList.add("active");
    }
}
