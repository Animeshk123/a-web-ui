const length = document.querySelector("#length");
const button = document.querySelector("button");
const output = document.querySelector("#outputPassword");
const checkbox = document.querySelector("#symbolsChoooser");
const loading = document.querySelector(".loading");


button.addEventListener("click", genreatePassword);

function genreatePassword() {
  loading.classList.add("active");
  let lengthValue = length.value;
  if (lengthValue) {
    mainAlgo({
      passwordLength: lengthValue,
      symbols: checkbox.checked
    })
  }
  else {
    mainAlgo({
      passwordLength: 10,
      symbols: checkbox.checked
    })
  }
}

/**
 * @param {Object} conditions  the condition object
 * @returns {String} the genareted password
 */

function mainAlgo(conditions) {
  const lowercase = Array.from('abcdefghijklmnopqrstuvwxyz');
  const uppercase = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const number = Array.from('1234567890');
  const symbols = Array.from('!@#$%^&*(){}[]');
  if (conditions.symbols) {
    ReturnPassword({ lowercase, uppercase, number, symbols, numberLenght: conditions.passwordLength });
  }
  else {
    ReturnPassword({ lowercase, uppercase, number, numberLenght: conditions.passwordLength });
  }
}

 function ReturnPassword() {
  let password = "";
  let mainArrary = "";
  if (arguments[0].symbols) {
    mainArrary = [...arguments[0].lowercase, ...arguments[0].uppercase, ...arguments[0].number, ...arguments[0].symbols];
  }
  else {
    mainArrary = [...arguments[0].lowercase, ...arguments[0].uppercase, ...arguments[0].number];
  }
  const genreter = setInterval(() => {
    password += mainArrary[Math.floor(Math.random() * mainArrary.length)];
    if (password.length > arguments[0].numberLenght - 1) {
        clearInterval(genreter);
        Genreated();
    }
  }, 100);
function Genreated() {
  loading.classList.remove("active");
  output.value = "";
  output.value = password;
}
}

