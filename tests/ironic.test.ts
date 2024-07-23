import { ironic } from '../src';

test('correctly ironizes string', () => {
  const result = ironic("Hello World!");
  expect(result).toBe("hElLo wOrLd!");
});
