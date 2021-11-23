const User = require('./user');

describe('User class', () => {
  it('gets name', () => {
    const user = new User('Uma');
    expect(user.getName()).toEqual('Uma');
  });
  
  it('get introduction', () => {
    const user = new User('Dave');
    expect(user.getIntroduction()).toEqual('Hi, my name is Dave');
  });
});
