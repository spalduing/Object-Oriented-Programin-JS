const natalia = {
  name: 'Natalia',
  age: 16,
  cursosAprobados: [
    'Curso Definitivo de HTML y CSS',
    'Curso Práctico de HTML y CSS',
  ],
  aprovarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },
};

// Hacer que Natalia aprueve otro curso

natalia.aprovarCurso('Curso de responsive design');

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  //   this.aprovarCurso = function (nuevoCurso) {
  //     this.cursosAprobados.push(nuevoCurso);
  //   };
}

Student.prototype.aprovarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student('Juanita', 25, ['Scope y Closure']);
