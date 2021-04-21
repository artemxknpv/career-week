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
