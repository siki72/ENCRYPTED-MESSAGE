const encryptedForm = document.getElementById("encryptedForm");
const decryptedForm = document.getElementById("decryptedForm");
const numberInput = document.getElementById("myNumber");
const outputInput = document.getElementById("encryptedResult");

numberInput.addEventListener("keydown", (e) => {
  const allowedKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
  ];
  if (!allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

numberInput.addEventListener("contextmenu", (e) => e.preventDefault());

function encryptMessage(e) {
  e.preventDefault();
  let textChiffré = "";
  const datas = new FormData(encryptedForm);
  let message = datas.get("myInput").toLocaleUpperCase();
  let décalage = parseInt(datas.get("number"));

  for (let i = 0; i < message.length; i++) {
    const caracatere = message[i];
    if (caracatere === " ") {
      textChiffré += " ";
    } else {
      let codeCaractere = caracatere.charCodeAt(0);
      codeCaractere = ((codeCaractere - 65 + décalage + 26) % 26) + 65;
      textChiffré += String.fromCharCode(codeCaractere);
      console.log(textChiffré);
    }
    outputInput.textContent = textChiffré;
    encryptedForm.reset();
  }
}

const decryptMessage = (e) => {
  e.preventDefault();
  let textDéChiffré = "";
  const datas = new FormData(decryptedForm);
  let message = datas.get("myInput2").toLocaleUpperCase();
  let décalage = parseInt(datas.get("number2"));

  for (let i = 0; i < message.length; i++) {
    const caracatere = message[i];
    if (caracatere === " ") {
      textDéChiffré += " ";
    } else {
      let codeCaractere = caracatere.charCodeAt(0);
      codeCaractere = ((codeCaractere - 65 - décalage + 26) % 26) + 65;
      textDéChiffré += String.fromCharCode(codeCaractere);
    }
    outputInput.textContent = textDéChiffré;
    encryptedForm.reset();
  }
};

encryptedForm.addEventListener("submit", encryptMessage);
decryptedForm.addEventListener("submit", decryptMessage);
