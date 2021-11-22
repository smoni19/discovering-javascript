const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEvenNumber = (number) => {
  
  if (number % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

const evenNumbers = numbers.filter(number => isEvenNumber(number));