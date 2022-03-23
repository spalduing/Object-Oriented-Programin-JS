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

// Class Syntax Prototypes (Syntactic Sugar)

class Student2 {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // this.aprovarCurso = function (nuevoCurso) {
    //   this.cursosAprobados.push(nuevoCurso);
    // };
  }

  aprovarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const pablito = new Student2('Pablito', 28, ['Curso práctico de javascript']);

class Student3 {
  constructor({
    name = '',
    age = 0,
    facebook = '',
    instagram = '',
    email = '',
    cursosAprobados = [],
  }) {
    this.name = name;
    this.age = age;
    this.facebook = facebook;
    this.instagram = instagram;
    this.email = email;
    this.cursosAprobados = cursosAprobados;
  }

  aprovarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const pedrito = new Student3({
  cursosAprobados: ['Curso práctico de javascript'],
  name: 'Pablito',
  age: 28,
});

////////////////////ADVANTAGES OF OOP////////////////////////

const miguel = {
  name: 'Miguelangel Diaz Cabezas',
  username: 'mdiazc',
  points: 1395,
  socialMedia: {
    twitter: 'mdiazc',
    instagram: 'mdiazc',
    facebook: 'mdiazc',
  },
  approvedCourses: [
    'Flujo moderno con CodeStream',
    'Curso Básico de Javascript',
    'Curso Práctico de Javascript',
  ],
  learningPaths: [
    {
      name: 'Escuela de desarrollo Web',
      courses: [
        'Flujo moderno con CodeStream',
        'Curso Básico de Javascript',
        'Curso Práctico de Javascript',
      ],
    },
    {
      name: 'Escuela de videojuegos',
      courses: ['Curso de Unrealengine', 'Curso de Unitiy en 3D'],
    },
  ],
};

const jose = {
  name: 'Jose Riazcos',
  username: 'jriazcos',
  points: 1395,
  socialMedia: {
    twitter: 'mdiazc',
    instagram: 'mdiazc',
    facebook: undefined,
  },
  approvedCourses: [
    'Flujo moderno con CodeStream',
    'Curso Básico de Javascript',
    'Curso Práctico de Javascript',
  ],
  learningPaths: [
    {
      name: 'Escuela de UX',
      courses: ['Curso de git y github', 'Curso de introducción al diseño'],
    },
    {
      name: 'Escuela de desarrollo Web',
      courses: [
        'Flujo moderno con CodeStream',
        'Curso Básico de Javascript',
        'Curso Práctico de Javascript',
      ],
    },
    {
      name: 'Escuela de videojuegos',
      courses: ['Curso de Unrealengine', 'Curso de Unitiy en 3D'],
    },
  ],
};
