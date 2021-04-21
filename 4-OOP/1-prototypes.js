// function createUser(name, score) {
//   const user = {};
//   user.name = name;
//   user.score = score;
//   user.increaseScore = function () {
//     user.score++;
//   };
//   user.print = function () {
//     console.dir(user);
//   };
//   return user;
// }
//
// const user1 = createUser('Josh', 0);
// user1.print();
// user1.increaseScore();
// user1.print();


// =============================================

// const functionsStore = {
//   increaseScore() {
//     this.score++;
//   },
//   print() {
//     console.dir(this);
//   }
// };
//
// function createUser(name, score) {
//   const user = {};
//   user.name = name;
//   user.score = score;
//   user.increaseScore = functionsStore.increaseScore;
//   user.print = functionsStore.print;
//   return user;
// }
//
// const user1 = createUser('Josh', 0);
// user1.print();
// user1.increaseScore();
// user1.print();


// =============================================
//
// const functionsStore = {
//   increaseScore() {
//     this.score++;
//   },
//   print() {
//     console.dir(this);
//   }
// };
//
// function createUser(name, score) {
//   const user = Object.create(functionsStore);
//   user.name = name;
//   user.score = score;
//   user.increaseScore = functionsStore.increaseScore;
//   user.print = functionsStore.print;
//   return user;
// }
//
// const user1 = createUser('Josh', 0);
// user1.print();
// user1.increaseScore();
// user1.print();

// =================================================

// function User(name, score) {
//   const newUser = Object.create(User.prototype);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
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
// const newUser = User('Josh', 0);
// newUser.print();
// newUser.increaseScore();
// newUser.print();

// =======================================================

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

const newUser = new User('Josh', 0);
newUser.print();
newUser.increaseScore();
newUser.print();
