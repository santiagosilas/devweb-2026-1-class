import {getAllUsers, getUserById} from "./services/usuarios.service.js";
import info from "./services/usuarios.service.js";

getAllUsers();
getUserById(42);
info();

let pessoas = [
  {
    nome: "A",
    idade: 33,
  },
  {
    nome: "A",
    idade: 43,
  },
  {
    nome: "A",
    idade: 53,
  },
];
let tmp = pessoas.reduce((acc, current) => {
  return Math.max(acc, current.idade);
}, 0);
console.log(tmp);
tmp = Math.max(...pessoas.map((x) => x.idade));
console.log(tmp);

try {
  throw new Error("UM erro aqui");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
