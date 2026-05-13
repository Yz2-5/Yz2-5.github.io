$(document).ready(function () {

  $(".html-bar").animate({
    width: "90%"
  }, 1500);

  $(".css-bar").animate({
    width: "80%"
  }, 1700);

  $(".js-bar").animate({
    width: "65%"
  }, 1900);

  $(".formation-title").click(function () {

    $(".formation-content").slideToggle();

  });

  $(document).on("submit", "#contactForm", function (e) {

    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    if (name === "" || email === "" || message === "") {

      alert("Veuillez remplir tous les champs");

      return;
    }

    if (!email.includes("@")) {

      alert("Email invalide");

      return;
    }

    alert("Message envoyé");

    $("#contactForm")[0].reset();

  });

});