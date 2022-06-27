export const splitText = (text) => {
  let word = Array.from(text);
  let newWord = "";

  if (word.length > 350) {
    word.length = 350;
  }
  newWord = word.join("");

  return newWord + " ...";
};
