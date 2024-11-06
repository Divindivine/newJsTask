/*
Problem: Search for a key in a nested object 
Write a function findValue that takes three arguments:

- A nested object data
- A target key to search for within the object
- An optional maxDepth parameter that specifies the maximum depth to search within the object. If maxDepth is not provided, the function should search through all levels.

The function should return an object with two properties:
- isFound: a boolean indicating whether the key was found within the specified depth.
- value: the value associated with the key if found, or null if not found.

Sample usage:

const data = {
  name: "Alice",
  info: {
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345"
    },
    preferences: {
      color: "blue",
      hobbies: ["reading", "gardening"]
    }
  }
};

console.log(findValue(data, "city", 2)); 
// { isFound: false, value: null } (exceeds maxDepth of 2)

console.log(findValue(data, "city", 3)); 
// { isFound: true, value: "Wonderland" }

console.log(findValue(data, "name")); 
// { isFound: true, value: "Alice" } (default depth search)
*/
const data = {
  name: "Alice",
  info: {
    age: 30,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
    preferences: {
      color: "blue",
      hobbies: ["reading", "gardening"],
    },
  },
  detail: {
    place: {
      town: "mumbai",
      pin: "673124",
    },
  },
};

type objectValueType = objectType | number | string | number[] | string[];

type objectType = {
  [key: string]: objectValueType;
};

type answerType = {
  isFound: boolean;
  value: null | objectValueType;
};

const findValues = (obj: objectType, key: string, depth: number) => {
  let answer: answerType = { isFound: false, value: null };
  if (depth === -1) {
    return answer;
  }
  depth -= 1;
  for (let tempKey in obj) {
    if (tempKey === key) {
      answer.isFound = true;
      answer.value = obj[key];
      return answer;
    }
    if (typeof obj[tempKey] === "object" && obj[tempKey] !== null) {
      const value = obj[tempKey] as objectType;
      const nestedAnswer: answerType = findValues(value, key, depth);
      if (nestedAnswer.isFound) return nestedAnswer;
    }
  }
  return answer;
};

console.log(findValues(data, "pin", 1));
