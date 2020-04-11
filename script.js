function Person (name, position, identification, email, other){
    this.personsName = name;
    this.personsPosition = position;
    this.personsIdentification = identification;
    this.personsEmail = email;
    this.personsOtherContact = other;
}

var firstPerson = new Person ("Jared","Manager","1","jared@fakemail.com","Office Number: 1")

var secondPerson = new Person ("Alec","Engineer","2","alec@fakemail.com","Github: ibealec")

var thirdPerson = new Person ("Tammer","Engineer","3","tammer@fakemail.com","Github: tammerg")

var fourthPerson = new Person ("Christian","Engineer","4","christian@fakemail.com","Github: ceckenrode")

var fifthPerson = new Person ("John","Intern","5","john@fakemail.com","School: 2University")