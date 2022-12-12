/*
    Define a variable named `notes` and assign a value of an empty array
*/
let notes = []
let totalTopics = 0
let averageTopics = 0
const filteredNotes = []
const criteria = "Blood"
let booksArticle = ``
let section = ``

let itBook = {
    id: 1,
    name: "It",
    text: "We all float down here!",
    author: "Stephen King",
    date: "September 15 1986",
    topics: ["Clowns", "Children", "Horror", "Georgey"]
}

let dumaKeyBook = {
    id: 2,
    name: "Duma Key",
    text: "We fool ourselves so much we could it for living",
    author: "Stephen King",
    date: "January 22 2008",
    topics: ["Painting", "Beaches", "Horror", "Bath Tub"]
}

let petSemataryBook = {
    id: 3,
    name: "Pet Sematary",
    text: "He's my cat!",
    author: "Stephen King",
    date: "November 14 1983",
    topics: ["Pets", "Semis", "Horror", "Baby"]
}

let greenMileBook = {
    id: 4,
    name: "The Green Mile",
    text: "I couldn't help it!",
    author: "Stephen King",
    date: "August 29 1996",
    topics: ["Prison", "Electric Chair", "Thiller", "Sponge"]
}

let carrieBook = {
    id: 5,
    name: "Carrie",
    text: "People don't get better, they just get smarter",
    author: "Stephen King",
    date: "April 5 1974",
    topics: ["Blood", "Prom", "Powers", "Dancing"]
}

notes.push(itBook)
notes.push(dumaKeyBook)
notes.push(petSemataryBook)
notes.push(greenMileBook)
notes.push(carrieBook)

/*
for (const book of notes) {
    for (const topics of book.topics) {
        if (topics.includes(criteria)) {
            filteredNotes.push(book)
        }
    }     
}

console.log(filteredNotes)


const bookToFind = 5

for (const book of notes) {
    if (book.id === bookToFind) {
        console.log(`${book.author} released "${book.name}" on ${book.date}!`)
    }
}
console.log(notes)


for (const book of notes) {
    totalTopics = totalTopics + book.topics.length
}
console.log(totalTopics)

for (const book of notes) {
    averageTopics = totalTopics / notes.length
}
console.log(averageTopics)


    for (const book of notes) {
        for (const topics of book.topics) {
            console.log(topics)
        }
            //console.log(book.text)  
        }


 on average how many topics the author are applying to each post
need to divide the number of topics 

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.

cd ~/workspace/toy-objects
node leonids-toys.js

*/

console.log("***  Note Articles  ***")

/*
for (const book of notes) {
    for (const text of book.text) {
    }
    console.log(`<article>${book.text}</article>`)
}
*/
/*
for (const book of notes) {
    for (const text of book.text) {
        for (const topics of book.topics) {
        }
    }
        console.log(`<article>${book.text}  <section>${book.topics}</section> </article>`) 

}
*/

for (const book of notes) {
    booksArticle += `<article>${book.text}`
    for (const topics of book.topics) {
    booksArticle += `<section>${topics}</section>`
    }
    booksArticle += '</article>'
}

    console.log(booksArticle)

/*
for (const book of notes) {
    for (const text of book.text) {
        allHTML += `<article>${book.text}`
        for (const topics of book.topics) {
        const section = `<section>${topics}</section>`
        allHTML += section
        }
   
    }
        //console.log(`<article>${book.text}<section>${book.topics}</section> </article>`) 
}
console.log(allHTML)
*/