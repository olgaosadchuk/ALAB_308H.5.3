const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

function moveLocation(person, newLocation) {
    person.location.city = newLocation.city;
    person.location.state = newLocation.state;
    person.location.zip = newLocation.zip;
}

const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
};

moveLocation(personTwo, nLoc);

console.log(personTwo.location.city);


///////////////////////  2
personTwo.location = personOne.location;

const nLoc2 = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
};


moveLocation(personOne, nLoc2);

console.log(personTwo.location.state);

///////////////////////////// 3

const personThree = {
    name: {
        first: 'Emily',
        last: `${personOne.name.last}-${personTwo.name.last}`
    },
    age: 0,
    location: personOne.location
};

const nLoc3 = {
    city: 'Los Angeles',
    state: 'California',
    zip: 90001
};

moveLocation(personThree, nLoc3);

console.log(personThree.location.city);

///////////////////////////// 4
personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

const personThreeLocationCopy = Object.assign({}, personThree.location);
personThree.location = personThreeLocationCopy;

const newLocation = {
    city: 'San Francisco',
    state: 'California',
    zip: 94101
};

moveLocation(personThree, newLocation);

console.log(personThree.location.city);

///////////////////////////// 5
personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

function clonePerson(person) {
    const clonedPerson = JSON.parse(JSON.stringify(person));
    clonedPerson.age = 0;
    return clonedPerson;
}

const personOneClone = clonePerson(personOne);
const personTwoClone = clonePerson(personTwo);
const personThreeClone = clonePerson(personThree);

const cloneLocationOne = {
    city: 'London',
    state: 'United Kingdom',
    zip: 'SW1A 1AA'
};

const cloneLocationTwo = {
    city: 'Paris',
    state: 'France',
    zip: '75000'
};

moveLocation(personOneClone, cloneLocationOne);
moveLocation(personTwoClone, cloneLocationTwo);

console.log(personOne.age);     
console.log(personTwo.age);     
console.log(personThree.age)

/////////////////////////6
const thoughts = {
    idea: 'The power of the hive mind',
    emotion: 'Collective consciousness',
    belief: 'Unity is strength'
};

personOne.thoughts = thoughts;
personTwo.thoughts = thoughts;
personThree.thoughts = thoughts;
personOneClone.thoughts = thoughts;
personTwoClone.thoughts = thoughts;
personThreeClone.thoughts = thoughts;

thoughts.idea = 'The strength of collective intelligence';
thoughts.emotion = 'Harmony and collaboration';
thoughts.belief = 'Together we can achieve greatness';

