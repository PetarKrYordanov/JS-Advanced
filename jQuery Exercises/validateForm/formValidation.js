function validate() {
    let usernameRegex = /^[a-zA-Z\d]{3,21}$/;
    let passwordRegex = /^[\w]{5,16}$/;
    let emailRegex = /^.*@.*\..*$/;
    let usernameInput = $("#username");
    let emailInput = $("#email");
    let passwordInput = $("#password");
    let confirmPasswordInput = $("#confirm-password");
    let companyChkBox = $("#company")
        .on("change", manageCompanyInput);
    let companyInfo = $("#companyInfo");
    let companyNumberInput = $("#companyNumber");
    let validDiv = $("#valid");
    let submitBtn = $("#submit")
        .on("click", validateForm);

    function manageCompanyInput() {
        if (companyChkBox.is(':checked')) {
            companyInfo
                .css("display", "block");
        } else {
            companyInfo
                .css("display", "none");
        }
    }

    function validateForm(event) {
        event.preventDefault();
        let isValid = validateInput(usernameInput, usernameRegex);
        isValid = validateInput(emailInput, emailRegex) && isValid;

        let password = passwordInput.val().toString();
        let confirmPassword = confirmPasswordInput.val().toString();
        if (password === confirmPassword && passwordRegex.test(password)) {
            passwordInput
                .css("border", "none");
            confirmPasswordInput
                .css("border", "none");
            isValid = true;
        } else {
            passwordInput
                .css("border-color", "red");
            confirmPasswordInput
                .css("border-color", "red");
            isValid = false;
        }


        if (companyChkBox.is(':checked')) {
            isValid = validateCompanyNumber() && isValid;
        }

        if (isValid) {
            validDiv
                .css("display", "block");
        } else {
            validDiv
                .css("display", "none");
        }
    }

    function validateInput(input, pattern) {
        if (pattern.test(input.val().toString())) {
            input
                .css("border", "none");
            return true;
        } else {
            input
                .css("border-color", "red");
            return false;
        }
    }


    function validateCompanyNumber() {
        let companyNumber = Number(companyNumberInput.val());
        if (1000 <= companyNumber && companyNumber <= 9999) {
            companyNumberInput
                .css("border", "none");
            return true;
        } else {
            companyNumberInput
                .css("border-color", "red");
            return false;
        }
    }
}