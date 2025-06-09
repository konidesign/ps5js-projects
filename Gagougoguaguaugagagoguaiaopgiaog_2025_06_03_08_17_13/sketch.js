
function speakMiaou() {
  setInterval(() => {
    const utterance = new SpeechSynthesisUtterance("Gagougoguaguaugagagoguaiaopgiaogiaoiugagaiugapigaugiagogiugugiouaigaoagiogauauiogoaiplpplalalpalplapaaplalalpalalpalpalpalpalpa");
    speechSynthesis.speak(utterance);
  }, 100); // Intervalle de 100ms (1/10e de seconde)
}

speakMiaou();