


    const totalAmount = document.getElementById('total-amount');
    const shopAmount = document.getElementById('shop');
    const grocarAmount = document.getElementById('grocar');
    const rentAmount = document.getElementById('rent');
    const totalprice = document.getElementById('total');
    
function hendelar(){
    //update shoping parice 
    const shopValue = shopAmount.value;
    const grocarValue = grocarAmount.value;
    const rentValue = rentAmount.value;
    totalprice.innerText = parseInt(shopValue)+parseInt(grocarValue)+parseInt(rentValue);
    console.log(totalprice);

//update main total




}