const dummySuppliers = [
  {
    id: 0,
    name: "hendra",
    productName: "Token Listrik",
    productType: "TOKEN"
  },
  {
    id: 1,
    name: "abid",
    productName: "Token Listrik",
    productType: "TOKEN"
  },
  {
    id: 2,
    name: "ryan",
    productName: "SIMPATI",
    productType: "PULSA"
  },
  {
    id: 3,
    name: "bayu",
    productName: "XL",
    productType: "PULSA"
  }
];

localStorage.setItem("Suppliers", JSON.stringify(dummySuppliers));
