// Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
let numberCard = prompt("Введите номер Вашей кредитной карты:");
document.write("<span class='card'>Номер кредитной карты:</span>" + numberCard.replace(numberCard.slice(0, -4), "************"));