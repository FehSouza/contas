class Store {
  constructor(state) {
    this._state = state;
  }

  getState = () => this._state;

  setState = (state) => (this._state = state);

  getTransactionAmount = () => this._state.transactionAmount;

  setTransactionAmount = (value) => (this._state.transactionAmount = value);
}

const inicialStore = { transactionAmount: 0 };
export const store = new Store(inicialStore);
