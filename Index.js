const img=document.querySelector("#zombie")
const count=document.querySelector("#count")
const buyWoodS=document.querySelector("#wooden_Sword")
const woodPrice=document.querySelector("#woodPrice")
const woodinv=document.querySelector("#woodInv")
const buyStoneS=document.querySelector("#stone_Sword")
const stonePrice=document.querySelector("#stonePrice")
const stoneinv=document.querySelector("#stoneInv")
const buyIronS=document.querySelector("#iron_Sword")
const ironPrice=document.querySelector("#ironPrice")
const ironinv=document.querySelector("#ironInv")
const buyGoldS=document.querySelector("#gold_Sword")
const goldPrice=document.querySelector("#goldPrice")
const goldinv=document.querySelector("#goldInv")
const buyDiamondS=document.querySelector("#diamond_Sword")
const diamondPrice=document.querySelector("#diamondPrice")
const diamondinv=document.querySelector("#diamondInv")
const buyNetheriteS=document.querySelector("#netherite_Sword")
const netheritePrice=document.querySelector("#netheritePrice")
const netheriteinv=document.querySelector("#netheriteInv")
const buyWoodC=document.querySelector("#woodCursor")
const woodCursorinv=document.querySelector("#woodCursorInv")
const woodCursorPrice=document.querySelector("#woodCursorPrice")
const buystoneC=document.querySelector("#stoneCursor")
const stoneCursorinv=document.querySelector("#stoneCursorInv")
const stoneCursorPrice=document.querySelector("#stoneCursorPrice")
const buyironC=document.querySelector("#ironCursor")
const ironCursorinv=document.querySelector("#ironCursorInv")
const ironCursorPrice=document.querySelector("#ironCursorPrice")
const buygoldC=document.querySelector("#goldCursor")
const goldCursorinv=document.querySelector("#goldCursorInv")
const goldCursorPrice=document.querySelector("#goldCursorPrice")
const buydiamondC=document.querySelector("#diamondCursor")
const diamondCursorinv=document.querySelector("#diamondCursorInv")
const diamondCursorPrice=document.querySelector("#diamondCursorPrice")
const buynetheriteC=document.querySelector("#netheriteCursor")
const netheriteCursorinv=document.querySelector("#netheriteCursorInv")
const netheriteCursorPrice=document.querySelector("#netheriteCursorPrice")
const dpscounter=document.querySelector("#dpscount")


let clicks = 0
let woodSwordCost = 10
let woodStock = 0
let stoneSwordCost = 100
let stoneStock = 0
let ironSwordCost = 1000
let ironStock = 0
let goldSwordCost = 10000
let goldStock = 0
let diamondSwordCost = 100000
let diamondStock = 0
let netheriteSwordCost = 10000000
let netheriteStock = 0
let woodCursorCost = 150
let woodCursorStock = 0
let stoneCursorCost = 1500
let stoneCursorStock = 0
let ironCursorCost = 150000
let ironCursorStock = 0
let goldCursorCost = 1500000
let goldCursorStock = 0
let diamondCursorCost = 15000000
let diamondCursorStock = 0
let netheriteCursorCost = 150000000
let netheriteCursorStock = 0
let dps =0

// function dpscount(){
//   dps = woodStock+stoneStock*10+ironStock*100+goldStock*1000+diamondStock+10000+netheriteStock*100000
//   console.log(dps)
// }

function addCount(){
    clicks=clicks+1  
    if(woodCursorStock>0){
      clicks=clicks+woodCursorStock*5
    } 
    if(stoneCursorStock>0){
      clicks=clicks+stoneCursorStock*50
    }
    if(ironCursorStock>0){
      clicks=clicks+ironCursorStock*500
    }
    if(goldCursorStock>0){
      clicks=clicks+goldCursorStock*5000
    }
    if(diamondCursorStock>0){
      clicks=clicks+diamondCursorStock*50000
    }
    if(netheriteCursorStock>0){
      clicks=clicks+netheriteCursorStock*500000
    }
    count.innerText=clicks
    // console.log(clicks)
}

// Swords

function buyWood(){
  if(clicks >= woodSwordCost){
    clicks = clicks - woodSwordCost
    woodStock += 1
    dps=dps+10
    woodSwordCost = Math.round(woodSwordCost*1.15)
    dpscounter.innerText=dps
    console.log(dps)
    count.innerText=clicks-woodStock
    woodinv.innerText= woodStock
    woodPrice.innerText= woodSwordCost
    // console.log(woodStock)

  }
}

function buyStone(){
  if(clicks >= stoneSwordCost){
    clicks = clicks - stoneSwordCost
    stoneStock = stoneStock+1
    stoneSwordCost = Math.round(stoneSwordCost*1.15)
    count.innerText=clicks-stoneStock
    stoneinv.innerText= stoneStock
    stonePrice.innerText= stoneSwordCost
    dps=dps+100
    dpscounter.innerText=dps
    // console.log(stoneStock)


  }
}

function buyIron(){
  if(clicks >= ironSwordCost){
    clicks = clicks - ironSwordCost
    ironStock = ironStock+1
    ironSwordCost = Math.round(ironSwordCost*1.15)
    count.innerText=clicks-woodStock
    ironinv.innerText= ironStock
    ironPrice.innerText= ironSwordCost
    dps=dps+1000
    dpscounter.innerText=dps
    // console.log(ironStock)

  }
}

function buyGold(){
  if(clicks >= goldSwordCost){
    clicks = clicks - goldSwordCost
    goldStock = goldStock+1
    goldSwordCost = Math.round(goldSwordCost*1.15)
    count.innerText=clicks-woodStock
    goldinv.innerText= goldStock
    goldPrice.innerText= goldSwordCost
    dps=dps+10000
    dpscounter.innerText=dps
    // console.log(goldStock)

  }
}

function buyDiamond(){
  if(clicks >= diamondSwordCost){
    clicks = clicks - diamondSwordCost
    diamondStock = diamondStock+1
    diamondSwordCost = Math.round(diamondSwordCost*1.15)
    count.innerText=clicks-woodStock
    diamondinv.innerText= diamondStock
    diamondPrice.innerText= diamondSwordCost
    dps=dps+100000
    dpscounter.innerText=dps
    // console.log(diamondStock)

  }
}

function buyNetherite(){
  if(clicks >= netheriteSwordCost){
    clicks = clicks - netheriteSwordCost
    netheriteStock = netheriteStock+1
    netheriteSwordCost = Math.round(netheriteSwordCost*1.15)
    count.innerText=clicks-netheriteStock
    netheriteinv.innerText= netheriteStock
    netheritePrice.innerText= netheriteSwordCost
    dps=dps+1000000
    dpscounter.innerText=dps
    // console.log(netheriteStock)

  }
}

// Cursor Upgrade

function buyWoodCursor(){
  if(clicks >= woodCursorCost){
    clicks = clicks - woodCursorCost
    woodCursorStock = woodCursorStock+1
    woodCursorCost = Math.round(woodCursorCost*3)
    count.innerText=clicks-woodCursorStock
    woodCursorinv.innerText= woodCursorStock
    woodCursorPrice.innerText= woodCursorCost
    console.log(woodCursorStock)

  }
}

function buyStoneCursor(){
  if(clicks >= stoneCursorCost){
    clicks = clicks - stoneCursorCost
    stoneCursorStock = stoneCursorStock+1
    stoneCursorCost = Math.round(stoneCursorCost*3)
    count.innerText=clicks-stoneCursorStock
    stoneCursorinv.innerText= stoneCursorStock
    stoneCursorPrice.innerText= stoneCursorCost
    console.log(stoneCursorStock)

  }
}

function buyIronCursor(){
  if(clicks >= ironCursorCost){
    clicks = clicks - ironCursorCost
    ironCursorStock = ironCursorStock+1
    ironCursorCost = Math.round(ironCursorCost*3)
    count.innerText=clicks-ironCursorStock
    ironCursorinv.innerText= ironCursorStock
    ironCursorPrice.innerText= ironCursorCost
    console.log(ironCursorStock)

  }
}

function buyGoldCursor(){
  if(clicks >= goldCursorCost){
    clicks = clicks - goldCursorCost
    goldCursorStock = goldCursorStock+1
    goldCursorCost = Math.round(goldCursorCost*3)
    count.innerText=clicks-goldCursorStock
    goldCursorinv.innerText= goldCursorStock
    goldCursorPrice.innerText= goldCursorCost
    console.log(goldCursorStock)

  }
}

function buyDiamondCursor(){
  if(clicks >= diamondCursorCost){
    clicks = clicks - diamondCursorCost
    diamondCursorStock = diamondCursorStock+1
    diamondCursorCost = Math.round(diamondCursorCost*3)
    count.innerText=clicks-diamondCursorStock
    diamondCursorinv.innerText= diamondCursorStock
    diamondCursorPrice.innerText= diamondCursorCost
    console.log(diamondCursorStock)

  }
}

function buyNetheriteCursor(){
  if(clicks >= netheriteCursorCost){
    clicks = clicks - netheriteCursorCost
    netheriteCursorStock = netheriteCursorStock+1
    netheriteCursorCost = Math.round(netheriteCursorCost*3)
    count.innerText=clicks-netheriteCursorStock
    netheriteCursorinv.innerText= netheriteCursorStock
    netheriteCursorPrice.innerText= netheriteCursorCost
    console.log(netheriteCursorStock)

  }
}

// Inventory

setInterval (function(){
  clicks = clicks+woodStock*10
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+stoneStock*100
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+ironStock*1000
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+goldStock*10000
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+diamondStock*100000
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+netheriteStock*1000000
  count.innerText=clicks
},1000)





img.addEventListener("click",()=> addCount())
buyWoodS.addEventListener("click",()=> buyWood())
buyStoneS.addEventListener("click",()=> buyStone())
buyIronS.addEventListener("click",()=> buyIron())
buyGoldS.addEventListener("click",()=> buyGold())
buyDiamondS.addEventListener("click",()=> buyDiamond())
buyNetheriteS.addEventListener("click",()=> buyNetherite())






//click  upgrades dps do mvp
// setInterval (function(){clicks = clicks+woodStock*5},1000) 