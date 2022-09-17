import { EGender } from '../1.variable/1_variable';

type Orang = {
  name: string;
  age: number;
  gender: EGender;
}

class Person {
  name: string;
  age: number;
  gender: EGender;
}

const personIqbal = new Person(); // instance
personIqbal.name = 'Iqbal';
personIqbal.age = 22;
personIqbal.gender = EGender.MALE;

console.info('personIqbal', personIqbal);

const personJohn: Orang = {
  name: 'John',
  age: 25,
  gender: EGender.MALE
}
console.info('personJohn', personJohn);
