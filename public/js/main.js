let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.pop();
console.log(monTab);
monTab.shift();
console.log(monTab);
monTab.unshift("poire");
console.log(monTab);
monTab[1] = monTab[1].toLocaleUpperCase();
console.log(monTab);
monTab.reverse();
console.log(monTab);

let chiffres = [4, 5, 2, 1, 3];
console.log(chiffres);
chiffres.sort();
console.log(chiffres);
chiffres = chiffres.join("-");
console.log(chiffres);
chiffres = chiffres.split("-");
console.log(chiffres);

let abdel = ["objet 1", "objet 2", "objet 3", "objet 4", "objet 5", "objet 6", "objet 7", "objet 8", "objet 9", "objet 10"]
console.log(abdel);
console.log(abdel.length);
console.log(abdel.indexOf(1));
console.log(abdel.indexOf(2));
console.log(abdel.indexOf(3));

abdel.splice(abdel.indexOf("objet 2"), 1);
console.log(abdel);

