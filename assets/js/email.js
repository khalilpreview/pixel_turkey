/* Sending Email from Contact Section */

(function () {
    emailjs.init("0jc3Eb5L_MkH3jSIJ");
})();

function sendmail() {
    let services = document.querySelectorAll('input[name="opt"]:checked');
    let values = [];
    services.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userPhone = document.getElementById("phone").value;


    var form = document.getElementsByClassName('work-request')[0];

        var contactParams = {
            from_name: userName,
            from_email: userEmail,
            message: "Client Name: " + userName + " | Client Email: " + userEmail + " | Client Phone: " + userPhone + " | Services: " + values
        };

        emailjs.send('service_jgu0awk', 'template_5bfladi', contactParams).then(function (res) {})

        alert("Request Sent Succefully");

        form.reset()

}