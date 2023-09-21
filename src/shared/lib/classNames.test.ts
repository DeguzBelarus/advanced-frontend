import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    expect(classNames('someClass', ['extraClass1', 'extraClass2'])).toBe(
      'someClass extraClass1 extraClass2',
    );
  });

  test('with dynamical classes', () => {
    expect(
      classNames('someClass', ['extraClass1', 'extraClass2'], {
        dynamicClass1: true,
        dynamicClass2: false,
        dynamicClass3: true,
      }),
    ).toBe('someClass extraClass1 extraClass2 dynamicClass1 dynamicClass3');
  });
});
