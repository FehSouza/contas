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

  addWallet = (newWallets) => (this._state.wallets = [...this._state.wallets, newWallets]);
  getWallets = () => this._state.wallets;
  getWallet = () => this._state.wallet;
  setWallet = (id) => {
    const [wallet] = this._state.wallets.filter((elem) => {
      if (elem.id == id) return elem;
    });
    this._state.wallet = wallet;
  };

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
const wallets = [
  { wallet: 'NuBank', user: 'Raul', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  // { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  // { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  // { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  // { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  // { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
  // { wallet: 'Santander', user: 'Fernanda', amount: 100, id: Math.random().toString(36).slice(2, 11) },
];
const wallet = undefined;

const inicialStore = { typeTransaction, transactionAmount, bills, wallets, wallet };
export const store = new Store(inicialStore);
