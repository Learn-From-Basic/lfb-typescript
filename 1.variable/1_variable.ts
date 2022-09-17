// npx ts-node 1_variable.ts
console.info('=====================');
console.info('Hello world');

const MAX_USER = 500;

const firstName = 'John';
const lastName: string = 'John';

const age = 12;
const userAge: number = 12;

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

const gender = EGender.MALE;
const myGender: EGender = EGender.MALE;
const genderRandom: EGender = EGender.MALE;

let isStudent: boolean = false;
isStudent = true;

const myPoints: number[] = [95, 90, 100, 98];
// const myPoints: Array<number> = [95, 90, 100, 98];
console.info('myPoints ke-0', myPoints[0]);
console.info('myPoints ke-1', myPoints[1]);

const points: (string | number)[] = ['95', 90, '100', '98'];

console.info('>> End of file');
console.info('=====================');

var isFamily = false;
isFamily = true;