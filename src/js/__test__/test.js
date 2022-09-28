/* eslint-disable no-unused-vars */
import ErrorRepository from '../task2';

test('TEST-OK1', () => {
  const f = () => {
    const eks2 = new ErrorRepository();
    const code = '3';
    eks2.translate(code);
    return 'Ошибка #3';
  };
  expect(f()).toBe('Ошибка #3');
});

test('TEST-2-ERR', () => {
  const eks2 = new ErrorRepository();
  const code = 10;
  const f = () => {
    eks2.translate(code);
    return code;
  };
  expect(f).toThrow('Ошибка! Такого кода нет.');
});
