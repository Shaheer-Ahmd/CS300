function download(url) {
    var p1 = new Promise(
    //executor function - javascript engine passes two functions (provided by the user) in the executor function
    function (resolve, reject) {
        console.log("Inside executor", url);
        setTimeout(function () {
            if (Math.random() > 0.5)
                resolve("Success");
            else
                reject("Failed");
        }, 3000);
    });
    return p1;
}
var p1 = download("http://google.com");
p1.then(function (val) {
    console.log("Inside then");
    console.log(val);
}, function (err) {
    console.log("Inside catch");
    console.log(err);
});
console.log("End");
