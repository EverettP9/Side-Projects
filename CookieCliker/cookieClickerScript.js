
/*
The buyableObject class is for the buildings in the store
*/

class buyableObject {
    constructor(name, price, cps) {
        this.name = name;
        this.number = 0;
        this.price = price;
        this.cps = cps;
        if(name == "Cursor") {
            document.getElementById("CursorPrice").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(this.price) + " cookies";
        }
        if(name == "Grandma") {
            document.getElementById("GrandmaPrice").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(this.price) + " cookies";
        }
    }

    buy() {
        if (numOfCookies >= this.price) {
            numOfCookies -= this.price;
            cookiesPerSecond += this.cps;
            cookiesPerSecond *= 10;
            cookiesPerSecond = Math.round(cookiesPerSecond);
            cookiesPerSecond /= 10;
            this.number += 1;    
            this.price = Math.round(this.price * 1.15);
            document.getElementById(this.name + "Price").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(this.price) + " cookies";
            document.getElementById("cps").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(cookiesPerSecond) + " cookies per second";
            document.getElementById(this.name + "Num").innerHTML = "" + this.number;
            document.getElementById(this.name + "box").style.opacity = 1;
            boughtStatus(this.name) = true;

        }
    }
    getPrice(){
        return this.price;
    }
    getCps() {
        return this.cps;
    }
    getName() {
        return this.name;
    }
    getNumber() {
        return this.number;
    }
    setCps(newCps) {
        this.cps = newCps;
    }
}

/*
The upgrades class is for all the store upgrades
*/
class upgrades {
    constructor(building, name, description, ID, price, percentage) {
        this.building = building;
        this.name = name;
        this.description = description;
        this.ID = ID;
        this.price = price;
        this.percentage = percentage
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getID() {
        return this.ID;
    }
    getPrice() {
        return this.price;
    }
    getPercentage() {
        return this.percentage;
    }
}

const Cursor = new buyableObject("Cursor", 15, .1);
const Grandma = new buyableObject("Grandma", 100, 1);
const Farm = new buyableObject("Farm", 1100, 8);
const Mine = new buyableObject("Mine",12e3, 47);
const Factory = new buyableObject("Factory",130000, 260);
const Bank = new buyableObject("Bank", 1.4e6, 1400);
const Temple = new buyableObject("Temple",20e6, 7800);
const WizardTower = new buyableObject("WizardTower", 330e6, 44e3);
const Shipment = new buyableObject("Shipment", 5.1e9, 260e3);

const upgradeC01 =new upgrades(Cursor, "More Clicking Power!", "Your cursor strength increases and now you gain 15% cookies per click", "IDC01", 100, .15);
const upgradeC02 =new upgrades(Cursor, "Even More Clicking Power!", "Your cursor strength increases and now you gain 15% cookies per click", "IDC02", 1000, .2);
const upgradeC03 =new upgrades(Cursor, "Even Even More Clicking Power!", "Your cursor strength increases and now you gain 15% cookies per click", "IDC03", 10000, .25);
const upgradeG01 = new upgrades(Grandma, "Over worked Grandma's", "You increase labor hours for the elderly and now they bake 15% faster","IDG01" ,1000, .15);
const upgradeG02 = new upgrades(Grandma, "Even more Over worked Grandma's", "You increase labor hours for the elderly and now they bake 15% faster","IDG02" ,10000, .2);
const upgradeG03 = new upgrades(Grandma, "Even Even more Over worked Grandma's", "You increase labor hours for the elderly and now they bake 15% faster","IDG03" ,100000, .25);
const upgradeF01 = new upgrades(Farm, "Special Fertilizer", "You develope a new cookie fertilizer that promotes faster growth", "IDF01", 10000, .15);
const upgradeF02 = new upgrades(Farm, "Even more Special Fertilizer", "You develope a new cookie fertilizer that promotes faster growth", "IDF02", 100000, .2);
const upgradeF03 = new upgrades(Farm, "Even Even more Special Fertilizer", "You develope a new cookie fertilizer that promotes faster growth", "IDF03", 1000000, .25);
const upgradeM01 = new upgrades(Mine, "Better Pickaxe!", "You craft a better pickaxe to mine more cookies", "IDM01", 1, .15);
const upgradeM02 = new upgrades(Mine, "Even better pickaxe!", "You craft an even better pickaxe", "IDM02", 2, .2);
const upgradeM03 = new upgrades(Mine, "The best pickaxe!", "You craft the master pickaxe", "IDM03", 3, .25);
const upgradeFa01 = new upgrades(Factory, "Lower labor laws", "You decrease labor laws to increase efficiency", "IDFa01", 1, .15);
const upgradeFa02 = new upgrades(Factory, "Even Lower labor laws", "You decrease labor laws to increase efficiency","IDFa01", 2, .2);
const upgradeFa03 = new upgrades(Factory, "the lowest Lower labor laws", "You decrease labor laws to increase efficiency", "IDFa03", 3, .25);
const upgradeB01 = new upgrades(Bank, "loans", "You take out loans to get more cookies", "IDB01", 1, .15);
const upgradeB02 = new upgrades(Bank, "more loans", "You take out loans to get more cookies","IDB02" ,2, .2);
const upgradeB03 = new upgrades(Bank, "The most loans", "You take out loans to get more cookies", "IDB03",3, .25);
const upgradeT01 = new upgrades(Temple, "sacrifices", "you sacrifice for more cookies","IDT01", 1, .15);
const upgradeT02 = new upgrades(Temple, "more sacrifices", "you sacrifice for more cookies", "IDT02",2, .2);
const upgradeT03 = new upgrades(Temple, "the most sacrifices", "you sacrifice for more cookies", "IDT03",3, .25);
const upgradeW01 = new upgrades(WizardTower, "Spells!", "you learn new spells", "IDW01",1, .15);
const upgradeW02 = new upgrades(WizardTower, "more Spells!", "you learn new spells","IDW02" ,2, .2);
const upgradeW03 = new upgrades(WizardTower, "The most Spells!", "you learn new spells", "IDW03",3, .25);
const upgradeS01 = new upgrades(Shipment, "New Trade Routes", "You find more trade routes to barter for cookies","IDS01" ,1, .15);
const upgradeS02 = new upgrades(Shipment, "More New Trade Routes", "You find more trade routes to barter for cookies", "IDS02",2, .2);
const upgradeS03 = new upgrades(Shipment, "Even more New Trade Routes", "You find more trade routes to barter for cookies","IDS03" ,3, .25);


const buildingArray = [Cursor, Grandma, Farm, Mine, Factory, Bank, Temple, WizardTower, Shipment];
const buildingNameArray = ["Cursor", "Grandma", "Farm", "Mine", "Factory", "Bank", "Temple", "WizardTower", "Shipment"];
const buildingUpgradeNumber = [0,0,0,0,0,0,0,0,0]; //Keeps track of how many upgrades have been unlocked for each building
const boughtStatus = {"Cursor": false, "Grandma": false, "Farm": false, "Mine": false, "Factory":false, "Bank": false, "Temple": false, "WizardTower": false, "Shipment": false};
let nextedLockedIndex = 1;
let numOfCookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let cookie = document.getElementById("cookie");
const goldenCookie = document.getElementById("goldenCookie");
let inAction = false;
let goldenCookieClickable = false;


const targetNumberForUpgrades = [15,25,50];
const CursorUpgrades = [upgradeC01, upgradeC02, upgradeC03];
const GrandmaUpgrades = [upgradeG01, upgradeG02, upgradeG03];
const FarmUpgrades = [upgradeF01, upgradeF02, upgradeF03];
const MineUpgrades = [upgradeM01, upgradeM02, upgradeM03];
const FactoryUpgrades = [upgradeFa01, upgradeFa02, upgradeFa03];
const BankUpgrades = [upgradeB01, upgradeB02, upgradeB03];
const TempleUpgrades = [upgradeT01, upgradeT02, upgradeT03];
const WizardTowerUpgrades = [upgradeW01, upgradeW02, upgradeW03];
const ShipmentUpgrades = [upgradeS01, upgradeS02, upgradeS03];


/*
This method first calls the building buy function then determines if an upgrade should be unlocked, and if so which one
building: the object being passed in
upgradeList: the list of building specific upgrades
*/
function buyBuilding(building, upgradeList) {
    building.buy();
    let upgradeIndex = 0;
    while (building.getName() != buildingNameArray[upgradeIndex]) {
        upgradeIndex++;
    }
    //Combine this with buildingArray as an object to make it more efficient
    if (building.getNumber() == targetNumberForUpgrades[buildingUpgradeNumber[upgradeIndex]]) {
        currentUpgrade = upgradeList[buildingUpgradeNumber[upgradeIndex]];
        buildingUpgradeNumber[upgradeIndex] += 1;
        const subject = document.getElementById("store"); //Creates new HTML element for the building
        let newElement = '<div id = \"' + currentUpgrade.getID() +'\" class = "upgradebox"><div id = \"'+ currentUpgrade.getID().substring(2)+'\"" class = "upgrade-content" onmouseenter= "document.getElementById(`'+currentUpgrade.getID().substring(2)+'`).style.display = `block`">' + 
                '<div><span style = "float:left">' + currentUpgrade.getName() + '</span> <span style = "float:right">' + currentUpgrade.getPrice() + '</span></div><div id = "'+currentUpgrade.getID()+ '"Description">'+ 
                currentUpgrade.getDescription() + '</div></div></div>';
        subject.insertAdjacentHTML('beforeend', newElement);
        const popupContainer = document.getElementById(currentUpgrade.getID());
        const popupContent = document.getElementById(currentUpgrade.getID().substring(2));
        let price = currentUpgrade.getPrice();
        let percentage = currentUpgrade.getPercentage();
        let ID = currentUpgrade.getID();
        document.getElementById(ID).style.backgroundImage = "url('"+building.getName()+"upgrade.jpg')";
        popupContainer.addEventListener('mouseover', function () {popupContent.style.display = 'flex';});
        popupContainer.addEventListener('mouseout', function () {popupContent.style.display = 'none';});
        popupContainer.addEventListener("click", function() {
            if (numOfCookies >= price) {
            numOfCookies -= price;
            if(building.getName() == "Cursor") {
                cookiesPerClick = Math.round(1.15 * cookiesPerClick * 100) / 100;
                document.getElementById(ID).remove();
            } else{
                cookiesPerSecond += Math.round(building.getNumber() * percentage * building.getCps() * 100) / 100;
                building.setCps(Math.round(building.getCps() * (1 + percentage)* 100)/100);
                document.getElementById("cps").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(Math.round(cookiesPerSecond * 100)/100) + " cookies per second";
                document.getElementById(ID).remove();
            }
        }
        }); 
    }
}


/*
This method runs the game and has a timer that runs every second to update the cookie count,
determine if a golden cookie can spawn, and determines if the next building can appear in the store
*/
function startGame() {
    document.getElementById("cookiecounter").innerHTML = numOfCookies + " cookies";
    document.getElementById("cps").innerHTML = cookiesPerSecond + " cookies per second";
    let game = setInterval(start, 1000);
    function start() {
        numOfCookies += cookiesPerSecond;
        numOfCookies *=10;
        numOfCookies = Math.round(numOfCookies);
        numOfCookies /=10;
        let randomNumber = Math.round(Math.random() * 10);
        if (!goldenCookieClickable && randomNumber == 2) {
            spawnGoldenCookie();
        }
        document.getElementById("cookiecounter").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(numOfCookies) + " cookies";
        if (nextedLockedIndex <= buildingArray.length - 1 && numOfCookies  >= .8 * buildingArray[nextedLockedIndex].getPrice()) {
            document.getElementById(buildingNameArray[nextedLockedIndex]+"box").style.display = "block";
            document.getElementById(buildingNameArray[nextedLockedIndex]+"Name").innerText = buildingNameArray[nextedLockedIndex];
            nextedLockedIndex = 1 + nextedLockedIndex;
            if (nextedLockedIndex < buildingArray.length) {
                rightContent = document.getElementById("Right");
                let name = buildingNameArray[nextedLockedIndex];
                let newBuilding = `<div id = "`+name+`box" class = "box"><div id = "`+name+`" class = "buybox" style = "font-size: 40px;" onclick="buyBuilding(`+ name +
                              `, `+name+`Upgrades)"><span id = "`+name+`Name">???</span><div class = "buyNumber" id = "`+name+`Num"></div></div><div id = "`+name+`Price" style = "font-size: 30px;"></div></div>`;
                rightContent.insertAdjacentHTML('beforeend', newBuilding);
                document.getElementById(name + "Price").innerHTML = Intl.NumberFormat("en", {notation: "compact"}).format(buildingArray[nextedLockedIndex].price) + " cookies";
                document.getElementById(buildingNameArray[nextedLockedIndex] + "box").style.opacity = .6;
            }
        }
    }
}

/*
This function "spawns" the golden cookie in a random location on the screen with a fade in and fade out
*/
function spawnGoldenCookie() {
    goldenCookieClickable = true;
    let start = Date.now();
    let windowHeight = innerHeight - 75;
    let windowWidth = innerWidth - 75;
    let xPos = Math.random() * (windowWidth - 20) + 20;
    let yPos = Math.random() * (windowHeight - 20) + 20;
    document.getElementById("goldenCookie").style.left = xPos + "px";
    document.getElementById("goldenCookie").style.top = yPos + "px";
    let op = .1;
    let goldenTimer = setInterval(unfade, 200);
    function unfade() {
        goldenCookie.style.display = "block";
        if (Date.now() - start >= 6000 && op >=1) {
            clearInterval(goldenTimer);
            let timer2 = setInterval(fade, 200);
            op = 1;
            function fade() {
                console.log("fading");
                if (op <= .1) {
                    clearInterval(timer2);
                    goldenCookie.style.display = "none";
                    goldenCookieClickable = false;
                }
                goldenCookie.style.opacity = op;
                op -= op * 0.1;
            }
        }
        goldenCookie.style.opacity = op;
        op += 0.1;
    }
}

/*
A work in progress function to control the jiggle or add movement to the golden cookie as it spawns
*/
function goldenJiggle() {
    let jiggleTimer = setInterval(giggle, 20);
    let startHeight = goldenCookie.offsetHeight;
    let currHeight = startHeight;
    goldenCookie.style.height = currHeight + "px";
    goldenCookie.style.width = currHeight + "px";
    function giggle() {
        if (currHeight > 100 || currHeight > startHeight + 20) {
            let jiggleTimer2 = setInterval(diggle, 40);
            function diggle() {
                if (currHeight < startHeight - 10) {
                    clearInterval(jiggleTimer2);
                }
                goldenCookie.style.width = currHeight - 1 + "px";
                goldenCookie.style.height = currHeight - 1 + "px";
                currHeight--;
            }
        }
        goldenCookie.style.height = currHeight + 2 + "px";
        goldenCookie.style.width = currHeight + 2 + "px";
        currHeight += 2;
    }
}

/*
A work in progress function that will be called on the click of the golden cookie and determine the special effect
*/
function goldenCookieEffect() {
    let randomNumber = Math.round(Math.random() * 20);
    let boughtlist = [];
    for (const obj in boughtStatus) {
        if (boughtStatus[obj]) {
            boughtlist.push(obj);
        }
    }
    if (randomNumber < 10) {
        //cookie frenzie
    } else {
        randomNumber = Math.round(Math.random() * boughtlist.length);
        let name = boughtlist[randomNumber];
        switch(name) {
            case "Cursor":
                break;
            case "Grandma":
                break;
            case "Farm":
                break;
            case "Mine":
                break;
            case "Factory":
                break;
            case "Bank":
                break;
            case "Temple":
                break;
            case "WizardTower":
                break;
            case "Shipment":
                break;
            default:
                break;
        }
    }
}

function countClick() {
    numOfCookies += cookiesPerClick;
    document.getElementById("cookiecounter").innerHTML = numOfCookies + " cookies";
}


/*

The rest of the functions handle the cookie jiggle physics that need to be tweaked

*/

function resetCookie() {    
    inAction = true;
    let pixSize = parseInt(cookie.style.backgroundSize.substring(0,3));
    if (isNaN(pixSize)) {
        alert("ISSUE");
    }
    let id3 = setInterval(shrink2, 5);
    function shrink2() {
        if (pixSize <= 200) {
            clearInterval(id3);
        } 
        else {
            pixSize -= 1;
            cookie.style.height = pixSize + "px";
            cookie.style.backgroundSize = pixSize + "px " + pixSize + "px";
            cookie.style.width = pixSize + "px";
        }
    }
    inAction = false;
}

function jiggle() {
    if(inAction) {
        resetCookie();
    }
    inAction = true;
    let max = 220;
    let pixSizeJ = parseInt(cookie.style.backgroundSize.substring(0,3));
    if (isNaN(pixSizeJ)) {
        pixSizeJ = 200;
    }
    let grow = true;
    let id = setInterval(bounce2, 5);
    function bounce2() {
        console.log(document.getElementById("cookie").style.backgroundSize + " " + "MAX: " + max);
        if (190 > pixSizeJ || max < 210) {
            clearInterval(id);
        }
        else if (pixSizeJ < max && grow) {
            pixSizeJ += 1;
            document.getElementById("cookie").style.height = pixSizeJ + "px";
            document.getElementById("cookie").style.backgroundSize = pixSizeJ + "px " + pixSizeJ + "px";
            document.getElementById("cookie").style.width = pixSizeJ + "px";
        }
        else if (pixSizeJ == max && grow){
            grow = false;
        }
        else if (pixSizeJ > 210 && !grow) {
            pixSizeJ -= 1;
            document.getElementById("cookie").style.height = pixSizeJ + "px";
            document.getElementById("cookie").style.backgroundSize = pixSizeJ + "px " + pixSizeJ + "px";
            document.getElementById("cookie").style.width = pixSizeJ + "px";
        }
        else if(pixSizeJ <= 210 && !grow) {
            if (max == Math.round(.97 * max)) {
                max -= 1;
            } else {
                max = Math.round(.97 * max);
            }
            grow = true;
        }
    }
    inAction = false;
}

function downClick() {
    if (inAction) {
        resetCookie();
    }
    inAction = true;
    let pixSize = 200
    let max = 190;
    id = setInterval(shrink, 10);
    function shrink() {
        if (pixSize == 190) {
            let grow = true;
            clearInterval(id);
            id = setInterval(bounce, 10);
            function bounce() {
                if (max < 190) {
                    clearInterval(id);
                }
                else if (pixSize < max && grow) {
                    pixSize += 1;
                    cookie.style.height = pixSize + "px";
                    cookie.style.backgroundSize = pixSize + "px " + pixSize + "px";
                    cookie.style.width = pixSize + "px";
                }
                else if (pixSize == max && grow){
                    grow = false;
                }
                else if (pixSize > 190 && !grow) {
                    pixSize -= 1;
                    cookie.style.height = pixSize + "px";
                    cookie.style.backgroundSize = pixSize + "px " + pixSize + "px";
                    cookie.style.width = pixSize + "px"
                }
                else if(pixSize <= 190 && !grow) {
                    if (max == Math.round(.98 * max)) {
                        max -= 1;
                    }
                    else {
                        max = Math.round(.98 * max)
                    }
                    grow = true;
                }
            }
        } 
        else {
            pixSize -= 1;
            cookie.style.height = pixSize + "px";
            cookie.style.backgroundSize = pixSize + "px " + pixSize + "px";
            cookie.style.width = pixSize + "px"
        }
    }
    let id5 = setInterval(grow2, 50);
    function grow2() {
        if (pixSize == 200) {
            clearInterval(id5);
        } 
        else {
            pixSize += 1;
            cookie.style.height = pixSize + "px";
            cookie.style.backgroundSize = pixSize + "px " + pixSize + "px";
            cookie.style.width = pixSize + "px";
        }
    }
    inAction = false;
}