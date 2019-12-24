import operate from './operate';

const calculate = (calData, buttonName) => {
  let { total, next, operation } = calData;
  let result;

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      return { total, next, operation };
    case 'AC':
      total = null;
      next = null;
      operation = null;
      return { total, next, operation };
    case '.':
      if (next) {
        result = [total, '.', next].join('');
        return result;
      }
      break;
    default:
      result = operate(total, next, operation);
      return result;
  }
  return calData;
};


export default calculate;
