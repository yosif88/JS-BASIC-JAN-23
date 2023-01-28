function fishLand(args){
  let priceMackerel = Number(args[0]);
  let priceSprinkle = Number(args[1]);
  let priceBeltedBonito = Number(args[2]);
  let priceSafrid = Number(args[3]);
  let priceMussels = Number(args[4]);

  let beltedBonito = priceMackerel + priceMackerel * 0.60;
  let sumBeltedBonito = priceBeltedBonito * beltedBonito;
  
  let safrid = priceSprinkle + priceSprinkle * 0.8;
  let sumSafrid = priceSafrid * safrid;
  let sumMussels = priceMussels * 7.5;
  
  let sum =  sumBeltedBonito + sumSafrid + sumMussels;
  console.log(sum.toFixed(2));
}

fishLand(["6.90","4.20","1.5","2.5","1"])