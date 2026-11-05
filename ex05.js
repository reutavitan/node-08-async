// Exercise 5: System Free Memory Logger
// Goal: every 2 seconds, calculate and print the free memory percentage. Stop after 5 logs.
// Required: os.freemem(), os.totalmem(), setInterval(callback, delay), clearInterval(intervalId)
//
// Expected output:
//   Free Memory: 73.25%
//   Free Memory: 72.91%
//   Free Memory: 72.80%
//   Free Memory: 72.75%
//   Free Memory: 72.60%
//   Memory logging complete.
//
// Run: node ex05.js

const os = require("os");
function logFreeMemory() {
    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();
    const freeMemoryPercentage = (freeMemory / totalMemory) * 100;
    console.log(`Free Memory: ${freeMemoryPercentage.toFixed(2)}%`);
}

const intervalId = setInterval(logFreeMemory, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Memory logging complete.");
}, 12000);
