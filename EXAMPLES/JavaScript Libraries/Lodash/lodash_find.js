import _ from "lodash";

let x = [
  { name: "Akhil", marks: "78" },
  { name: "Akhil", marks: "98" },
  { name: "Akhil", marks: "97" },
];

// Lodash
_.find(x, (o) => o.marks === "97");

// JavaScript Array Method
x.find((x) => x.marks === "97");
