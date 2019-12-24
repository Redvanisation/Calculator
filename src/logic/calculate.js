/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
const calculate = (calData, buttonName) => {
  let { total, next, operation } = calData;

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      break;
    case 'AC':
      total = 0;
      break;
    case '.':
      if (next) {
        total = [total, '.', next].join('');
        break;
      }
  }
};

export default calculate;
