/*
//CHALENGE#3
//ME
const D1=96;
const D2=108;
const D3=89;
const K1=88;
const K2=91;
const K3=110;
let dolphinsAverage=((D1+D2+D3)/3).toPrecision(4);
let koalasAverage=((K1+K2+K3)/3).toPrecision(4);
console.log(dolphinsAverage+' '+koalasAverage);
if (dolphinsAverage>koalasAverage){
    console.log("Dolphins is winner");
}else if (koalasAverage>dolphinsAverage){
    console.log("Koalas is winner");
}else{
    console.log('game is draw');
}

//JONAS
const scoreDolphins=(96+108+89)/3;
const scoreKoalas=(88+91+110)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas){
    console.log('Dolphins win the trophy');
}else if(scoreKoalas>scoreDolphins){
    console.log('Koalas win the trophy');
}else if(scoreDolphins===scoreKoalas){
    console.log('both win the trophy')
}

//BOUNS 1
const scoreDolphins=(97+112+101)/3;
const scoreKoalas=(109+95+123)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
    console.log('Dolphins win the trophy');
}else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
    console.log('Koalas win the trophy');
}else if(scoreDolphins===scoreKoalas){
    console.log('both win the trophy')
}

//BOUNS 2
const scoreDolphins=(97+112+101)/3;
const scoreKoalas=(109+95+106)/3;
console.log(scoreDolphins,scoreKoalas);
if(scoreDolphins>scoreKoalas && scoreDolphins>=100){
    console.log('Dolphins win the trophy');
}else if(scoreKoalas>scoreDolphins && scoreKoalas>=100){
    console.log('Koalas win the trophy');
}else if(scoreDolphins===scoreKoalas && scoreDolphins>=100 && scoreKoalas>=100){
    console.log('both win the trophy')
}else{
    console.log('no team win the trophy')
}

//CHALENGE#4
//
const bill=275;
console.log(`the bill was ${bill} , the tip was ${tip=bill>=50 && bill<=300 ? 0.15*bill : 0.2*bill} , and the total value ${bill+tip}`);

//
const bill=40;
const tip= bill>=50 && bill<=300 ? 0.15*bill : 0.20*bill;
console.log(`the bill was ${bill} , the tip was ${tip} , and the total value ${bill+tip}`);

//
const bill=340;
let tip;
if (bill>=50 && bill<=300){
   tip=0.15*bill;
}else{
   tip=0.20*bill;
}
console.log(`the bill was ${bill} , the tip was ${tip} , and the total value ${bill+tip}`);
*/
//
