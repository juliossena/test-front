import { convertion } from './convertion';

// 15 -> 6
test('convertion 15', () => {
  expect(convertion(15)).toEqual(6);
});

// 78 -> 15 -> 6
test('convertion 78', () => {
  expect(convertion(78)).toEqual(6);
});

// 165 -> 12 -> 3
test('convertion 165', () => {
  expect(convertion(165)).toEqual(3);
});

// 8498 -> 29 -> 11 -> 2
test('convertion 8498', () => {
  expect(convertion(8498)).toEqual(2);
});

// 984198 -> 39 -> 12 -> 3
test('convertion 984198', () => {
  expect(convertion(8498)).toEqual(2);
});
