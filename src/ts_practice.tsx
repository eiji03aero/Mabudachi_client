import React from 'react';
import Counter from './Counter/index';

// class Student {
//   fullName: string;
//
//   constructor (public fn: string, mn: string, ln: string) {
//     this.fullName = `${fn} ${mn} ${ln}`;
//   }
// }
// interface Person {
//   firstName: string;
//   lastName: string;
//   id: number;
// }
//
// function greeter (s: Student): void {
//   console.log(s);
// }
//
// let user = new Student('eiji', 'R.', 'osakabe');
//
// greeter(user);

function App () {
  return (
    <Counter />
  )
}

export default App;
