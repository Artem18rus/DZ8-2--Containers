/* eslint-disable no-unused-vars */
import { ErrorRepository, eks2 } from '../task2';

test('TEST-OK1', () => {
  const f = () => {
    const code = 3;
    eks2.translate(code);
    return 'Ошибка #3';
  };
  expect(f()).toBe('Ошибка #3');
});

test('TEST-2(typeof)', () => {
  const code = '3';
  const f = () => {
    eks2.translate(code);
    return code;
  };
  expect(f()).toBe('3');
});

test('TEST-3-ERR', () => {
  const code = 10;
  const f = () => {
    eks2.translate(code);
    return code;
  };
  expect(f).toThrow('Ошибка! Такого кода нет.');
});
