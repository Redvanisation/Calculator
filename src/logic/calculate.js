import operate from './operate';

const calculate = (calcData, btnName) => {
  const {
    total, next, operation, calculated,
  } = calcData;

  switch (btnName) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
        calculated: false,
      };
    case '+/-':
      if (next) {
        return {
          total, next: next * -1, operation, calculated: false,
        };
      }
      return {
        total: total * -1, next, operation: null, calculated: false,
      };
    case '+':
    case '-':
    case '÷':
    case 'x':
    case '%':
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: btnName,
          calculated: false,
        };
      }
      return {
        total, next: null, operation: btnName, calculated: false,
      };
    case '=':
      if (operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
          calculated: true,
        };
      }
      return {
        total, next: null, operation: null, calculated: true,
      };
    case '.':
      if (next) {
        return {
          total, next: `${next}.`, operation, calculated: false,
        };
      }
      if (total) {
        return {
          total: `${total}.`, next, operation, calculated: false,
        };
      }
      return { total: '0.', next, operation };
    default:
      if (operation) return { total, next: next ? next + btnName : btnName, operation };
      if (calculated) {
        return {
          total: btnName, next, operation, calculated: true,
        };
      }
      return { total: total ? total + btnName : btnName, next, operation };
  }
};

export default calculate;
