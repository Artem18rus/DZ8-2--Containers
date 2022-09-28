export default class ErrorRepository {
  constructor() {
    this.map = new Map([['1', 'Ошибка #1'], ['2', 'Ошибка #2'], ['3', 'Ошибка #3']]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    throw new Error('Ошибка! Такого кода нет.');
  }
}
