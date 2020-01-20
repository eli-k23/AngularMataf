var Calculator = /** @class */ (function () {
    function Calculator(a, b) {
        this.a = a;
        this.b = b;
    }
    Calculator.prototype.add = function () {
        return this.a + this.b;
    };
    return Calculator;
}());
var c = new Calculator(23, 6);
console.log(c.add());
