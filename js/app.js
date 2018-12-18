$(document).ready(function () {
    $("#contactform").submit(function (event) {
        event.preventDefault();
        var name = $("input[name='Name']", this).val();
        var email = $("input[name='Email']", this).val();
        var phone = $("input[name='Phone']", this).val();
        var message = $("input[name='Message']", this).val();

        if (email !== "") {
            $.post("https://2jadto2g2i.execute-api.us-east-1.amazonaws.com/default/sendcontactemail", `{
                "email": "${email}",
                "phone": "${phone}",
                "message": "${message}",
                "name": "${name}"
            }`)
            $("#contactformres").text("Message sent...").show().fadeOut(2000);

            return false;
        }

        $("#contactformres").text("Not valid!").show().fadeOut(1000);
        event.preventDefault();
    });
});