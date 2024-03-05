function download (url: string) {
    let p1 = new Promise(
        
        //executor function - javascript engine passes two functions (provided by the user) in the executor function
        (resolve, reject) => {
            console.log("Inside executor", url);
            
            setTimeout(
                () => {                    
                    if(Math.random() > 0.5)
                        resolve("Success");
                    else
                        reject("Failed");
                },
                3000
            )

        }
        
    )
    return p1;
}
let p1 = download("http://google.com");

p1.then(
    (val) => {
        console.log("Inside then");
        console.log(val);
    },
    (err) => {
        console.log("Inside catch");
        console.log(err);
    }
)

console.log("End");
