module.exports = function check(str, bracketsConfig) {
  let resultStack = [];
  let openElement = 0;

  for (let index = 0; index < str.length; index++) {
    for (const [open, close] of bracketsConfig) {
      if (str[index] == close) {
        if (resultStack[openElement - 1] == open) {
          resultStack.pop();
          openElement--;
        } else {
          resultStack.push(str[index]);
          openElement++;
        }
      } else {
        if (str[index] == open) {
          resultStack.push(str[index]);
          openElement++;
        }
      }
    }
  }

  return !resultStack.length;
};
