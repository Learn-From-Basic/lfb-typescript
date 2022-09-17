// npx ts-node 1_variable.ts
console.info('=====================');
console.info('Hello world');

const MAX_USER = 500;

const firstName = 'John';
const lastName: string = 'John';

const age = 12;
const userAge: number = 12;

enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
const gender = EGender.MALE;
const myGender: EGender = EGender.MALE;

let isStudent = false;
isStudent = true;

const myPoints: number[] = [95, 90, 100, 98];
const points: string[] = ['95', '90', '100', '98'];

console.info('>> End of file');
console.info('=====================');
