class Store {
  constructor(state) {
    this._state = state;
  }

  getState = () => this._state;
  setState = (state) => (this._state = state);

  getTypeTransaction = () => this._state.typeTransaction;
  setTypeTransaction = (value) => (this._state.typeTransaction = value);

  getTransactionAmount = () => this._state.transactionAmount;
  setTransactionAmount = (value) => (this._state.transactionAmount = value);

  getBills = () => this._state.bills;
  setBills = (bills) => (this._state.bills = bills);

  addBill = (date, bill) => {
    const hasDate = this._state.bills.some((elem) => elem.date === date);
    let newBills = [];

    if (hasDate) {
      newBills = this._state.bills.map((elem) => {
        if (elem.date === date) return { ...elem, bills: [...elem.bills, bill] };
        else return elem;
      });
    } else newBills = [...this._state.bills, { date, bills: [bill] }];

    if (newBills.length > 1) {
      newBills.sort((a, b) => {
        const [dayA, mouthA, yearA] = a.date.split('/').map(Number);
        const [dayB, mouthB, yearB] = b.date.split('/').map(Number);
        const dateA = new Date(yearA, mouthA - 1, dayA);
        const dateB = new Date(yearB, mouthB - 1, dayB);
        return dateB - dateA;
      });
    }
    this._state.bills = newBills;
  };
}

const typeTransaction = 'expense';
const transactionAmount = 0;
const bills = [];

const inicialStore = { typeTransaction, transactionAmount, bills };
export const store = new Store(inicialStore);
