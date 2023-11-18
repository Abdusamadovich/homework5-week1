-----------------------------------Mardonov   Abduvosid---------------------------------------

// function chetnie(x){
//     var cnt = 0;
//     for (let i = x; i>=1; i=Math.floor(i/10)){
//         if (Math.floor(i%10%2==0)) cnt = cnt + 1;
        
//     }
//     return(cnt);
// }
// console.log(chetnie(123456))


// let f = function boom(x){
//     for (let i = x; i>=1; i = i/10){
//         if (i%10==7) console.log("boom");
//     }

// }
// console.log(f(1947))



// function cube(x){
//     var cubik = 0;
//     for ( let i = 1; i<=x; i++){
//         cubik = cubik + i**3;
//     }
//     return(cubik);
// }
// console.log(cube(3))


// function palindrom(x){
//     let cnt ="";
//     for(let i = x; i>0; i = Math.floor(i/10)){
//         cnt = cnt + i%10;
//     }
//     if (cnt == x) return true;
//     }
//     console.log(palindrom(525))


// function maximal(x){
//     let maxx = -999;
//     for ( let i = x; i>=1; i--){
        
//         if (i%10>maxx)
//         maxx = i%10;
//     }
//     return(maxx);
// }
// console.log(maximal(1945))


// function fibonachi(){
//     let a=1;
//     let b=0;
//     for(let i = b; i<=10; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//         console.log(fibonachi(b));
//         return " "
//     }
// }
// console.log(fibonachi(10));


// function pohojie(x){
//     for ( let i = x; i>0; i = Math.floor(i/10) ){
        
//         if ((Math.floor(i/10%10)) == i%10) return true;
//         else return false;
//     }
    
// }
// console.log(pohojie(123445));


function sum (x){
    var a = 0;
    for (let i = x; i>=0; i= Math.floor(i/10)){
        if (i%10%2==0) a = a + i%10;

    }
    return(a);
}    
console.log(sum(12345));
          