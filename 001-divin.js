// -----------------------------------------------
// Array sum kandu pidikkuka. Oru array of numbers input aai eduth, avayile ella elements'nteyum sum thirike nalkunna oru function ezhuthuka.

const getSumOfNumbers = (arr) => {
  return arr.reduce((acc, cur) => (acc = acc + cur));
};

// -----------------------------------------------
// Oru array input aai eduth, avayile numbers nte maathram sum kandu pidikkuchu thirike tharunna oru function ezhuthuka.
// Note: array il numbers maathram alla, string, or objects may also be present. Avayil, numbers nte maathram sum aanu kandu pidikkendeth.

const getSum = (arr) => {
  const filterdArr = arr.filter((element) => typeof element === "number");
  return filterdArr.reduce((acc, curr) => (acc += curr));
};

// -----------------------------------------------
// Largest value kandu pidikkuka. Oru array of numbers input aai eduth, athile largest number kandu pidich thirike tharunna function ezhuthuka.

const getLargestNumber = (arr) => {
  return arr.reduce((acc, curr) => {
    if (acc < curr) return (acc = curr);
    else return acc;
  }, 0);
};
// -----------------------------------------------
// Oru string input aai eduth, athile vowels(a, e, i, o, u) nte enanm count cheithu thirike tharunna oru function ezhuthuka.

const countVowels = (str) => {
  let total = 0;
  const arr = str.split("");
  arr.map((character) => {
    const element = character.toLowerCase();
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    )
      total++;
  });
  return total;
};

// -----------------------------------------------
// Oru array of numbers input aai eduth, athile duplicate items remove cheithu return cheyyunna oru function ezhuthuka.
// Ex: console.log(removeDuplicates([1,1,2])) should print [1,2]

const removeDuplicates = (arr) => {
  const newArr = arr.filter((element, index) => index === arr.indexOf(element));
  return newArr;
};

// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "age") and a minimum age as input. Return a new array containing only objects with an age greater than or equal to the minimum age.

const filterByAge = (arr, minAge) => {
  const newArr = [];
  arr.map((element) => {
    if (element.age >= minAge) newArr.push(element);
  });
  return newArr;
};

// -----------------------------------------------
// Write a function that takes an array of objects (each object has a property "name") as input. Return a new array containing the objects sorted alphabetically by name.
// (Hint: Use array sorting methods)

const sortByName = (arr) => {
  return arr.sort((a, b) => {
    if (a.name > b.name) return 1;
    return -1;
  });
};

// -----------------------------------------------
// Write a function that takes a string as input. Validate if the string has a valid email format (contains "@" and "."). Return true if valid, false otherwise.

const validateEmail = (email) => {
  const arr = email.split("");
  if (arr.length > 320) return false;
  let atSymbol = 0;
  arr.map((character, index) => {
    if (character === "@" || character === ".") {
      if (index === 0 || index === arr.length - 1) atSymbol = 10;
      if (character === "@") atSymbol++;
    }
  });
  if (atSymbol === 1) return true;
  return false;
};

console.log(
  validateEmail("test.user-something-else+10@developer.apple.mod.com")
)

// -----------------------------------------------
// Write a function that takes two sorted arrays of numbers as input and returns a new array containing all elements merged and sorted in ascending order.

const mergeSortedArray = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  return newArr.sort((a, b) => a - b);
};

// -----------------------------------------------
// Write a function that takes an array of objects (each object represents a product with properties "price" and "quantity") as input. Return the total price of all products (price * quantity).

const calculateProductPrice = (arr) => {
  let totalPrice = 0;
  arr.map((product) => {
    const totalPriceOfEach = product.quantity * product.price;
    totalPrice += totalPriceOfEach;
  });
  return totalPrice;
};

// -----------------------------------------------
// Write a function that takes an array of objects (of any export type) as input. Return a new object where keys are unique values of the "property" and values are arrays of objects belonging to that property.
// Example:
/*
export const characters = [
  { name: "Daenerys Targaryen", family: "Targaryen" },
  { name: "Jon Snow", family: "Stark" },
  { name: "Tyrion Lannister", family: "Lannister" },
  { name: "Sansa Stark", family: "Stark" },
  { name: "Arya Stark", family: "Stark" },
  { name: "Cersei Lannister", family: "Lannister" },
  { name: "Jaime Lannister", family: "Lannister" },
  { name: "Theon Greyjoy", family: "Greyjoy" },
  { name: "Margaery Tyrell", family: "Tyrell" },
  { name: "Petyr Baelish", family: "Baelish" },
  { name: "Jorah Mormont", family: "Mormont" },
  { name: "Brienne of Tarth", family: "Tarth" },
  { name: "Davos Seaworth", family: "Seaworth" },
  { name: "Varys", family: "unknown" },
  { name: "Melisandre", family: "unknown" },
  { name: "Ramsay Bolton", family: "Bolton" },
  { name: "Littlefinger", family: "Baelish" },
  { name: "Hodor", family: "unknown" },
  { name: "Bran Stark", family: "Stark" },
  { name: "Ygritte", family: "Wildling" },
]

export const groupedResult = groupByProperty(characters, 'family') // where 'family' is the name of the "property" using which you like to group the data

Now, if you log groupedResult, it should print the below: (note: the order of keys is not important)

{
  'Targaryen': [{'name': 'Daenerys Targaryen', 'family': 'Targaryen'}],
  'Stark': [{'name': 'Jon Snow', 'family': 'Stark'}, {'name': 'Sansa Stark', 'family': 'Stark'}, {'name': 'Arya Stark', 'family': 'Stark'}, {'name': 'Bran Stark', 'family': 'Stark'}],
  'Lannister': [{'name': 'Tyrion Lannister', 'family': 'Lannister'}, {'name': 'Cersei Lannister', 'family': 'Lannister'}, {'name': 'Jaime Lannister', 'family': 'Lannister'}],
  'Greyjoy': [{'name': 'Theon Greyjoy', 'family': 'Greyjoy'}],
  'Tyrell': [{'name': 'Margaery Tyrell', 'family': 'Tyrell'}],
  'Baelish': [{'name': 'Petyr Baelish', 'family': 'Baelish'}, {'name': 'Littlefinger', 'family': 'Baelish'}],
  'Mormont': [{'name': 'Jorah Mormont', 'family': 'Mormont'}],
  'Tarth': [{'name': 'Brienne of Tarth', 'family': 'Tarth'}],
  'Seaworth': [{'name': 'Davos Seaworth', 'family': 'Seaworth'}],
  'unknown': [{'name': 'Varys', 'family': 'unknown'}, {'name': 'Melisandre', 'family': 'unknown'}, {'name': 'Hodor', 'family': 'unknown'}],
  'Bolton': [{'name': 'Ramsay Bolton', 'family': 'Bolton'}],
  'Wildling': [{'name': 'Ygritte', 'family': 'Wildling'}]
}
*/

const groupByProperty = (characters, property) => {
  const newObj = {};
  characters.map((character) => {
    if (character[property]) {
      if (!newObj[character[property]]) {
        newObj[character[property]] = [];
        newObj[character[property]].push(character);
      } else newObj[character[property]].push(character);
    }
  });
  return newObj;
};

// -----------------------------------------------
// Write a function to aggregate order data for reporting:
// You have a JSON array representing customer orders. Each order object has properties like "customerId" "items" (array of product objects), and "totalPrice."
// Write a function that takes the JSON array and a specific customer ID as input.
// Return a new object containing:
// - The customer ID (field name: customerId)
// - Total number of orders placed by the customer (field name: totalOrders)
// - Total amount spent by the customer (across all orders) (field name: totalAmount)
// - Most frequently purchased product (by quantity) and its total quantity (field name : mostFrequentProduct)

const aggregateOrders = (arr, id) => {
  // const newArr = JSON.parse(arr)
  let broughted = {};
  const newArr = arr;
  let totOrder = 0;
  let totPrice = 0;
  newArr.map((customer) => {
    if (customer.customerid === id) {
      totOrder++;
      totPrice += customer.totalPrice;
      customer.items.map((item) => {
        if (!broughted[item.product]) {
          broughted[item.product] = 1;
        } else {
          broughted[item.product]++;
        }
      });
    }
  });
  const mostBroughtedValue = Math.max(...Object.values(broughted));
  const mostBroughtedItem = Object.keys(broughted).find(
    (key) => broughted[key] === mostBroughtedValue
  );
  return {
    customerID: id,
    totalOrder: totOrder,
    totalPrice: totPrice,
    mostFrequentProduct: mostBroughtedItem + ":" + mostBroughtedValue,
  };
};

;
