class Store {
  constructor(state) {
    this._state = state;
  }

  getState = () => this._state;
  setState = (state) => (this._state = state);

  getTransactionAmount = () => this._state.transactionAmount;
  setTransactionAmount = (value) => (this._state.transactionAmount = value);

  getTypeTransaction = () => this._state.typeTransaction;
  setTypeTransaction = (value) => (this._state.typeTransaction = value);

  getStatusInstallment = () => this._state.statusInstallment;
  setStatusInstallment = (value) => (this._state.statusInstallment = value);
}

const transactionAmount = 0;
const typeTransaction = 'expense';
const statusInstallment = 'disabled';

const inicialStore = { transactionAmount, typeTransaction, statusInstallment };
export const store = new Store(inicialStore);
