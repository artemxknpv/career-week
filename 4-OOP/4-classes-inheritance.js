class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increaseScore() {
    this.score++;
  };

  print() {
    console.dir(this);
  };
}

const newUser = new User('Fyodor', 100);
newUser.print();
newUser.increaseScore();
newUser.print();

class PaidUser extends User {
  constructor(name, score, balance) {
    super(name, score);
    this.balance = balance;
  }

  topUpBalance(amount) {
    this.balance += amount;
  };
}

const matt = new PaidUser('Matt', 200, 1000);
matt.print();
matt.increaseScore();
matt.topUpBalance(100);
matt.print();
