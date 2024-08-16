/*let arr = [30, 89, 84,];

let superHeros = ["ironman", "captian", "hulk", "blackwidwow", "thor"];
// for (let i=0 ; i<=superHeros.length  ; i++){
//     console.log(superHeros[i]);
// }///
// for of
for (let hero of superHeros){
    console.log(hero);
}*/
let item = [250, 645, 300, 900, 50];
let idx = 0;
for( let val of item ){
   console.log(`value at index ${idx} = ${val}`);
  let offer = val/10;
   item[idx] = item[idx] - offer;
   console.log(`value after the offer = ${item[idx]}`);
   idx++;
}
