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
}

const inicialStore = { transactionAmount: 0, typeTransaction: 'expense' };
export const store = new Store(inicialStore);
