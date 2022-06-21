//Currency
var coins = 0

//Shop items
var hookCost = 15
var hooks = 0

var wormCost = 5000
var worms = 0

var cheeseCost = 10000
var cheese = 0

var breadCost = 100000
var bread = 0

var flyCost = 1000000
var flies = 0

//Msic
var coinsPerSecond
var coinsPerClick = 1

//Upgrades
var rodCost = 200
var rodLevel = 1

var reelCost = 2000
var reelLevel = 1

var boatCost = 200000
var boatLevel = 1

//Diamonds
var Diamonds = 0
var diamondCost = 1000000000

//Gold
var Gold = 0;
var goldCost = 5000000

function addToCoins(ammount){
    coins = coins + ammount
    document.getElementById("coins").innerHTML = coins
}

function buyHook(){
    if(coins >= hookCost){
        coins = coins - hookCost
        hooks = hooks + 1
        hookCost = Math.round(hookCost * 5)

        document.getElementById("coins").innerHTML = coins
        document.getElementById("hookcost").innerHTML = hookCost
        document.getElementById("hooks").innerHTML = hooks
    }

    setInterval(function(){
        coins = coins + hooks
        document.getElementById("coins").innerHTML = coins
    }, 1000)
    
}

function buyWorms(){
    if(coins >= wormCost){
        coins = coins - wormCost
        worms = worms + 1
        wormCost = Math.round(wormCost * 1.20)

        document.getElementById("worms").innerHTML = worms
        document.getElementById("wormcost").innerHTML = wormCost
        document.getElementById("coins").innerHTML = coins
    }

    setInterval (function(){
        coins = coins + hooks
        coins = coins + worms * 10
        document.getElementById("coins").innerHTML = coins
        document.getElementById("worms").innerHTML = worms
    }, 1000)

}

function buyCheese(){
    if(coins >= cheeseCost){
        coins = coins - cheeseCost
        cheese = cheese + 1
        cheeseCost = Math.round(cheeseCost * 1.20)

        document.getElementById("cheese").innerHTML = cheese
        document.getElementById("cheesecost").innerHTML = cheeseCost
        document.getElementById("coins").innerHTML = coins
    }

    setInterval (function(){
        coins = coins + cheese
        coins = coins + cheese * 20
        document.getElementById("coins").innerHTML = coins
        document.getElementById("cheese").innerHTML = cheese
    }, 1000)
}

function buyBread(){
    if(coins >= breadCost){
        coins = coins - breadCost
        bread = bread + 1
        breadCost = Math.round(breadCost * 1.20)

        document.getElementById("bread").innerHTML = bread
        document.getElementById("breadcost").innerHTML = breadCost
        document.getElementById("coins").innerHTML = coins
    }
    
    setInterval (function(){
        coins = coins + bread
        coins = coins + bread * 200
        document.getElementById("coins").innerHTML = coins
        document.getElementById("bread").innerHTML = bread
    }, 1000)
}

function buyFlies(){
    if(coins >= flyCost){
        coins = coins - flyCost
        flies = flies + 1
        wormCost = Math.round(flyCost * 1.20)

        document.getElementById("flies").innerHTML = flies
        document.getElementById("flycost").innerHTML = flyCost
        document.getElementById("coins").innerHTML = coins
    }
    setInterval (function(){
        coins = coins + flies
        coins = coins + flies * 500
        document.getElementById("coins").innerHTML = coins
        document.getElementById("flies").innerHTML = flies
    }, 1000)
}

function upgradeRod(){
    if(coins >= rodCost){
        coins = coins - rodCost
        rodLevel = rodLevel + 1
        coinsPerClick = coinsPerClick + 1
        rodCost = Math.round(rodCost * 1.20)

        document.getElementById("rodcost").innerHTML = rodCost
        document.getElementById("coins").innerHTML = coins
        document.getElementById("rods").innerHTML = rodLevel
    }
}

function upgradeReel(){
    if(coins >= reelCost){
        coins = coins - reelCost
        reelLevel = reelLevel + 1
        coinsPerClick = coinsPerClick + 4
        reelCost = Math.round(reelCost * 1.20)

        document.getElementById("reelcost").innerHTML = reelCost
        document.getElementById("coins").innerHTML = coins
        document.getElementById("reels").innerHTML = reelLevel
    }
}

function upgradeBoat(){
    if(coins >= boatCost){
        coins = coins - boatCost
        boatLevel = boatLevel + 1
        coinsPerClick = coinsPerClick + 20
        boatCost = Math.round(boatCost * 1.20)

        document.getElementById("boatcost").innerHTML = boatCost
        document.getElementById("coins").innerHTML = coins
        document.getElementById("boats").innerHTML = boatLevel
    }
}

function buyDiamonds(){
    document.getElementById("diamonds").innerHTML = Diamonds

    if(coins >= diamondCost){
        coins = coins - diamondCost
        Diamonds = Diamonds + 1

        document.getElementById("diamondcost").innerHTML = diamondCost
        document.getElementById("diamonds").innerHTML = Diamonds
        document.getElementById("coins").innerHTML = coins
    }

}

function buyGold(){
    document.getElementById("gold").innerHTML = Gold

    if(coins >= goldCost){
        coins = coins - goldCost
        Gold = Gold + 1

        document.getElementById("goldcost").innerHTML = goldCost
        document.getElementById("gold").innerHTML = Gold
        document.getElementById("coins").innerHTML = coins
    }

}