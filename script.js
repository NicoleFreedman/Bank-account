
let body = document.getElementsByTagName('body')[0];
let table = document.createElement("table");
let thead = table.createTHead();
let headRow = thead.insertRow();
	headRow.insertCell(0).outerHTML = "<th>Date</th>";
	headRow.insertCell(1).outerHTML = "<th>Balance</th>";
	headRow.insertCell(2).outerHTML = "<th>Type</th>";
	headRow.insertCell(3).outerHTML = "<th>Amount</th>";
	headRow.insertCell(4).outerHTML = "<th>State</th>";
	headRow.insertCell(5).outerHTML = "<th>New Balance</th>";
	body.append(table);
let tbody = document.createElement("tbody");
	table.append(tbody);
let fullDate = new Date();

function checkDate(i) {
	if (i < 10) {
	  	i = "0" + i
  	};  // add zero in front of numbers < 10
  	return i;
}
let date = `${checkDate(fullDate.getDate())}.${checkDate(fullDate.getMonth()+1)}.${fullDate.getFullYear()}`;

/* implement the BankAccount class here */

class BankAccount {
	constructor(name, balance){
		this.name = name;
		this.balance = balance;
	}
	deposit(amount){
		let transaction = [date, this.balance, 'deposit', amount, 'success', this.balance += amount]
		let row = tbody.insertRow();
		for (var i = 0; i < transaction.length; i++) {
			row.insertCell(i).innerHTML = transaction[i];
		}
		return row;
	}
	withdraw(amount){
		let row = tbody.insertRow();
		if(this.balance >= amount){
			let transaction = [date, this.balance, 'withdraw', amount, 'success', this.balance -= amount]
			for (var i = 0; i < transaction.length; i++) {
			row.insertCell(i).innerHTML = transaction[i];
			}
		} else {
			let transaction = [date, this.balance, 'withdraw', amount, 'error', this.balance]
			for (var i = 0; i < transaction.length; i++) {
			row.insertCell(i).innerHTML = transaction[i];
			}
		}
		return row;
	}
}

// Code for testing the BankAccount class
        const myAccount = new BankAccount("MyName", 1000);
        myAccount.deposit(500);
        myAccount.withdraw(2000);
        myAccount.withdraw(1000);
        myAccount.deposit(500);


















