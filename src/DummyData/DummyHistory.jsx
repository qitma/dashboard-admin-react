const dummyTransaction = [
  {
    id: 0,
    name: "hendra",
    type: "Token Listrik",
    transactionNumber: "PXL023232",
    transactionAmount: 10000,
    transactionDate: "22-11-2018"
  },
  {
    id: 1,
    name: "hendra",
    type: "Token Listrik",
    transactionNumber: "PXL023232",
    transactionAmount: 10000,
    transactionDate: "22-11-2018"
  },
  {
    id: 2,
    name: "qitma",
    type: "Token Listrik",
    transactionNumber: "PXL023232",
    transactionAmount: 10000,
    transactionDate: "22-11-2018"
  },
  {
    id: 3,
    name: "bayu",
    type: "Token Listrik",
    transactionNumber: "PXL023232",
    transactionAmount: 10000,
    transactionDate: "22-11-2018"
  }
];

localStorage.setItem("HistoryTransactions", JSON.stringify(dummyTransaction));
