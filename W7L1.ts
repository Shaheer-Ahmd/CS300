const longRunningTask2 = (msg: string, timeout: number) => {
    console.log("Task started");
    // This is still a non asynchronous function
    // let i = 0;
    // while (i < 1000000000) {
    //     i++;
    // }

    // This is an asynchronous function
    setTimeout(() => {
        console.log(msg);
    }, timeout);
    console.log("Task ended");
}

console.log("Start");
longRunningTask2("Task1", 1000);
longRunningTask2("Task2", 500);
console.log("End");