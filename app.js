


  

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
    

     //clear input filt
     shopAmount.value = '';
     grocarAmount.value = '';
     rentAmount.value = '';
     totalAmount.value = '';
})



    let totalparsentens = document.getElementById('total');
    let parsenAmount = document.getElementById('parsen');
    let discount = document.getElementById('discount');

    function saveAmount(){
     let totalAmountValu = parseInt(totalparsentens.innerText);
     let parsent = parseInt(parsenAmount.innerText);
     let parsencal = totalAmountValu * parsent;
     totalpar = parsencal

     
     console.log(parsencal);
    }


    