
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(acum, element){
    return acum += element ;
});
console.log(totalBatteries);