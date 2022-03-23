function Student() {
  this.name = 'Juanito';
  this.age = 12;
  this.socialCredditPoints = 9000;
}

const juanito = new Student();
console.log(juanito);

const natalia = {
  name: 'Natalia',
  age: 16,
  socialCredditPoints: 10000,
};

console.log(natalia);

console.log(natalia.hasOwnProperty('name'));
