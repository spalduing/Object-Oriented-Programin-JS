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

////////////////////STATIC METHODS AND VARIABLES////////////////////////

class Pato {
  static sonido = 'cuak!';
  static hacerSonido() {
    // return sonido; // error: sonido is not defined
    return 'CUAK!';
  }
}

console.log(Pato.sonido);
console.log(Pato.hacerSonido());

const objeto = {
  name: '',
  email: '',
  age: '',
};

Object.keys(objeto);
// ['name', 'email', 'age']

Object.getOwnPropertyNames(objeto);
// ['name', 'email', 'age']

Object.entries(objeto);
/*
  [
    0: ['name', 'juanito'],
    1: ['email', 'juannito@gmail.com'],
    2: ['age', 24],
  ] */

Object.getOwnPropertyDescriptors(objeto);
/*
name: {
  value: "juanito",
  writable: true,
  configurable: true,
  enumerable: true,
}
*/

const juan = {
  name: 'Juan.',
  age: 19,
  approvedCourses: ['curso1'],
  addCourse(newCourse) {
    console.log('this', this);
    this.approvedCourses.push(newCourse);
    console.log('this.approvedCourses', this.approvedCourses);
  },
};

console.log(Object.keys(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyNames(juan));

Object.defineProperty(juan, 'navigator', {
  value: 'Chrome',
  writable: false,
  enumerableble: true,
  configurable: true,
});

Object.defineProperty(juan, 'editor', {
  value: 'VSCode',
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(juan, 'terminal', {
  value: 'WSL',
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(juan, 'pruebaNasa', {
  value: 'estraterrestres',
  writable: false,
  enumerable: false,
  configurable: false,
});

Object.seal(juan); // Set the 'configurable' property to false in all the objcet properties
Object.freeze(juan); // Set the 'configurable and writable' property to false in all the objcet properties

console.log(Object.getOwnPropertyDescriptors(juan));

////////////////////SHALLOW COPY////////////////////////

console.group('////////////////////SHALLOW COPY////////////////////////');
const obj1 = {
  a: 'a',
  b: 'b,',
  c: {
    d: 'd',
    e: 'e',
  },
  saluteee() {
    console.log('Im a function');
  },
};

const obj2 = {};

for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({}, obj1); // It presents the same problem of copying the pointer to the 'c' object of 'obj1'
const obj4 = Object.create(obj1);

const obj1Stringnified = JSON.stringify(obj1);
const obj5 = JSON.parse(obj1Stringnified);

console.log(obj1);
console.log(obj2);
console.groupEnd();

////////////////////RECURSION////////////////////////
console.group('////////////////////RECURSION////////////////////////');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 4234];

function recursion(numbersArray) {
  if (numbersArray.length !== 0) {
    const num = numbersArray[0];
    console.log(num);
    numbersArray.shift();
    recursion(numbersArray);
  }
  return 1;
}

recursion(numbers);
console.groupEnd();

////////////////////DEEP COPY WITH RECURSION////////////////////////
console.group(
  '////////////////////DEEP COPY WITH RECURSION////////////////////////'
);

function isObject(subject) {
  return typeof subject == 'object';
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCoppy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCoppy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const obj6 = deepCoppy(obj1);

console.log('obj6: ', obj6);
console.groupEnd();

////////////////////ABSTRACTION AND ENCAPSULATION WITHOUT PROTOTYPES////////////////////////
console.group(
  '////////////////////ABSTRACTION AND ENCAPSULATION WITHOUT PROTOTYPES////////////////////////'
);

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: [],
  socialMedia: {
    twitter: undefined,
    facebook: undefined,
    instagram: undefined,
  },
};

const pedro = deepCoppy(studentBase);

// Object.defineProperty(pedro, 'name', {
//   value: 'San Pedro',
//   configurable: false,
// });

Object.seal(pedro);

console.log('pedro: ', pedro);
console.groupEnd();

////////////////////Factory Pattern////////////////////////
console.group('////////////////////Factory Pattern////////////////////////');

function requiredParam(param) {
  throw new Error(`'${param}' | This parameter is mandatory`);
}

function createStudent({
  name = requiredParam('name'),
  email = requiredParam('email'),
  age,
  approvedCourses = [],
  learningPaths = [],
  twitter,
  facebook,
  instagram,
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      facebook,
      instagram,
    },
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length != 0) {
        private._name = newName;
      } else {
        console.warn('Your name must have at least one letter');
      }
    },
    // readName() {
    //   return private._name;
    // },
    // changeName(newName) {
    //   private._name = newName;
    // },
  };

  Object.defineProperty(public, 'readName', {
    writable: false,
    configurable: false,
  });

  Object.defineProperty(public, 'changeName', {
    writable: false,
    configurable: false,
  });

  return public;
}

const agustin = createStudent({
  name: 'Agustin',
  email: 'agustinino@gmail.com',
  age: 45,
  facebook: 'agustinino',
  twitter: '@agustinino',
});

console.log('agustin: ', agustin);

// const carmelo = createStudent(); // Thows an error

console.groupEnd();

////////////////////Module Pattern////////////////////////
console.group('////////////////////Module Pattern////////////////////////');

console.groupEnd();

////////////////////GETTERS AND SETTERS////////////////////////
console.group(
  '////////////////////GETTERS AND SETTERS////////////////////////'
);

console.log(
  "Augustin's descriptors: ",
  Object.getOwnPropertyDescriptors(agustin)
);
console.groupEnd();
