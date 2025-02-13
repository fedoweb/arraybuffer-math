import Character from '../characters/Character';
import {Magician, Daemon} from '../characters/CharacterTypes';

test.each([
    ['Magician', 80, 2, true, 65],
    ['Daemon', 100, 2, true, 85],
  ])('set/get attack value and hit function class Character', (type, attack, distance, stoned, expected) => {
    const test = new Character(type);
    test.attack = attack;
    test.hit(distance, stoned);
    expect(test.attack).toBe(expected);
});

test.each([
    ['Magician', 80, 2, true, true],
    ['Daemon', 100, 2, true, true],
  ])('get stoned value class Character', (type, attack, distance, stoned, expected) => {
    const test = new Character(type, attack);
    test.hit(distance, stoned);
    expect(test.stoned).toBe(expected);
});

test.each([
    [[2, true], 85],
    [[15, true], 0],
    [[1, false], 100],
  ])('attack value class Magician', (value, expected) => {
    const test = new Magician(...value);
    expect(test.attack).toBe(expected);
});

test.each([
    [[2, true], 65],
    [[15, true], 0],
    [[1, false], 80],
  ])('attack value class Daemon', (value, expected) => {
    const test = new Daemon(...value);
    expect(test.attack).toBe(expected);
});

