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

// function User(name, score) {
//   // this -> { __proto: PaidUser.prototype } // -> если new User(...)
//   this.name = name;
//   this.score = score;
//   // this -> { name: 'Matt', score: 200, __proto__: PaidUser.prototype } // -> если new User(...)
// }
//
// User.prototype.increaseScore = function increaseScore() {
//   this.score++;
// };
// User.prototype.print = function print() {
//   console.dir(this);
// };
//
// function PaidUser(name, score, balance) {
//   // this === Object.create(PaidUser.prototype) -> если new PaidUser(...)
//   // name: Matt, score: 200, balance: 1000 -> если new PaidUser(...)
//   User.call(this, name, score);
//   // this -> { __proto__: PaidUser.prototype, name: Matt, score: 200 } -> если new PaidUser(...)
//   this.balance = balance;
//   // this -> {...this, balance: 1000} -> если new PaidUser(...)
//   // return this -> если new PaidUser(...)
// }
//
// Object.setPrototypeOf(PaidUser.prototype, User.prototype);
//
// PaidUser.prototype.topUpBalance = function (amount) {
//   this.balance += amount;
// };
//
// const josh = new User('Josh', 0);
// josh.print();
// josh.increaseScore();
// josh.print();
//
// const matt = new PaidUser('Matt', 200, 1000);
// matt.print();
// matt.increaseScore();
// matt.topUpBalance(100);
// matt.print();
