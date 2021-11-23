const UserBase = require('./userBase');
const User = require('./user');

describe('UserBase class', () => {
  it('counts the users', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users);
    expect(userBase.count()).toBe(3);
  });

  it('returns an array of all the names', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users);
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
  });

  it('returns an array of strings that include the users name', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users);
    expect(userBase.getIntroductions()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie']);
  });

});
