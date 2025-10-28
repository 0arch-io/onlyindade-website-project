// Register Btn submit

var popupModelContainer = document.getElementById("popupModelContainer");
var signUp_Container = document.querySelector(".signUp_Container");


var forgotNextBtn1 = document.getElementById("forgotNextBtn1")
var forgotNextBtn2 = document.getElementById("forgotNextBtn2")
var forgotBackBtn = document.getElementById("forgotBackBtn")
var forgotForm1 = document.getElementById("forgotForm1")
var forgotForm2 = document.getElementById("forgotForm2")
var forgotContinue = document.getElementById("forgotContinue")
var passwordChangePopUp = document.getElementById("passwordChangePopUp")
var forgot_password_subheading = document.getElementById("forgot_password_subheading")
var forgotBackground = document.getElementById("forgotBackground")
var ForgotpopupModelContainer = document.getElementById("ForgotpopupModelContainer")
var DynamicInformationLine = document.getElementById("DynamicInformationLine")
var formStep = 0

var handleForgotBtn = () => {
    ForgotpopupModelContainer.classList.remove("d-none")
    ForgotpopupModelContainer.classList.add("d-flex")
    document.body.classList.add("overflow-hidden")
}

var handleFormContinue = () => {
    document.body.classList.remove("overflow-hidden")
    ForgotpopupModelContainer.classList.add("d-none")
    ForgotpopupModelContainer.classList.remove("d-flex")
    forgotForm2.classList.remove("d-none")
    forgotForm2.classList.add("d-flex")
    forgotForm1.classList.remove("d-flex")
    forgotForm1.classList.add("d-none")
    forgotNextBtn1.classList.add("d-none")
    forgotNextBtn2.classList.remove("d-none")
    DynamicInformationLine.innerHTML = "<p class='information_line dynamic_text_information'>Please create a new password that you don’t use on any other site.</p>"
    forgotBackground.src = "./assets/img/ChangePassword.jpg"
}
var handleBackBtn = () => {
    forgotForm2.classList.add("d-none")
    forgotForm2.classList.remove("d-flex")
    forgotForm1.classList.add("d-flex")
    forgotForm1.classList.remove("d-none")
    forgotNextBtn1.classList.remove("d-none")
    forgotNextBtn2.classList.add("d-none")
}
var handleChangePassword = () => {
    document.body.classList.add("overflow-hidden")
    passwordChangePopUp.classList.remove("d-none")
    passwordChangePopUp.classList.add("d-flex")
}
if (forgotBackBtn) {
    forgotBackBtn.addEventListener("click", handleBackBtn)
}
var navabrButton = document.getElementById("navabrButton")
var closeBtn = document.getElementById("closeBtn")
var smallNavbarContainer = document.getElementById("small_navbar_container")


var handleNavbarButton = () => {

    // console.log("click")
    if (smallNavbarContainer.style.transform === "translateX(0%)") {
        smallNavbarContainer.style.transform = "translateX(100%)"; // Hide the navbar
          document.querySelector("body").classList.remove("overflow-hidden");
        } else {
            smallNavbarContainer.style.transform = "translateX(0%)"; // Show the navbar
            document.querySelector("body").classList.add("overflow-hidden");
    }
};


var handleCloseButton = () => {

    smallNavbarContainer.style.transform = "translateX(100%)"; // Always hide the navbar
     document.querySelector("body").classList.remove("overflow-hidden");

};

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        handleCloseButton();
    }
});
if (navabrButton) {
    navabrButton.addEventListener("click", handleNavbarButton)
}
if (closeBtn) {
    closeBtn.addEventListener("click", handleCloseButton)
}

// Function to open a new page when clicking on a slide
function openPage(url) {
    window.open(url, "_Self");
}
document.addEventListener("DOMContentLoaded", function () {
    // Elements
    var searchOverlay = document.getElementById("searchOverlay");
    var searchcloseBtn = document.getElementById("searchcloseBtn");
    var searchBtn = document.getElementById("searchBtn");
    var smallScreenSearchBar = document.getElementById("smallScreenSearchBar");

    // Function to show the search overlay with animation
    function showSearchOverlay() {
        document.body.classList.add("overflow-hidden");
        searchOverlay.classList.add("active");
    }

    // Function to hide the search overlay with animation
    function hideSearchOverlay() {
        document.body.classList.remove("overflow-hidden");
        searchOverlay.classList.remove("active");
    }

    // Event Listeners
    if (searchBtn) searchBtn.addEventListener("click", showSearchOverlay);
    if (smallScreenSearchBar) smallScreenSearchBar.addEventListener("click", showSearchOverlay);
    if (searchcloseBtn) searchcloseBtn.addEventListener("click", hideSearchOverlay);
});

$(document).on("input", 'input[type="email"]', function () {
    $(this).val($(this).val().replace(/\s/g, '')); // Removes spaces
});
$(document).ready(function () {


    function updateCities(stateSelector, citySelector) {
        $(stateSelector).on('change', function () {
            var state = $(this).val();
            var cities = statesData[state] || [];
            if (citySelector == '#city_2') {
                $(citySelector).html('<option value="">-- Select City(Optional) --</option>');
            } else {
                $(citySelector).html('<option value="">-- Select City --</option>');
            }
            cities.forEach(city => {
                $(citySelector).append(`<option value="${city}">${city}</option>`);
            });
        });
    }

    // Call function for both state-city pairs
    updateCities('#state_1', '#city_1');
    updateCities('#state_2', '#city_2');
});