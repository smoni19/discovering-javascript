const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd'
];

const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10;
}

const filterLongNumbers = (numbers) =>
{
  return numbers.filter(checkLength);
}