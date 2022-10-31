import Validator from '../index';

test('validateUsername normal', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('vo89-_va');
  const expected = true;
  expect(received).toBe(expected);
});

test('validateUsername start-num', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('67vova');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername end-num', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('vova80');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername star/end', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('_vova-');
  const expected = false;
  expect(received).toBe(expected);
});

test('validateUsername num count', () => {
  const gamer = new Validator();
  const received = gamer.validateUsername('vov5526a');
  const expected = false;
  expect(received).toBe(expected);
});
