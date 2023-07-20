// BOTTONE PER STAMPA BIGLIETTO FERROVIARIO
const sendBtn = document.getElementById("btn");

// INFORMAZIONI DA PRENDERE DOPO CLICK DEL BOTTONE

const bglName = document.getElementById("bgl-name");
const bglAge = document.getElementById("bgl-age");
const bglKm = document.getElementById("bgl-km");
const bglPrice = document.getElementById("bgl-price");

const ticket = document.getElementById("ticket");

sendBtn.addEventListener("click", function () {
  const userName = document.getElementById("name").value;
  bglName.innerHTML = userName;

  const userAge = parseInt(document.getElementById("age").value);
  bglAge.innerHTML = userAge;

  const userKm = parseFloat(document.getElementById("km").value);
  bglKm.innerHTML = userKm;

  let ticketPrice = userKm * 0.21;

  if (userAge < 18) {
    ticketPrice = (ticketPrice - ticketPrice * 0.2).toFixed(2);
  } else if (userAge > 65) {
    ticketPrice = (ticketPrice - ticketPrice * 0.4).toFixed(2);
  }

  bglPrice.innerHTML = "€ " + ticketPrice;

  ticket.className = " d-block";
});
