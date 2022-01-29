//1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**

// I вариант: 
let firstString="ddd@bbb@ccc";
console.log(firstString.replaceAll("@", "!"));

// II вариант: Если для регулярного выражения используется глобальный флаг g (global match flag), то метод replace() заменяет все найденные совпадения строкой замены. Если флаг g не используется, то метод replace() осуществляет замену только первого совпадения.

let secondString="ddd@bbb@ccc";
console.log(secondString.replace(/@/g, "!"));