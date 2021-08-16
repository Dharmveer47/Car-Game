// const rootBody = document.querySelector('.rootbody');
// const btn = document.getElementById('butt');

// btn.addEventListener('click', () => {
//     rootBody.innerHTML = '';
//     runGame();
// });

// function runGame() {
//     const consumptionKML = 2,
//     minStep = 0,
//     maxStep = 6,
//     initialPetrol = 50,
//     pumpsCount = 6,
//     refillAmount = 30,
//     startLocation = 0,
//     endLocation = 100;

//     let position = startLocation,
//         petrol = initialPetrol;

//     longStr(`Game started \nPetrol pumps generated at: ${rand100()}`);

    
// }
// //Genrated 0 to 100 (6 random number)
// function rand100(){
//   var arr=[];
//   for(let i=0; i<6; i++){
//     const x = Math.floor(Math.random() * 100) + 1;
//     arr.push(x)
//   }
//   return arr.sort((a,b)=>{return a-b});  
// }

// // Genrate 1 to 6 random Number

// function rand6(){
//     var arr=[];
//   for(let i=0; i<6; i++){
//     const x = Math.floor(Math.random() * 6) + 1;
//     arr.push(x)
//   }
//   return arr.sort((a,b)=>{return a-b});  
// }

// // show on windo
// function longStr(str) {
//     rootBody.innerHTML += '\n' + str;
// }

// console.log(rand100()[0])








function foo() {

    if( typeof foo.counter == 'undefined' ) {
        foo.counter = 0;
    }
    foo.counter++;
    document.write(foo.counter+"<br />");
}
foo();
foo();