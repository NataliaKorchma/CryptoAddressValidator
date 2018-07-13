import checkBTC from '../src/index'

test('Test checkBTC', () => {
  expect(checkBTC("1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i")).toEqual(true);
});