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
const stage=document.querySelector("#boss")
const damage=document.querySelector("#walter")

let clicks = 0
let woodSwordCost = 50
let woodStock = 0
let stoneSwordCost = 200  
let stoneStock = 0
let ironSwordCost = 600
let ironStock = 0
let goldSwordCost = 1500
let goldStock = 0
let diamondSwordCost = 2500
let diamondStock = 0
let netheriteSwordCost = 20000
let netheriteStock = 0
let woodCursorCost = 4000
let woodCursorStock = 0
let stoneCursorCost = 10000
let stoneCursorStock = 0
let ironCursorCost = 25000
let ironCursorStock = 0
let goldCursorCost = 40000
let goldCursorStock = 0
let diamondCursorCost = 70000
let diamondCursorStock = 0
let netheriteCursorCost = 110000
let netheriteCursorStock = 0
let dps = 0
let image = document.querySelector("#zombie") 
let nivel = 1
let era = 1
let dpcursor=0


  // contador de diamante
function addCount(){
    clicks=clicks+1  
    // if(woodCursorStock>0){
    //   clicks=clicks+woodCursorStock

    // } 
    // if(stoneCursorStock>0){
    //   clicks=clicks+stoneCursorStock*3
    // }
    // if(ironCursorStock>0){
    //   clicks=clicks+ironCursorStock*8
    // }
    // if(goldCursorStock>0){
    //   clicks=clicks+goldCursorStock*12
    // }
    // if(diamondCursorStock>0){
    //   clicks=clicks+diamondCursorStock*23
    // }
    // if(netheriteCursorStock>0){
    //   clicks=clicks+netheriteCursorStock*35
    // }
    count.innerText=clicks
    
    // console.log(clicks)
}

function tuaMae(){
  if(woodCursorStock>0){
    damage.innerText=dpcursor
    dpcursor=woodCursorStock

  }
}


// Swords

function buyWood(){
  if(clicks >= woodSwordCost){
    clicks = clicks - woodSwordCost
    woodStock += 1
    dps=dps+1
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
    dps=dps+2
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
    dps=dps+4
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
    dps=dps+12
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
    dps=dps+20
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
    dps=dps+100
    dpscounter.innerText=dps
    // console.log(netheriteStock)

  }
}

// Cursor Upgrade

function buyWoodCursor(){
  if(clicks >= woodCursorCost){
    clicks = clicks - woodCursorCost
    woodCursorStock = woodCursorStock+1
    woodCursorCost = Math.round(woodCursorCost*1.15)
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
    stoneCursorCost = Math.round(stoneCursorCost*1.15)
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
    ironCursorCost = Math.round(ironCursorCost*1.15)
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
    goldCursorCost = Math.round(goldCursorCost*1.15)
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
    diamondCursorCost = Math.round(diamondCursorCost*1.15)
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
    netheriteCursorCost = Math.round(netheriteCursorCost*1.15)
    count.innerText=clicks-netheriteCursorStock
    netheriteCursorinv.innerText= netheriteCursorStock
    netheriteCursorPrice.innerText= netheriteCursorCost
    console.log(netheriteCursorStock)

  }
}

// Inventory

setInterval (function(){
  clicks = clicks+woodStock
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+stoneStock*2
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+ironStock*4
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+goldStock*12
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+diamondStock*20
  count.innerText=clicks
},1000)

setInterval (function(){
  clicks = clicks+netheriteStock*100
  count.innerText=clicks
},1000)

// stages

function incr() {
  let v1=document.getElementById('hpbar').value;
  let sum = 1
  if (woodCursorStock>0){  
    sum=woodCursorStock*1
    
  }
  if (stoneCursorStock>0){  
    sum=stoneCursorStock*3
  }
  if (ironCursorStock>0){  
    sum=ironCursorStock*8
  }
  if (goldCursorStock>0){  
    sum=goldCursorStock*12
  }
  if (diamondCursorStock>0){  
    sum=diamondCursorStock*23
  }
  if (netheriteCursorStock>0){  
    sum=netheriteCursorStock*35
  }
  document.getElementById("hpbar").value= v1 - sum;

  if(v1<=0 && nivel==1){
    image.src="./Images/Zombie.png"
    document.getElementById("hpbar").max=100*era
    document.getElementById("hpbar").value=100*era
    clicks=clicks+15*era
    v1=100*era
    nivel=2
    stage.innerText= "2/5"
  }
  if(v1<=0 && nivel==2){
    image.src="./Images/Skeleton.png"
    document.getElementById("hpbar").max=100*era
    document.getElementById("hpbar").value=100*era
    clicks=clicks+25*era
    v1=100*era
    nivel=3
    stage.innerText= "3/5"
  }
  if(v1<=0 && nivel==3){
    image.src="./Images/Spider.png"
    document.getElementById("hpbar").max=150*era
    document.getElementById("hpbar").value=150*era
    clicks=clicks+50*era
    v1=200*era
    nivel=4
    stage.innerText= "4/5"
  }
  if(v1<=0 && nivel==4){
    image.src="./Images/Skeleton_Horseman.png"
    document.getElementById("hpbar").max=500*era
    document.getElementById("hpbar").value=500*era
    clicks=clicks+250*era
    v1=500*era
    nivel=5
    stage.innerText= "5/5 BOSS"
  }
  if(v1<=0 && nivel==5){
    image.src="./Images/Creeper.png"
    document.getElementById("hpbar").max=200*era
    document.getElementById("hpbar").value=200*era
    clicks=clicks+75*era
    v1=200*era
    nivel=6
    stage.innerText= "1/6"
  }
  if(v1<=0 && nivel==6){
    image.src="./Images/Slime.png"
    document.getElementById("hpbar").max=250*era
    document.getElementById("hpbar").value=250*era
    clicks=clicks+100*era
    v1=250*era
    nivel=7
    stage.innerText= "2/6"
  }
  if(v1<=0 && nivel==7){
    image.src="./Images/Enderman.png"
    document.getElementById("hpbar").max=275*era
    document.getElementById("hpbar").value=275*era
    clicks=clicks+125*era
    v1=275*era
    nivel=8
    stage.innerText= "3/6"
  }
  if(v1<=0 && nivel==8){
    image.src="./Images/Drowned.png"
    document.getElementById("hpbar").max=325*era
    document.getElementById("hpbar").value=325*era
    clicks=clicks+175*era
    v1=325*era
    nivel=9
    stage.innerText= "4/6"
  }
  if(v1<=0 && nivel==9){
    image.src="./Images/Guardian.png"
    document.getElementById("hpbar").max=375*era
    document.getElementById("hpbar").value=375*era
    clicks=clicks+225*era
    v1=375*era
    nivel=10
    stage.innerText= "5/6"
  }
  if(v1<=0 && nivel==10){
    image.src="./Images/Elder_Guardian.png"
    document.getElementById("hpbar").max=750*era
    document.getElementById("hpbar").value=750*era
    clicks=clicks+500*era
    v1=750*era
    nivel=11
    stage.innerText= "6/6 BOSS"
  }
  if(v1<=0 && nivel==11){
    image.src="./Images/Pillager.png"
    document.getElementById("hpbar").max=400*era
    document.getElementById("hpbar").value=400*era
    clicks=clicks+275*era
    v1=400*era
    nivel=12
    stage.innerText= "1/5"
  }
  if(v1<=0 && nivel==12){
    image.src="./Images/Vex.png"
    document.getElementById("hpbar").max=425*era
    document.getElementById("hpbar").value=425*era
    clicks=clicks+300*era
    v1=425*era
    nivel=13
    stage.innerText= "2/5"
  }
  if(v1<=0 && nivel==13){
    image.src="./Images/Witch.png"
    document.getElementById("hpbar").max=450*era
    document.getElementById("hpbar").value=450*era
    clicks=clicks+350*era
    v1=450*era
    nivel=14
    stage.innerText= "3/5"
  }
  if(v1<=0 && nivel==14){
    image.src="./Images/Evoker.png"
    document.getElementById("hpbar").max=500*era
    document.getElementById("hpbar").value=500*era
    clicks=clicks+400*era
    v1=500*era
    nivel=15
    stage.innerText= "4/5"
  }
  if(v1<=0 && nivel==15){
    image.src="./Images/Devastador.png"
    document.getElementById("hpbar").max=1000*era
    document.getElementById("hpbar").value=1000*era
    clicks=clicks+1000*era
    v1=1000*era
    nivel=16
    stage.innerText= "5/5 BOSS"
  }
  if(v1<=0 && nivel==16){
    image.src="./Images/Zombified_Piglin.png"
    document.getElementById("hpbar").max=600*era
    document.getElementById("hpbar").value=600*era
    clicks=clicks+500*era
    v1=600*era
    nivel=17
    stage.innerText= "1/7"
  }
  if(v1<=0 && nivel==17){
    image.src="./Images/Hoglin.png"
    document.getElementById("hpbar").max=650*era
    document.getElementById("hpbar").value=650*era
    clicks=clicks+600*era
    v1=650*era
    nivel=18
    stage.innerText= "2/7"
  }
  if(v1<=0 && nivel==18){
    image.src="./Images/Blaze.png"
    document.getElementById("hpbar").max=700*era
    document.getElementById("hpbar").value=700*era
    clicks=clicks+700*era
    v1=700*era
    nivel=19
    stage.innerText= "3/7"
  }
  if(v1<=0 && nivel==19){
    image.src="./Images/Magma_Cube.png"
    document.getElementById("hpbar").max=800*era
    document.getElementById("hpbar").value=800*era
    clicks=clicks+800*era
    v1=800*era
    nivel=20
    stage.innerText= "4/7"
  }
  if(v1<=0 && nivel==20){
    image.src="./Images/Ghast.png"
    document.getElementById("hpbar").max=900*era
    document.getElementById("hpbar").value=900*era
    clicks=clicks+900*era
    v1=900*era
    nivel=21
    stage.innerText= "5/7"
  }
  if(v1<=0 && nivel==21){
    image.src="./Images/Piglin_Brute.png"
    document.getElementById("hpbar").max=1000*era
    document.getElementById("hpbar").value=1000*era
    clicks=clicks+1000*era
    v1=1000*era
    nivel=22
    stage.innerText= "6/7"
  }
  if(v1<=0 && nivel==22){
    image.src="./Images/Ender_Dragon.png"
    document.getElementById("hpbar").max=3000*era
    document.getElementById("hpbar").value=3000*era
    clicks=clicks+5000*era
    v1=5000*era
    nivel=23
    stage.innerText= "7/7 BOSS"
  }
  if(v1<=0 && nivel==23){
    image.src="./Images/Shulker.png"
    document.getElementById("hpbar").max=1250*era
    document.getElementById("hpbar").value=1250*era
    clicks=clicks+1250*era
    v1=1250*era
    nivel=24
    stage.innerText= "1/5"
  }
  if(v1<=0 && nivel==24){
    image.src="./Images/Wither_Skeleton.png"
    document.getElementById("hpbar").max=1500*era
    document.getElementById("hpbar").value=1500*era
    clicks=clicks+1500*era
    v1=1500*era
    nivel=25
    stage.innerText= "2/5"
  }
  if(v1<=0 && nivel==25){
    image.src="./Images/Wither.png"
    document.getElementById("hpbar").max=5000*era
    document.getElementById("hpbar").value=5000*era
    clicks=clicks+5000*era
    v1=5000*era
    nivel=26
    stage.innerText= "3/5 BOSS"
  }
  if(v1<=0 && nivel==26){
    image.src="./Images/Wither_Skeleton.png"
    document.getElementById("hpbar").max=10000*era
    document.getElementById("hpbar").value=10000*era
    clicks=clicks+10000*era
    v1=10000*era
    nivel=27
    stage.innerText= "4/5 BOSS"
  }
  if(v1<=0 && nivel==27){
    image.src="./Images/herobrine.png"
    document.getElementById("hpbar").max=50000*era
    document.getElementById("hpbar").value=50000*era
    clicks=clicks+50000*era
    v1=50000*era
    era=era+1
    nivel=1
    stage.innerText= "5/5 FINAL BOSS"
  }
  }



img.addEventListener("click",()=> addCount())
buyWoodS.addEventListener("click",()=> buyWood())
buyStoneS.addEventListener("click",()=> buyStone())
buyIronS.addEventListener("click",()=> buyIron())
buyGoldS.addEventListener("click",()=> buyGold())
buyDiamondS.addEventListener("click",()=> buyDiamond())
buyNetheriteS.addEventListener("click",()=> buyNetherite())

