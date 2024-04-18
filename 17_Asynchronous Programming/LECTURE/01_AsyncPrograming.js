console.log('start');

// Асинхронност постигната чрез подаване на функция като параметър на друга функция.
// CALLBACK
setTimeout(() => {
    console.log('middle');
}, 2000);

console.log('end');