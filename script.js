let inputbox = document.getElementById("inputbox");
let toFahren = document.getElementById("toFahren");
let toCel = document.getElementById("toCel");
let result = document.getElementById("reply")
let number = 0;
function func(){
    if(toFahren.checked){
        number = Number(inputbox.value);
        number = (number*9/5) + 32;
        result.textContent = "" + number+"°F";
    }
    else if(toCel){
        number = Number(inputbox.value);
        number = 5/9 *(number - 32);
        result.textContent = "" + number +"°C";
    }
    else{
        result.textContent = "Please Select Single Conversion" ;

    }
}