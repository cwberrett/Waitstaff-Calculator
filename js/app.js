angular.module('waitCalc', ['ngMessages'])
    .controller('calcCntrl', function () {
        var vm = this;
        vm.mealCount = 0;
        vm.tipTot = 0;
        vm.tipAverage = 0;
        vm.submit = function () {
            vm.tax = addPercent(vm.basePrice, vm.taxRate);
            vm.tip = addPercent(vm.basePrice, vm.tipPer);
            vm.subTot = vm.basePrice + vm.tax;
            vm.total = vm.subTot + vm.tip;
            vm.tipTot += vm.tip;
            vm.mealCount++;
            vm.tipAverage = vm.tipTot / vm.mealCount;

        }
    })

function addPercent(tot, rate) {
    return rate / 100 * tot;
}
