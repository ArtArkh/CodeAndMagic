var userDialog = document.querySelector('.setup');
var WizzardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var NUMBER_OF_WIZZARDS = 4;

userDialog.classList.remove('hidden');

var WizzardNames = [
    "Иван",
    "Хуан Себастьян",
    "Мария",
    "Кристоф",
    "Виктор",
    "Юлия",
    "Люпита",
    "Вашингтон"
];

var WizzardSurnames = [
    "да Марья",
    "Верон",
    "Мирабелла",
    "Вальц",
    "Онопко",
    "Топольницкая",
    "Нионго",
    "Ирвинг",
];

var WizzardCoatColors = [
    "rgb(101, 137, 164)",
    "rgb(241, 43, 107)",
    "rgb(146, 100, 161)",
    "rgb(56, 159, 117)",
    "rgb(215, 210, 55)",
    "rgb(0, 0, 0)",
];

var WizzardEyesColors = [
    "black",
    "red",
    "blue",
    "yellow",
    "green",
];

function GetRandomNumber(min, max) {
    return Math.round(Math.random()*(max-min)+min);
}

function GetRandomValue(data) {
    return data[GetRandomNumber(0, data.length-1)]
}

function CreateWizzards(number) {
    var wizzards = [];
    for(var i = 0; i < number; i++) {
        var FullName = GetRandomValue(WizzardNames)+' '+GetRandomValue(WizzardSurnames);
        var wizzard = {
            name: FullName,
            coatColor: GetRandomValue(WizzardCoatColors),
            eyesColor: GetRandomValue(WizzardEyesColors)
        }
        wizzards.push(wizzard);
    }
    return wizzards;
}

function renderWizzard(wizzard) {
    var WizzardElement = WizzardTemplate.cloneNode(true);
    WizzardElement.querySelector('.setup-similar-label').textContent = wizzard.name;
    WizzardElement.querySelector('.wizard-coat').style.fill = wizzard.coatColor;
    WizzardElement.querySelector('.wizard-eyes').style.fill = wizzard.eyesColor;
    return WizzardElement;
}

var wizzards = CreateWizzards(NUMBER_OF_WIZZARDS);

var fragment = document.createDocumentFragment();
for(var i = 0; i < NUMBER_OF_WIZZARDS; i++) {
    fragment.appendChild(renderWizzard(wizzards[i]));
}

userDialog.querySelector('.setup-similar-list').appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');