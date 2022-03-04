const addToZero = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      if (sum === 0) {
        return true;
      }
    }
  }
  return false;
};

// I Believe this to be O(n^2)

// console.log(addToZero([1, 2, 3, -2]));

const hasUniqueChars = (str) => {
  let index = str[0];
  for (let i = 1; i < str.length; i++) {
    let index = str[i - 1];
    console.log(`index: ${index}`);
    if (index === str[i]) {
      return false;
    }
    index++;
  }
  return true;
};

// I Believe this to be O(n)

// console.log(hasUniqueChars("Monday"));
// console.log(hasUniqueChars("Moonday"));

const isPangram = (str) => {
  let lowerStr = str.toLowerCase();
  let emptyArr = [];
  let alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = 0; j < alph.length; j++) {
      if (lowerStr[i] === alph[j]) {
        // console.log(`Splicing: ${alph[j]}`);
        alph.splice([j], 1);
        // console.log(`Alph: ${alph}`);
      }
    }
  }
  // console.log(alph);
  if (alph.length === 0) {
    return true;
  } else {
    return false;
  }
};

// I Believe this to be O(n^2)

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// console.log(isPangram("I like cats, but not mice"));

const findLongestWord = (arr) => {
  const map = arr.map((x) => x.length);
  // console.log(map);
  return Math.max(...map);
};

// I Believe this to be O(n)

// console.log(findLongestWord(["hi", "hello"]));
