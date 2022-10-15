// 1. i 2.ZADATAK
var dan = 4;
var result = 'Petak';

switch (dan) {
    case 1:
        result = "Danas je ponedeljak";
        break;
    case 2:
        result = "Danas je utorak";
    case 3:
        result = "Danas je sreda";
        break;
    case 4:
        result = "Danas je cetvrtak";
        break;
    case 5:
        result = "Danas je petak";
        break;
    case 6:
        result = "Danas je subota";
        break;
    case 7:
        result = "Danas je nedelja";
        break;
    default:
        result = "Niste uneli broj u opsegu od 1 do 7";
}
console.log("1. i 2.ZADATAK: "+result);

// 3.ZADATAK
var result1 = 'Danas je radni dan';
switch (dan) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result1 = "Danas je radni dan";
        break;
    case 6:
    case 7:
        result1 = "Danas je dan vikenda";
        break;
    default:
        result1 = "Niste uneli broj u opsegu od 1 do 7";
}
console.log("3.ZADATAK: "+ result1);

//4. ZADATAK
var mesec = 4;
var result2 = 'Januar';

switch (mesec) {
    case 1:
        result2 = "Januar";
        break;
    case 2:
        result2 = "Februar";
    case 3:
        result2 = "Mart";
        break;
    case 4:
        result2 = "April";
        break;
    case 5:
        result2 = "Maj";
        break;
    case 6:
        result2 = "Jun";
        break;
    case 7:
        result2 = "Jul";
        break;
    case 8:
        result2 = "Avgust";
        break;
    case 9:
        result2 = "Septembar";
        break;
    case 10:
        result2 = "Oktobar";
        break;
    case 11:
        result2 = "Novembar";
        break; 
    case 12:
        result2 = "Decembar";
        break;           
    default:
        result2 = "Niste uneli broj u opsegu od 1 do 12";
}
console.log("4.ZADATAK: "+result2);

//5. ZADATAK
var result3 = 'Zima';
switch (mesec) {
    case 12:
    case 1:
    case 2:
        result3 = "Zima";
        break;
    case 3:
    case 4:
    case 5:
        result3 = "Prolece";
        break;
    case 6:
    case 7:
    case 8:
        result3 = "Leto";
        break;
    case 9:
    case 10:
    case 11:
        result3 = "Jesen";
        break;
    default:
        result3 = "Niste uneli broj u opsegu od 1 do 12";
}
console.log("5.ZADATAK: "+result3);
//6. ZADATAK
var ocene = 'A';
var result4 = 'Good job';
switch (ocene) {
    case 'A':
        result4 = "Good job";
        break;
    case 'B':
        result4 = "Pretty good";
        break;
    case 'C':
        result4 = "Passed";
        break;
    case 'D':
        result4 = "Not so good";
        break;
    case 'F':
        result4 = "Failed";
        break;
    default:
        result4 = "Niste uneli broj u opsegu od F do A";
}
console.log("6.ZADATAK: "+result4);

var grad = "Nis";
// 7. ZADATAK
switch (grad) {
        case "Nis":
        case "Kraljevo":
        case "Zrenjanin":
        case "Subotica":
        case "Leskovac":
            result5 = "Ovaj prelepi grad "+ grad +" se nalazi u Srbiji.";
            break;
        case "Birmingham":
        case "London":
        case "Manchester":
            result5 = "Ovaj grad "+ grad +" se nalazi u VB.";
            break;
        case "Drammen":
        case "Oslo":
        case "Molde":
        case "Stavanger":  
            result5 = "Ovaj grad "+ grad +" se nalazi u Norveskoj.";
            break;
        case "Paris":
        case "Marseille":
        case "Lyon":
        case "Nice":  
            result5 = "Ovaj grad "+ grad +" se nalazi u Francuskoj.";
            break;
        case "Athens":
        case "Thessaloniki": 
            result5 = "Ovaj grad "+ grad +" se nalazi u Francuskoj.";
            break;
        default:
            result5 = "Molim, izaberite drugi grad";
    }
    console.log("7.ZADATAK: "+result5);
// 8. ZADATAK
var x=2;
var y=0;
var operation="/";
switch (operation) {
    case "+":
        result6 = x+y;
        break;
    case "-":
        result6 = x-y;
        break;
    case "*":
        result6 = x*y;
        break;
    case "/":
        if(y!=0){
        result6 = x/y;}
        else{result6 ="Deljenje sa nulom nema smisla"}
        break;
    
    default:
        result6 = "Unete vrednosti nisu ispravne";
}
console.log("8.ZADATAK: "+result6);