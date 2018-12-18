$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "mail.php";

            $.ajax({
                "email": "mytestemail-pm45467t76",
                "phone": "575768757",
                "message": "huguhufj ugyugug thyjfhtdrfh",
                "name": "bad boy"
            });
        }
    })
});

