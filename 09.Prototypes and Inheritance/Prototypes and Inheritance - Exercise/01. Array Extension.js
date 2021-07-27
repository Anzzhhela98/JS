(function() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    Array.prototype.skip = function(n) {
        let result = [];
        this.forEach((num, index) => index >= n ? result.push(num) : undefined)
        return result
    };
    Array.prototype.take = function(n) {
        let result = [];
        this.forEach((num, index) => index <= n - 1 ? result.push(num) : undefined)
        return result
    };
    Array.prototype.sum = function() {
        return this.reduce((acc, value) => (acc + value), 0);
    };
    Array.prototype.average = function() {
        return this.sum() / this.length;
    };
}())