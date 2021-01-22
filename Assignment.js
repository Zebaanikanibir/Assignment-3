
//  https://github.com/Zebaanikanibir/Assignment-3

// kilometerToMeter section starts from here....


function kilometerToMeter(kilometer){

var meter = kilometer * 1000
    if(kilometer > 0){

        return meter;

    }else{return "error!try again"}

}
var totalmeter = kilometerToMeter(45);
console.log(totalmeter);





// budgetCalculator section starts from here

function budgetCalculator(watch, mobile, laptop){ 

    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var price = watchPrice + mobilePrice + laptopPrice;
   
        if (watch >0 & mobile > 0 & laptop > 0){
        
            return price; 
        }else{return "it can not be negative!unexpected value"}

}
var totalPrice = budgetCalculator(4, 7, 2);
console.log(totalPrice);






// hotelCost section starts from here

function hotelCost(n){
    if(n > 0){
        if(n <= 10){

            cost = n * 100;
        
        }else if(n <= 20){
            var cost1 = 10 * 100;
            var remaining = n - 10;
            var cost2 = remaining * 80;
            cost = cost1 + cost2;
            
        }else {
        
            var cost1 = 10 * 100;
            var cost2 = 10 * 80;
            var remaining = n - 20;
            var cost3 = remaining * 50;
            cost = cost1 + cost2 + cost3;
        
        }
    
            return cost;
    }else{
        return "It can not be negative!try again"
    }

}
var totalCost = hotelCost(11);
console.log(totalCost);








// megaFriend section starts from here...

function megaFriend(n){

    var megaName = '';
    for(i = 0; i < names.length; i++){
        if (names[i].length > megaName.length){

            megaName = names[i];
        } 
            }
        return megaName;
}

var names = ['Nibir', 'Nanjiba', 'Zash', 'Lily']
var longestName =  megaFriend(names);
 console.log(longestName);