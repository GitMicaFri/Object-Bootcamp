

const bookObject = {
    'title': 'Emil i Lönneberga',
    'author': 'Astrid Lindgren',
    'numPages': 160,
}

const bookObject2 = {
    'title': 'Lotta på Bråkmakargatan',
    'author': 'Astrid Lindgren',
    'numPages': 110,
}

const bookObject3 = {
    'title': 'Pelle Svanslös',
    'author': 'Gösta Knutsson',
    'numPages': 115,
}

const bookArray = [bookObject, bookObject2, bookObject3]
console.log(bookArray)

function searchTitle(bookArray, searchTerm) {
    let foundBook = bookArray.find(function(book) {
        return book.title === searchTerm
    })
    return foundBook
}
console.log(searchTitle(bookArray,  'Emil i Lönneberga'))

// LETTER FREQUENCY ///

let key = 'name'
let obj = {
    [key]: 'Amanda'
}
console.log(obj)



// Skapa en tom funktion med namnet letterFrequency som tar en sträng som argument.//

function letterFrequency(Kalle) {
    let counts = {}

    for (let i = 0; i < Kalle.length; i++) {

        let character = Kalle[i]

        if (counts[character]) {
            counts[character] += 1
        } else {
            counts[character] = 1
        }
      }
      return counts
}
console.log(letterFrequency('Kalle'))


// USER REGISTER (laddat ner registret i en egen js-fil som heter user.js) ///

// FILTER BY COUTRY //
// .filter() skapar en ny array med alla element som passerar ett test (som tillhandahålls som en funktion). 

// I vårt fall, vill vi ha en funktion som returnerar true om användarens landskod matchar den landskod vi letar efter, och false annars. 


// Inuti min funktion, vill jag returnera resultatet av att anropa .filter() på users.  .filter() är en funktion som tar en user som argument och returnerar true om user.nat matchar countryCode, och false annars.

const filterUsersByCountry = (users, countryCode) => {
    return users.filter(users => {
        // Här vill man returnera `true` om `user.nat` matchar `countryCode`,
        // och `false` annars.
        if(countryCode === users.nat) {
            return true
        }
       return false 
    });
}

filterUsersByCountry(users, 'FR');
console.log(filterUsersByCountry(users,'FR'))


// List by gender//
const female = ['Mademoiselle', 'Miss','Mrs']
const male = ['Mr']

const filterUsersByGender = (users, gender) => {
    return users.filter(users =>
    gender.includes(users.name.title) 
)}

// filterUsersByGender(users, ['Mademoiselle', 'Miss', 'Mrs'])

const femaleUsers = filterUsersByGender(users, female)
console.log(femaleUsers)
console.log(filterUsersByGender(users, female))

///////////////////////////

// List emails//
const listEmails = (users) => {
    return users.map(user => 
       user.email)
}
console.log(listEmails(users))

const allFemaleUsers = filterUsersByGender(users, female)
const femaleUserEmails = listEmails(allFemaleUsers)
console.log(femaleUserEmails)

const allEmails = listEmails(users)

// Change email domain //
const replaceEmails = (emailList) => {
    return emailList.map(emailString => {
        return emailString.replace('example.com','evilcorp.countrydomain')
    })
}
console.log(replaceEmails(allEmails))
////////////////////////////////////////////////
// Skapa en ny domän för varje land /////////////

const domainObj = { // Objekt med alla länders domännamn ///////
    FR: '.fr',
    CH: '.ch',
    DE: '.de',
    NO: '.no',
    US: '.us',
    TR: '.tr',
    FI: '.fi',
    GB: '.uk',
    NL: '.nl',
    NZ: '.nz',
    AU: '.au',
    ES: '.ee',
    IE: '.ie',
    DK: '.dk',
    IR: '.ir',
    BR: '.br',
    CA: '.ca'
}

/**
 * 1 - loopa igenom alla users
 * 2 - In each user, get nationality based email domain
 * 3 - In each user, replace their email by the correct domain
 * 4 - In each user, make email lower case
 * 5 - Return an updated list of users
 */
const getEmailDomainByCountry = (user) => {
    const emailDomainEnding = domainObj[user.nat] // = domainObj.FR
    return emailDomainEnding
}

const updatedUserList = users.map( (user) => { // STEP 1
    const userEmailDomainEnding = getEmailDomainByCountry(user) // STEP 2
    const newEmail = user.email.replace('example.com', 'evilcorp' + userEmailDomainEnding) //step 3
    const updatedUser = { // Make a copy of "user" using the spread operator (the 3 dots ...)
        ...user,
        email: newEmail.toLowerCase() // step 4
    }
    return updatedUser
})

console.log({ updatedUserList: updatedUserList })



