document.getElementById("messageForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const message = document.getElementById("message").value;
  const responseDiv = document.getElementById("response");
  responseDiv.textContent = "Envoi en cours...";

  google.script.run
    .withSuccessHandler(function(reponse) {
      responseDiv.textContent = reponse;
      document.getElementById("messageForm").reset();
    })
    .envoyerMessage(message);
});
