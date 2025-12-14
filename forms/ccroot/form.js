const scriptURL = "https://script.google.com/macros/s/AKfycby01NZl-XCujVZtvMFylgr3pOVFHqtZhagfbfdMVIJErn4Ly3EScVSumjRe76F3ptyyJg/exec"; 
const form = document.getElementById("signup-form");

const messageBox = document.createElement("div");
form.parentNode.insertBefore(messageBox, form.nextSibling);

form.addEventListener("submit", e => {
    e.preventDefault();

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(response => {
            // success
            messageBox.textContent = "Thanks for signing up!";
            messageBox.className = "form-success";
            form.reset(); // clear form after success
        })
        .catch(error => {
            // error
            messageBox.textContent = "Error: " + error.message;
            messageBox.className = "form-error";
        });
});
