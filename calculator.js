let toCalculate;
let inputValue;
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
const BUTTONS = [
  AC,
  DELETE,
  DIVIDE,
  ADD,
  SUBTRACT,
  MULTIPLY,
  EQUAL,
  DOT,
  PERCENT,
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  DISPLAY_INPUT,
];

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
      console.log(`The key which is known as the key of 1 has been pressed`);
      break;
    case `2`:
      DISPLAY_INPUT.value += `2`;
      console.log(`The key which is known as the key of 2 has been pressed`);
      break;
    case `3`:
      DISPLAY_INPUT.value += `3`;
      console.log(`The key which is known as the key of 3 has been pressed`);
      break;
    case `4`:
      DISPLAY_INPUT.value += `4`;
      console.log(`The key which is known as the key of 4 has been pressed`);
      break;
    case `5`:
      DISPLAY_INPUT.value += `5`;
      console.log(`The key which is known as the key of 5 has been pressed`);
      break;
    case `6`:
      DISPLAY_INPUT.value += `6`;
      console.log(`The key which is known as the key of 6 has been pressed`);
      break;
    case `7`:
      DISPLAY_INPUT.value += `7`;
      console.log(`The key which is known as the key of 7 has been pressed`);
      break;
    case `8`:
      DISPLAY_INPUT.value += `8`;
      console.log(`The key which is known as the key of 8 has been pressed`);
      break;
    case `9`:
      DISPLAY_INPUT.value += `9`;
      console.log(`The key which is known as the key of 9 has been pressed`);
      break;
    case `0`:
      DISPLAY_INPUT.value += `0`;
      console.log(`The key which is known as the key of 0 has been pressed`);
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
      }
      console.log(
        `The key which is known as the key of enter has been pressed`,
      );
      break;
    case `Backspace`:
      DISPLAY_INPUT.value = DISPLAY_INPUT.value.slice(0, -1);
      console.log(
        `The key which is known as the key of backspace has been pressed`,
      );
      break;
    case `%`:
      DISPLAY_INPUT.value += `%`;
      console.log(`The key which is known as the key of % has been pressed`);
      break;
    case `.`:
      DISPLAY_INPUT.value += `.`;
      console.log(`The key which is known as the key of . has been pressed`);
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
deleteButton();
buttonBehave(DIVIDE, `/`);
buttonBehave(ADD, `+`);
buttonBehave(SUBTRACT, `-`);
buttonBehave(MULTIPLY, `*`);
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
    }
  });
}
equalBehave();
buttonBehave(DOT, `.`);
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
