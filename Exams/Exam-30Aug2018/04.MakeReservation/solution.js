function makeReservation(selector) {
    $("#submit").on('click', submitInformation);
    $("#continue").on("click", continueReservation)
    let fullName = $("#fullName");
    let email = $("#email");
    let phoneNumber = $("#phoneNumber");
    let address = $("#address");
    let postalCode = $("#postalCode")

    function submitInformation() {

        if (!fullName.val() == "" && !email.val() == "") {

            $("#submit").prop("disabled", true);
            $("#edit").on('click', editReservation).prop("disabled", false);
            $("#continue").prop("disabled", false);
            $("#infoPreview").append($("<li>").text(`Name: ${fullName.val()}`))
                .append($("<li>").text(`E-mail: ${email.val()}`))
                .append($("<li>").text(`Phone: ${phoneNumber.val()}`))
                .append($("<li>").text(`Address: ${address.val()}`))
                .append($("<li>").text(`Postal Code: ${postalCode.val()}`));
            fullName.val("");
            email.val("");
            phoneNumber.val("");
            address.val("");
            postalCode.val("");
        }

    }

    function continueReservation() {
        $("#edit").prop("disabled", true);
        $("#continue").prop("disabled", true);

        ($("<h2>").text("Payment details")).appendTo($(selector));

        ($("<select id=\"paymentOptions\" class=\"custom-select\">")
            .append($("<option selected disabled hidden>Choose</option>"))
            .append($("<option>").prop("value", "creditCard").text("Credit Card"))
            .append($("<option>").prop("value", "bankTransfer").text("Bank Transfer"))).on("change", submitReservation).appendTo(selector);
        let extraDetails = ($("<div>").prop("id", "extraDetails")).appendTo(selector);
    }

    function editReservation() {
        $("#submit").prop("disabled", false);
        $("#edit").prop("disabled", true);
        $("#continue").prop("disabled", true);

        let fullNameValue = $("#infoPreview").children()[0].textContent.slice(6);
        let emailValue = $("#infoPreview").children()[1].textContent.slice(8);
        let phoneValue = $("#infoPreview").children()[2].textContent.slice(7);
        let addressValue = $("#infoPreview").children()[3].textContent.slice(9);
        let postalCodeValue = $("#infoPreview").children()[4].textContent.slice(13);

        $("#infoPreview").children().remove();

        fullName.val(fullNameValue);
        email.val(emailValue);
        phoneNumber.val(phoneValue);
        address.val(addressValue);
        postalCode.val(postalCodeValue);
    }

    function submitReservation() {
        let optionValue = $("#paymentOptions").val();
        let extraDetails = ($("#extraDetails"))
        extraDetails.children().remove();
        if (optionValue === "creditCard") {
            ((($("<div class=\"inputLabel\">").text("Card Number"))
                .append($('<input>'))))
                .appendTo(extraDetails);

            $("<br>").appendTo(extraDetails);

            ((($("<div class=\"inputLabel\">").text("Expiration Date"))
                .append($('<input>'))))
                .appendTo(extraDetails);

            $("<br>").appendTo(extraDetails);

            ((($("<div class=\"inputLabel\">").text("Security Numbers"))
                .append($('<input>'))))
                .appendTo(extraDetails);

            $("<br>").appendTo(extraDetails);

        }
        else if (optionValue === "bankTransfer") {

            $('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>').appendTo(extraDetails);

        }
        $("<button>").prop("id", 'checkOut').text("Check Out").on("click", finnish).appendTo(extraDetails);

        extraDetails.appendTo(selector);
    }

    function finnish() {
        $("#wrapper").children().remove();
        $("<h4>").text("Tank you for your reservation!").appendTo("#wrapper");
    }
}