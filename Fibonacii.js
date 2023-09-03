// 1 1 2 3 5 8 ..
function fib(n) {
  if (n < 3) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fib_memo(n, memo = {}) {
  if(memo[n]) {
    return memo[n];
  }
  if (n < 3) return 1;

  memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  return memo[n];
}

function fib_iterative(n) {
  let a = [1,1];
  for (let i = 2; i < n; i++) {
    a[i] = a[i-1] + a[i-2];
  }

  return a[n-1];
}

function fib_iterative_space_optimised(n) {
  //n is 10k
  let first = 1;
  let second = 1;
  let third;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
}
