let celsius;
let fahrenheit;
document.getElementById("submit").onclick= function() {
    celsius = document.getElementById("temps").value;
    celsius = Number(celsius);
    fahrenheit = (celsius * 1.8)+32;
    document.getElementById("myH3").textContent = `${fahrenheit} degree Fahrenheit`;
    
    
}