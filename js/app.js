angular.module('waitCalc', ['ngMessages'])
    .controller('calcCntrl', function () {
        //allows the controller as sytax
        var vm = this;
        //variable to track the number of meals eaen
        vm.mealCount = 0;
        //variable to tack total amount of tips
        vm.tipTot = 0;
        //function to intercept form data
        vm.submit = function () {
                //calculate tax
                vm.tax = addPercent(vm.basePrice, vm.taxRate);
                //calculate tip
                vm.tip = addPercent(vm.basePrice, vm.tipPer);
                //calculate subtotal
                vm.subTot = vm.basePrice + vm.tax;
                //calculate total
                vm.total = vm.subTot + vm.tip;
                //calculate tip total
                vm.tipTot += vm.tip;
                //add to meal count
                vm.mealCount++;
                //calculate average tip per meal
                vm.tipAverage = vm.tipTot / vm.mealCount;
            }
            //clears enter meal form when cancel button is clicked
        vm.cancel = function () {
                document.getElementById('waitForm').reset();
            }
            //resets the entire page and cumulative counts
        vm.reset = function () {
            vm.cancel();
            vm.mealCount = 0;
            vm.tipTot = 0;
            vm.tax = 0;
            vm.tip = 0;
            vm.subTot = 0;
            vm.total = 0;
            vm.tipAverage = 0;

        }
    })

//function to take a value and a percent and return the percent of the value
function addPercent(tot, rate) {
    return rate / 100 * tot;
}
