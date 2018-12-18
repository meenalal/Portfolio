$(document).ready(function () {
    $("#contactform").submit(function (event) {
        if ($("input:first").val() === "correct") {
            $.post("https://2jadto2g2i.execute-api.us-east-1.amazonaws.com/default/sendcontactemail", `{
                "email": "mytestemail-454545",
                "phone": "575768757",
                "message": "huguhufj ugyugug thyjfhtdrfh",
                "name": "bad boy"
            }`)
            $("#contactformres").text("Message sent...").show().fadeOut(2000);
            event.preventDefault();
            return false;
        }

        $("#contactformres").text("Not valid!").show().fadeOut(1000);
        event.preventDefault();
    });
});