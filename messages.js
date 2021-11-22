const namesAndDiscounts = [
  ['Anna', 50],
  ['Laura', 40],
  ['Josh', 30],
  ['Min', 50],
  ['Karla', 60]
];

const generateMessages = (namesAndDiscounts) => {
  return namesAndDiscounts.map(name => {
    return `Hi ${name[0]}! ${name[1]}% off our best candies for you today!`;
  });
}