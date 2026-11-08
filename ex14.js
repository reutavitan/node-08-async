// Exercise 13: Show System Uptime
// Goal: print how long the system has been running, in seconds.
// Required: os.uptime() - returns the uptime in seconds.
// It is a synchronous system call, but keep the flow callback-friendly
// (e.g. a main function that takes a callback).
//
// Expected output:
//   System uptime: 52300 seconds
//
// Run: node ex13.js


function delay() { return (500 + Math.random() * 1000); }


setTimeout(() => {
    console.log("3");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("1");
            setTimeout(() => {
                console.log("0");
                console.log("Done!");
            }, delay());
        }, delay());
    }, delay());
}, delay());
