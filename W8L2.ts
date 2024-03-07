import axios from 'axios';

// casting api data to an interface
interface Animal {
    name: string;
    species: string;
    foods: {
        likes: string[];
        dislikes: string[];
    };
    id: number;
}

// normal typescript classes
class Food {
    likes: string[];
    dislikes: string[];
    constructor(likes: string[], dislikes: string[]) {
        // deep copy
        this.likes = [...likes];
        this.dislikes = [...dislikes];
    }
}

class Animal {
    name: string;
    species: string;
    foods: Food;
    id: number;
    constructor(name: string, species: string, foods: Food, id: number) {
        this.name = name;
        this.species = species;
        this.foods = foods;
        this.id = id;
    }
}

class AllAnimals {
    animals: Animal[];
    constructor(animals: Animal[]) {
        this.animals = animals;
    }
}

const ANIMALS = 'http://localhost:3000/animals';
// function downloadUsingPromises(url: string) {
//     axios.get(url) // returns a promise
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(error => {
//             console.error("error");
//         });
// }

// downloadUsingPromises(ANIMALS);
// console.log('After downloadUsingPromises');

async function downloadUsingAsyncAwait(url: string) {
    try {
        const response = await axios.get(url);
        // response is being passed to the callback
        // made of all the code after the await
        
        console.log("Using interface to print");
        console.log(response.data as Animal[]);
        // class wala tareeka
        console.log("Using class to print");
        let allAnimals = new AllAnimals(JSON.parse(JSON.stringify(response.data)));
        allAnimals.animals.forEach(element => {
            console.log(element.name, element.species, element.foods.likes, element.foods.dislikes, element.id);
            
        });
    } catch (error) {
        console.error("error");
    }
    
}

downloadUsingAsyncAwait(ANIMALS).then(() => {
    console.log('In the callback of downloadUsingAsyncAwait');
});
console.log('After downloadUsingAsyncAwait');



async function manyPromises(urls: string[]) {
    try {

        let p = await Promise.all(urls.map(url => axios.get(url)));
        p.forEach(response => {
            console.log(response.statusText);
        });
    }
    catch (error) {
        console.error("error");
    }
    // Promise.all returns a promise that resolves when all of the promises in the iterable argument have resolved
}

manyPromises(
    [
        "http://localhost:3000/animals",
        "http://google.com",       
    ]
)

// Promise.allSettled is a Promise method that resolves all the promises in the iterable after all of the promises have been settled (either resolved or rejected).
// It doesnt throw an exception if one of the promises is rejected
// Whereas Promise.all throws an exception if one of the promises is rejected