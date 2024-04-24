class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    checkBalance() {
        console.log(`Current balance for ${this.name} (ID: ${this.id}): $${this.balance}`);
    }
}

// Example usage:
const student1 = new Student("John Doe", 1234);
student1.deposit(100);
student1.withdraw(50);
student1.checkBalance();
