class Person {
    firstName;
    lastName;
    email;

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    displayInfo() {
        console.log(`${this.firstName} ${this.lastName} ${this.email}`;)
    }   
}

const basia = new Person("Basia", "Kędziorek", "basiakedz@gmail.com");

basia.displayInfo();

const people = [];

people.push(basia);
people.push(new Person("Kasia", "Iksinska", "kasia@gmail.com"));
people.push(new Person("Tomek", "Nowak", "tomek@gmail.com"));

for (const person of people) {
    person.displayInfo();
}