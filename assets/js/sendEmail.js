function sendMail(contactForm) {
    emailjs.send("gmail", "template_3nbA1YQC", {
        "type_of_request":contactForm.subject.value,
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "project_request":contactForm.projectsummary.value
    })
    .then(
        function(response) {
            alert("The email has been sent successfully.");
            //console.log("SUCCESS", response);
        },
        function(error) {
            alert("Try again.");
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}