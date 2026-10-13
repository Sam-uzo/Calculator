const display = document.querySelector(".display-input");
const liveResult = document.querySelector(".live-result");
const messageText = document.querySelector(".h4-tag");
const messageDiv = document.getElementById("h4-div");
const savedDiv = document.getElementById("select-div");
const savedOptions = [
  document.getElementById("first-option"),
  document.getElementById("second-option"),
  document.getElementById("third-option"),
  document.getElementById("fourth-option"),
];

let savedCount = 0;
let messageShown = false;
let errorTimer;

const characterButtons = {
  ".zero": "0",
  ".one": "1",
  ".two": "2",
  ".three": "3",
  ".four": "4",
  ".five": "5",
  ".six": "6",
  ".seven": "7",
  ".eight": "8",
  ".nine": "9",
  ".dot": ".",
  ".divide": "/",
  ".add": "+",
  ".subtract": "-",
  ".multiply": "*",
};

for (const selector in characterButtons) {
  document.querySelector(selector).addEventListener("click", () => {
    addToDisplay(characterButtons[selector]);
  });
}

function isShowingError() {
  return display.classList.contains("error");
}

function showError(message) {
  clearTimeout(errorTimer);
  display.value = message;
  liveResult.textContent = "";
  display.classList.add("error");
  errorTimer = setTimeout(clearDisplay, 1000);
}

function addToDisplay(text) {
  if (isShowingError()) return;
  display.value += text;
  display.classList.remove("show-result");
  updateLiveResult();
}

function clearDisplay() {
  clearTimeout(errorTimer);
  display.value = "";
  liveResult.textContent = "";
  display.classList.remove("error", "show-result");
}

function deleteLast() {
  if (isShowingError()) return;
  display.value = display.value.slice(0, -1);
  display.classList.remove("show-result");
  updateLiveResult();
}

function convertToPercent() {
  if (isShowingError()) return;

  if (display.value === "") {
    showError("Nothing to convert");
    return;
  }

  const number = Number(display.value);
  if (isNaN(number)) {
    showError("Invalid input");
    return;
  }

  display.value = number * 100;
  updateLiveResult();
}

function showFirstTimeMessage() {
  if (!messageShown) {
    messageDiv.style.display = "block";
    messageShown = true;
  } else {
    messageDiv.style.display = "none";
  }
}

function showStorageFullMessage() {
  setTimeout(() => {
    messageText.textContent = "Storage full‼️Refresh page";
    messageText.classList.add("warning");
    messageDiv.style.display = "block";

    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 4000);
  }, 1000);
}

function saveResult(result) {
  setTimeout(() => {
    messageDiv.style.display = "none";
    savedDiv.style.display = "block";

    if (savedCount >= savedOptions.length) return;

    savedOptions[savedCount].textContent = result;
    savedCount++;

    if (savedCount === savedOptions.length) {
      showStorageFullMessage();
    }
  }, 2000);
}

function updateLiveResult() {
  const expression = display.value.trim();
  const allowedCharacters = /^[0-9+\-*/.\s]+$/;

  if (!expression || !allowedCharacters.test(expression) || /[+\-*/.]$/.test(expression)) {
    liveResult.textContent = "";
    return;
  }

  try {
    const result = eval(expression);
    if (Number.isFinite(result)) {
      liveResult.textContent = "= " + parseFloat(result.toPrecision(12));
    } else {
      liveResult.textContent = "";
    }
  } catch (error) {
    liveResult.textContent = "";
  }
}

function calculate() {
  if (isShowingError()) return;

  const expression = display.value;

  if (expression === "") {
    showError("Nothing to calculate");
    return;
  }

  const allowedCharacters = /^[0-9+\-*/.\s]+$/;
  const unsupportedOperators = /\*\*|\/\//;
  if (!allowedCharacters.test(expression) || unsupportedOperators.test(expression)) {
    showError("Invalid expression");
    return;
  }

  const withoutLeadingZeros = expression.replace(/(^|[^\d.])0+(?=\d)/g, "$1");

  let result;
  try {
    result = eval(withoutLeadingZeros);
  } catch (error) {
    showError("Invalid expression");
    return;
  }

  if (!isFinite(result)) {
    showError("Cannot divide by zero");
    return;
  }

  result = parseFloat(result.toPrecision(12));

  if (String(result) === expression) return;

  display.value = result;
  liveResult.textContent = "";
  display.classList.remove("show-result");
  void display.offsetWidth;
  display.classList.add("show-result");
  showFirstTimeMessage();
  saveResult(result);
}

document.querySelector(".AC").addEventListener("click", clearDisplay);
document.querySelector(".delete").addEventListener("click", deleteLast);
document.querySelector(".equal").addEventListener("click", calculate);
document
  .querySelector(".percentage")
  .addEventListener("click", convertToPercent);

const typableKeys = "0123456789.+-*/".split("");

const actionKeys = {
  Enter: calculate,
  Backspace: deleteLast,
  Delete: deleteLast,
  Escape: clearDisplay,
  "%": convertToPercent,
};

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;

  if (typableKeys.includes(event.key)) {
    event.preventDefault();
    addToDisplay(event.key);
  } else if (actionKeys[event.key]) {
    event.preventDefault();
    actionKeys[event.key]();
  }
});

const themeToggle = document.getElementById("theme-toggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const themeColors = { dark: "#0d0b1a", light: "#eeeafd" };

function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    return;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-checked", theme === "dark");
  themeColorMeta.setAttribute("content", themeColors[theme]);
}

themeToggle.addEventListener("click", (event) => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);

  if (event.detail > 0) themeToggle.blur();
});

themeToggle.addEventListener("keydown", (event) => {
  if (event.key === "Enter") event.stopPropagation();
});

applyTheme(getSavedTheme() === "light" ? "light" : "dark");
