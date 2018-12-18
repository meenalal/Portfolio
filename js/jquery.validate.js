$.validator.setDefaults({
    submitHandler: function() {
        alert("submitted!");
    }
});
 
$(document).ready(function() {
    $("#userForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                number: true
            },
        messages: {
            name: "Please Fill Up Your Name",
            email: "Please Enter a Valid Email Address",
            phone: {
                required: "Please Enter Your Phone Number",
                number: "Please Enter Only Numeric Value"
            }
        }
    }
});
});
