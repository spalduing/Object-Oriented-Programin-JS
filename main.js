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

function Student0(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  //   this.aprovarCurso = function (nuevoCurso) {
  //     this.cursosAprobados.push(nuevoCurso);
  //   };
}

Student0.prototype.aprovarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

const juanita = new Student0('Juanita', 25, ['Scope y Closure']);

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

////////////////////ABSTRACTION////////////////////////
class Learning {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new Learning({
  name: 'Escuela de desarrollo web',
  courses: [
    'Flujo moderno con codestream',
    'Curso definitivo de html y css',
    'Curso practico de html y css',
  ],
});
const escuelaDataScientist = new Learning({
  name: 'Escuela data Science',
  courses: ['Flujo DataBuisiness', 'Curso visualización de datos'],
});

const escuelaVideojuegos = new Learning({
  name: 'Escuela data Science',
  courses: ['Curso de Unrealengine', 'Curso de Unitiy en 3D'],
});

class Course {
  constructor({ name, classes = [], isFree = false, lang = 'spanish' }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (nuevoCurso === 'Curso Maldito de Programacion Basica') {
      console.error('Web...no');
    } else {
      this._name = newName;
    }
  }
}

const cursoProgBasica = new Course({
  name: 'Curso gratis de programación básica',
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: 'Curso definitivo de HTML',
});

const cursoPracticoHTML = new Course({
  name: 'Curso práctico de HTML',
  lang: 'english',
});

// cursoProgBasica.name // calls the get name()
// cursoProgrBasica.name = "lalalalalalala...la // calls the set name(newName)"

////////////////////FILE ENCAPSULATION////////////////////////

function videoPlay(id) {
  const secretURL = 'https::/www.platzi.com/' + id;
  console.log(`Se esta reproduciendo desde la url:  ${secretURL}`);
}

function videoStop(id) {
  const secretURL = 'https::/www.platzi.com/' + id;
  console.log(`Se pausó la url: ${secretURL}`);
}

class PlatziClass {
  // export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

////////////////////INHERITANCE////////////////////////

class Student {
  constructor({
    name = '',
    age = 0,
    facebook = '',
    instagram = '',
    email = '',
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.age = age;
    this.socialMedia = {
      facebook,
      instagram,
      email,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(contentComent) {
    const comentario = new Comment({
      content: contentComent,
      studentName: this.name,
    });

    comentario.publicar();
  }
}
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourses(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(
        `Lo sentimos ${this.name} solo puedes tomar cursos abiertos`
      );
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourses(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name} no puedes tomar cursos en ingles`);
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourses(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}
class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourses(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(contentComent) {
    const comentario = new Comment({
      content: contentComent,
      studentName: this.name,
      studentRole: 'profesor',
    });

    comentario.publicar();
  }
}

const pedrito2 = new FreeStudent({
  name: 'Pedrito2',
  age: 28,
});

pedrito2.approveCourses(cursoProgBasica);
pedrito2.approveCourses(cursoDefinitivoHTML);

const pedrito3 = new BasicStudent({
  name: 'Pedrito3',
  age: 28,
});

pedrito3.approveCourses(cursoProgBasica);
pedrito3.approveCourses(cursoDefinitivoHTML);
pedrito3.approveCourses(cursoPracticoHTML);

const pedrito4 = new ExpertStudent({
  name: 'Pedrito4',
  age: 28,
});

pedrito4.approveCourses(cursoProgBasica);
pedrito4.approveCourses(cursoDefinitivoHTML);
pedrito4.approveCourses(cursoPracticoHTML);

////////////////////INHERITANCE WITHOUT SYNTACTIC SUGAR////////////////////////

function FreeStudentt(props) {
  new Student.call(this, props);
}

// FreeStudentt.prototype = Object.create(Student.prototype);
// // FreeStudentt.prototype.constructor = FreeStudentt;

// FreeStudentt.prototype.approveCourse = function (newCourse) {
//   if (newCourse.isFree) {
//     this.approvedCourses.push(newCourse);
//   } else {
//     console.warn(`Lo sentimos ${this.name} solo puedes tomar cursos abiertos`);
//   }
// };

// const pedrito5 = new FreeStudentt({
//   name: 'Pedrito3',
//   age: 28,
// });

// pedrito5.approveCourse(cursoPracticoHTML);

////////////////////POLYMORPHISM////////////////////////

class Comment {
  constructor({ content, studentName, studentRole = 'estudiante' }) {
    this.content = content;
    this.studentName = studentName;
    this.content = content;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName}  (${this.studentRole})`);
    console.log(`${this.likes} Likes`);
    console.log(`   ${this.content}`);
  }
}

pedrito4.publicarComentario('Hola mundo');

const freddy = new TeacherStudent({
  name: 'Freddy Vega',
  age: 31,
  approvedCourses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
  learningPaths: [escuelaWeb, escuelaDataScientist, escuelaVideojuegos],
});

freddy.publicarComentario('Hi');
