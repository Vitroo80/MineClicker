const img=document.querySelector("#zombie")
const count=document.querySelector("#count")
const buyWoodS=document.querySelector("#wooden_Sword")
const buyStoneS=document.querySelector("#stone_Sword")
const buyIronS=document.querySelector("#iron_Sword")
const buyGoldS=document.querySelector("#gold_Sword")
const buyDiamondS=document.querySelector("#diamond_Sword")


let clicks = 0
let woodSwordCost = 10
let woodStock = 0
let stoneSwordCost = 1000
let stoneStock = 0
let ironSwordCost = 100000
let ironStock = 0
let goldSwordCost = 1000000
let goldStock = 0
let diamondSwordCost = 10000000
let diamondStock = 0



function addCount(){
    clicks=clicks+1   
    console.log(clicks)
    count.innerText=clicks
}

// Upgrades

function buyWood(){
  if(clicks >= woodSwordCost){
    clicks = clicks - woodSwordCost
    woodStock = woodStock+1
    woodSwordCost = Math.round(woodSwordCost*1.15)
    console.log(woodStock)

  }
}

function buyStone(){
  if(clicks >= stoneSwordCost){
    clicks = clicks - stoneSwordCost
    stoneStock = stoneStock+1
    stoneSwordCost = Math.round(stoneSwordCost*1.15)
    console.log(stoneStock)

  }
}

function buyIron(){
  if(clicks >= ironSwordCost){
    clicks = clicks - ironSwordCost
    ironStock = ironStock+1
    ironSwordCost = Math.round(ironSwordCost*1.15)
    console.log(ironStock)

  }
}

function buyGold(){
  if(clicks >= goldSwordCost){
    clicks = clicks - goldSwordCost
    goldStock = goldStock+1
    goldSwordCost = Math.round(goldSwordCost*1.15)
    console.log(goldStock)

  }
}

function buyDiamond(){
  if(clicks >= diamondSwordCost){
    clicks = clicks - diamondSwordCost
    diamondStock = diamondStock+1
    diamondSwordCost = Math.round(diamondSwordCost*1.15)
    console.log(diamondStock)

  }
}

img.addEventListener("click",()=> addCount())
buyWoodS.addEventListener("click",()=> buyWood())
buyStoneS.addEventListener("click",()=> buyStone())
buyIronS.addEventListener("click",()=> buyIron())
buyGoldS.addEventListener("click",()=> buyGold())
buyDiamondS.addEventListener("click",()=> buyDiamond())
