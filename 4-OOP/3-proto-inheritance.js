// function User(name, score) {
//   this.name = name;
//   this.score = score;
// }
//
// User.prototype.increaseScore = function increaseScore() {
//   this.score++;
// };
//
// User.prototype.print = function print() {
//   console.dir(this);
// };
//
// const newUser = new User('Josh', 0);
// newUser.print();
// newUser.increaseScore();
// newUser.print();

// =====================================================

function User(name, score) {
  this.name = name;
  this.score = score;
}

User.prototype.increaseScore = function increaseScore() {
  this.score++;
};
User.prototype.print = function print() {
  console.dir(this);
};

function PaidUser(name, score, balance) {
  User.call(this, name, score);
  this.balance = balance;
}

Object.setPrototypeOf(PaidUser.prototype, User.prototype);

PaidUser.prototype.topUpBalance = function (amount) {
  this.balance += amount;
};

const josh = new User('Josh', 0);
josh.print();
josh.increaseScore();
josh.print();

const matt = new PaidUser('Matt', 200, 1000);
matt.print();
matt.increaseScore();
matt.topUpBalance(100);
matt.print();
