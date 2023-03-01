//ada lima macam bentuk perulangan di javascript, secara umum, perulangan dibagi menjadi 2;
//yaitu counted loop and uncounted loop
//perbedaanya;
//1. counted loop merupakan perulangan yang jelas dan tentu banyak perulanganya
//2. uncounted loop merupakan perulangan yang tidak jelas berapa kali harus mengulang.

//contoh;

// function Pushup(){
//     //code
// }




// for(i=0; i<=10; i++){
// Pushup();
// }


//  let bosan;
// //contoh uncounted loop
// while (bosan==false){
//     Pushup();
// }

//macam macam perulangan counted loop:
//1.perulangan  For
//2.perulangan foreach
//3. perulangan Repeat

//macam macam perulangan uncounted loop:
//1. perulangan while
//2. perulangan do/while

//Perulangan for
// Perulangan for merupakan perulangan yang termasuk dalam counted loop,karena sudah jelas beberapa kali akan mengulang sebuah perulangan.
//contoh
// for(let i=0; i<10; i++){
//     document.write(`<p>perulangan ini berulang ${i} kali </p>`);
// }

//perulangan while
// perulangan while merupakan perulangan yang termasuk kedalam perulangan uncounted loop. namun perulangan while juga dapat masuk atau menjadi perulangan yang counted loop dengan memberikan sebuah counter didalamnya

//contoh
// let ulang = confirm("apakah ingin mengulang");
// let counter =0;
  
// while (ulang){
//     let jawab=confirm("apakah anda mau mengulang?");
//     counter++;
//     if (jawab == false){
//         ulang == false;
//     }
// }
// document.write("perulangan sudah dilakukan sebanyak" + counter + "kali");

//perulangan do/while
//perulangan do/while sama seperti perulangan while.

//perbedeanya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while

// do{
//     //code
// }while(kondisi);

//contoh
// var ulang = confirm("apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("apakah anda mau mengulang?");
// }while(ulang);

// document.write("perulangan yang sudah dilakukan sebanyak " + counter + "kali");

let sum = "";
while(true){
    let value = prompt("masukan sebuah angka", "");
    if(!value) break;

    sum += value;
}
alert(`sum :` + sum);