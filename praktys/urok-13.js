
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  idCounter: 1,
  
  createTransaction(amount, type) {
    return {
      type,
      amount,
      id: this.idCounter++,
    }
  },
  deposit(amount) {
    this.balance += amount;
    const transactionobj = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );
    this.transactions.push(transactionobj);
  },
  withdraw(amount) {
    this.balance -= amount;
    const transactionobj = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );
    this.transactions.push(transactionobj);
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    // return this.transactions.find(({ id: transId }) => transId === id);
    return this.transactions.find((transobj) => transobj.id === id);
  },
  getTransactionTotal(type) {
    getTransactionTotal(type) {
      return this.transactions
        .filter(({ type: transType }) => transType === type)
        .reduce((total, { amount }) => total + amount, 0);
    }
  }
};
  