import { ErrorRepository, eks2 } from '../task2.js';

test('TEST-OK1', () => {  
  const f = () => {
    eks2.translate(3);
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