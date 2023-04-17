function store(){ 
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value;
    var key = document.getElementsById('carcolor').value;

    const car = {
        brand: brand,
        price: price,
        color: color,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
  
}
 function retrivedRecords(){

    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);

 }