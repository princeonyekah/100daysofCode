// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.


const Account = {
    name : "",
    email: "",
    setName: function(naming){
        this.name = naming
    },
    setEmail: function(email){
        this.email = email
    },
    getName: function(){
        return this.name
    },
    getEmail: function(){
        return this.email
    },
    getAccountInfo:function(){
        return `Account Name: ${this.getName()}, Email: ${this.getEmail()}`
    }
}

Account.setName("Princewill")
Account.setEmail("prince@gmail.com")
console.log(Account.getName())
console.log(Account.getEmail())
console.log(Account.getAccountInfo())




// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.