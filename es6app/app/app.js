class Person {
    constructor() {
        this.PersonId = 0;
        this.PersonName = "";
        this.Income = 0;
        this.Occupation = "";
        this.Gender = "";
    }
}

class Logic {
    constructor() {
        this.persons = new Map();
        this.persons.set(1, {
            PersonId: 101,
            PersonName: "Ajay",
            Income: 12000,
            Occupation: "Employeed",
            Gender: "Male"
        });
        this.persons.set(2, {
            PersonId: 102,
            PersonName: "Kiran",
            Income: 14000,
            Occupation: "Seld-Employeed",
            Gender: "Female"
        });
    }
    getPersons() {
        return this.persons.entries;
    };
    savePerson(key, person) {
        this.persons.set(key, person);
    };

    updatePerson(key, person) {
        // logic for update
        // if key is !undefined, then search on key and update
        // if key is undefined, then search on PersonId and update
        return this.persons.entries;
    };
    deletePersonByKey(key) {
        this.persons.delete(key);
        return this.persons.entries;
    };
    deleteByPersonRecord(person) {
        // search the existance of person by personrecord
        // search the person based on PersonId/PersonName
        // then delete 
        return this.persons.entries;
    }
    rearrangeMap(arrangeKey) {
        // arrangeKey = sort by name / reverse by name
        return this.persons.entries;
    }
    searchMap(criteria) {
        // criteria values = key / PersonId / PersonName / Occupation / Gender
        return this.persons.entries;
    }

}