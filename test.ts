function sumTo(n: number): number {
	if(n === 1) return 1;
	return n + sumTo(n-1)
}

function sumTo(n: number): number {
	if(n === 1) return 1;
	let sum = 0
	for(let i=1;i<=n;i++) {
		sum += i
	}
	return sum
}


function sumTo(n: number): number {
	if(n === 1) return 1;
	return (1 + n)*n / 2
}

function factorial(n: number): number {
	if(n === 1) return 1;
	return n * factorial(n-1)
}

function fib(n: number): number {
	// if(n === 1) return 1
	// if(n === 2) return 1;
	// return fib(n) + fib(n-1)
	return n > 2 ? fib(n) + fib(n-1) : 1
}
