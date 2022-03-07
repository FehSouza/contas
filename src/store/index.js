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

  getAmountTotal = () => this._state.amountTotal;
  setAmountTotal = ({ amount, type }) => {
    let amountTotal = Number(this._state.amountTotal);

    if (type === 'expense' || type === 'recipe') amountTotal += Number(amount);
    if (type === 'transfer') amountTotal = amountTotal;
    this._state.amountTotal = amountTotal;
  };

  getWallets = () => this._state.wallets;
  addWallet = (newWallets) => (this._state.wallets = [...this._state.wallets, newWallets]);
  deleteWallet = (id) => {
    const wallets = this._state.wallets.reduce((acc, elem) => {
      if (elem.id === id) return acc;
      return [...acc, elem];
    }, []);
    this._state.wallets = wallets;
  };
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

  getAddWalletStatus = () => this._state.addWalletStatus;
  setAddWalletStatus = (newStatus) => (this._state.addWalletStatus = newStatus);
}

const typeTransaction = 'expense';
const transactionAmount = 0;
const bills = [];
const wallets = [];
const wallet = undefined;
const addWalletStatus = false;
const amountTotal = 0;

const inicialStore = { typeTransaction, transactionAmount, bills, wallets, wallet, addWalletStatus, amountTotal };
export const store = new Store(inicialStore);
