let toCalculate;
let inputValue;
let saveState = 0;
let displayed = false;
const h4Element = document.querySelector(".h4-tag");
const AC = document.querySelector(".AC");
const DELETE = document.querySelector(".delete");
const DIVIDE = document.querySelector(".divide");
const ADD = document.querySelector(".add");
const SUBTRACT = document.querySelector(".subtract");
const MULTIPLY = document.querySelector(".multiply");
const EQUAL = document.querySelector(".equal");
const DOT = document.querySelector(".dot");
const PERCENT = document.querySelector(".percentage");
const ZERO = document.querySelector(".zero");
const ONE = document.querySelector(".one");
const TWO = document.querySelector(".two");
const THREE = document.querySelector(".three");
const FOUR = document.querySelector(".four");
const FIVE = document.querySelector(".five");
const SIX = document.querySelector(".six");
const SEVEN = document.querySelector(".seven");
const EIGHT = document.querySelector(".eight");
const NINE = document.querySelector(".nine");
const DISPLAY_INPUT = document.querySelector(".display-input");
const selectDiv = document.getElementById(`select-div`);
const h4Div = document.getElementById(`h4-div`);
const option1 = document.getElementById(`first-option`);
const option2 = document.getElementById(`second-option`);
const option3 = document.getElementById(`third-option`);
const option4 = document.getElementById(`fourth-option`);

// const BUTTONS = [
//   AC,
//   DELETE,
//   DIVIDE,
//   ADD,
//   SUBTRACT,
//   MULTIPLY,
//   EQUAL,
//   DOT,
//   PERCENT,
//   ZERO,
//   ONE,
//   TWO,
//   THREE,
//   FOUR,
//   FIVE,
//   SIX,
//   SEVEN,
//   EIGHT,
//   NINE,
//   DISPLAY_INPUT,
// ];

//Generic Function
function buttonBehave(buttonName, buttonProp) {
  buttonName.onclick = () => {
    DISPLAY_INPUT.value += buttonProp;
  };
}
//Keyboard optimization
document.addEventListener(`keydown`, (event) => {
  switch (event.key) {
    case `1`:
      DISPLAY_INPUT.value += `1`;
      break;
    case `2`:
      DISPLAY_INPUT.value += `2`;
      break;
    case `3`:
      DISPLAY_INPUT.value += `3`;
      break;
    case `4`:
      DISPLAY_INPUT.value += `4`;
      break;
    case `5`:
      DISPLAY_INPUT.value += `5`;
      break;
    case `6`:
      DISPLAY_INPUT.value += `6`;
      break;
    case `7`:
      DISPLAY_INPUT.value += `7`;
      break;
    case `8`:
      DISPLAY_INPUT.value += `8`;
      break;
    case `9`:
      DISPLAY_INPUT.value += `9`;
      break;
    case `0`:
      DISPLAY_INPUT.value += `0`;
      break;
    case `Enter`:
      if (DISPLAY_INPUT.value == ``) {
        DISPLAY_INPUT.value = `Nothing to calculate`;
        Object.assign(DISPLAY_INPUT.style, {
          color: `red`,
        });
        setTimeout(() => {
          DISPLAY_INPUT.value = ``;
          Object.assign(DISPLAY_INPUT.style, {
            color: `black`,
          });
        }, 1000);
      } else {
        toCalculate = DISPLAY_INPUT.value;
        DISPLAY_INPUT.value = eval(toCalculate);
        if (displayed == false) {
          h4Div.style.display = `block`;
          displayed = true;
        } else if (displayed == true) {
          h4Div.style.display = `none`;
        }

        setTimeout(() => {
          h4Div.style.display = `none`;
          selectDiv.style.display = `block`;
          if (saveState == 0) {
            option1.textContent = DISPLAY_INPUT.value;
            saveState += 1;
          } else if (saveState == 1) {
            option2.textContent = DISPLAY_INPUT.value;
            saveState += 1;
          } else if (saveState == 2) {
            option3.textContent = DISPLAY_INPUT.value;
            saveState += 1;
          } else if (saveState == 3) {
            option4.textContent = DISPLAY_INPUT.value;
            saveState += 1;
            if (saveState == 4) {
              setTimeout(() => {
                h4Element.textContent = `Storage full‼️Refresh page`;
                h4Element.style.color = `red`;
                h4Div.style.display = `block`;
                setTimeout(() => {
                  h4Div.style.display = `none`;
                }, 3000);
              }, 1000);
            }
          }
        }, 2000);
      }
      break;
    case `Backspace`:
      DISPLAY_INPUT.value = DISPLAY_INPUT.value.slice(0, -1);
      break;
    case `%`:
      DISPLAY_INPUT.value += `%`;
      break;
    case `.`:
      DISPLAY_INPUT.value += `.`;
      break;
    case `+`:
      DISPLAY_INPUT.value += `+`;
      break;
    case `-`:
      DISPLAY_INPUT.value += `-`;
      break;
    case `*`:
      DISPLAY_INPUT.value += `*`;
      break;
    case `/`:
      DISPLAY_INPUT.value += `/`;
      break;
    case `Escape`:
      DISPLAY_INPUT.value = ``;
      break;
  }
});

//All functioning buttons
function acButton() {
  AC.addEventListener(`click`, () => {
    DISPLAY_INPUT.value = ``;
  });
}
acButton();
function deleteButton() {
  DELETE.addEventListener(`click`, () => {
    DISPLAY_INPUT.value = DISPLAY_INPUT.value.slice(0, -1);
  });
}

//A seperate function for the equal to button
function equalBehave() {
  EQUAL.addEventListener(`click`, () => {
    if (DISPLAY_INPUT.value == ``) {
      DISPLAY_INPUT.value = `Nothing to calculate`;
      Object.assign(DISPLAY_INPUT.style, {
        color: `red`,
      });
      setTimeout(() => {
        DISPLAY_INPUT.value = ``;
        Object.assign(DISPLAY_INPUT.style, {
          color: `black`,
        });
      }, 1000);
    } else {
      toCalculate = DISPLAY_INPUT.value;
      DISPLAY_INPUT.value = eval(toCalculate);
      if (displayed == false) {
        h4Div.style.display = `block`;
        displayed = true;
      } else if (displayed == true) {
        h4Div.style.display = `none`;
      }

      setTimeout(() => {
        h4Div.style.display = `none`;
        selectDiv.style.display = `block`;
        if (saveState == 0) {
          option1.textContent = DISPLAY_INPUT.value;
          saveState += 1;
        } else if (saveState == 1) {
          option2.textContent = DISPLAY_INPUT.value;
          saveState += 1;
        } else if (saveState == 2) {
          option3.textContent = DISPLAY_INPUT.value;
          saveState += 1;
        } else if (saveState == 3) {
          option4.textContent = DISPLAY_INPUT.value;
          saveState += 1;
          if (saveState == 4) {
            setTimeout(() => {
              h4Element.textContent = `Storage full‼️Refresh page`;
              h4Element.style.color = `red`;
              h4Div.style.display = `block`;
              setTimeout(() => {
                h4Div.style.display = `none`;
              }, 3000);
            }, 1000);
          }
        }
      }, 2000);
    }
  });
}
equalBehave();
deleteButton();
buttonBehave(DIVIDE, `/`);
buttonBehave(ADD, `+`);
buttonBehave(SUBTRACT, `-`);
buttonBehave(MULTIPLY, `*`);
buttonBehave(DOT, `.`);
buttonBehave(ZERO, `0`);
buttonBehave(ONE, `1`);
buttonBehave(TWO, `2`);
buttonBehave(THREE, `3`);
buttonBehave(FOUR, `4`);
buttonBehave(FIVE, `5`);
buttonBehave(SIX, `6`);
buttonBehave(SEVEN, `7`);
buttonBehave(EIGHT, `8`);
buttonBehave(NINE, `9`);

PERCENT.addEventListener(`click`, () => {
  if (DISPLAY_INPUT.value == ``) {
    // DISPLAY_INPUT.style.color = `red`;
    Object.assign(DISPLAY_INPUT.style, {
      color: `red`,
    });
    DISPLAY_INPUT.value = `Nothing to convert`;
    setTimeout(() => {
      DISPLAY_INPUT.value = ``;
      Object.assign(DISPLAY_INPUT.style, {
        color: `black`,
      });
    }, 1000);
  } else {
    DISPLAY_INPUT.value = DISPLAY_INPUT.value * 100;
  }
});
