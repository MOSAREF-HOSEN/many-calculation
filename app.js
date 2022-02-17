


    // let totalAmount = document.getElementById('total-amount');
    // let shopAmount = document.getElementById('shop');
    // let grocarAmount = document.getElementById('grocar');
    // let rentAmount = document.getElementById('rent');
    // let totalprice = document.getElementById('total');
    
// function hendelar(){
    //update shoping parice 
    // let shopValue = shopAmount.value;
    // let grocarValue = grocarAmount.value;
    // let rentValue = rentAmount.value;
    // totalprice.innerText = parseInt(shopValue)+parseInt(grocarValue)+parseInt(rentValue);
    // console.log(totalprice);

//update main total
// let totalAmountValue = totalAmount.value;
// }

document.getElementById('calculetar').addEventListener('click',function(){
    
    let shopAmount = document.getElementById('shop');
    let shopValue = shopAmount.value;
    let grocarAmount = document.getElementById('grocar');
    let grocarValue = grocarAmount.value;
    let rentAmount = document.getElementById('rent');
    let rentValue = rentAmount.value;
    let totalprice = document.getElementById('total');
   
    totalprice.innerText = parseInt(shopValue)+
     parseInt(grocarValue)+parseInt(rentValue);

//update total
    let totalAmount = document.getElementById('total-amount');
    let totalAmountValu = parseInt(totalAmount.value)-parseInt(totalprice.innerText);

    let balenceTotal = document.getElementById('balenc');
     balenceTotal.innerText = totalAmountValu;
     console.log(balenceTotal);


    


     //clear input filt
     shopAmount.value = '';
     grocarAmount.value = '';
     rentAmount.value = '';
     totalAmount.value = '';
     
     
})