export function createRandomNumbers(amount) {
  return Array(amount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
}
