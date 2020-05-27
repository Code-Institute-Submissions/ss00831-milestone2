(function () {
    emailjs.init("user_GSvvZT0J6KvBUXPodOVCh");
})();

function sendMail(contactForm) {
    emailjs
        .send("gmail", "template_3nbA1YQC", {
            type_of_request: contactForm.subject.value,
            from_name: contactForm.name.value,
            from_email: contactForm.emailaddress.value,
            project_request: contactForm.projectsummary.value,
        })
        .then(
            function (response) {
                alert("The email has been sent successfully.");
                $("#mail-form").get(0).reset();
            },
            function (error) {
                alert("Try again.");
            }
        );
    return false; // To block from loading a new page
}

