export function factorialRecursive(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
}

export  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
