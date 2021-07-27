(function() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return str.concat(this);
        } else {
            return this.toString();
        }
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this.concat(str)
        } else {
            return this.toString();
        }
    }
    String.prototype.isEmpty = function() {
        return this.length == 0 ? true : false;
    }
    String.prototype.truncate = function(n) {
        if (this.length <= n) {
            return this;
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (!this.includes(' ')) {
            return this.slice(0, n - 3) + '...';
        } else {
            const toArr = this.split(' ').map((el) => el + ' ');
            let result = '';

            while ((result + toArr[0]).length < n) {
                result += toArr.shift();
            }

            if (!result) {
                return result.concat(toArr[0].slice(0, n - 3)).concat('...');
            }

            return result.trim().concat('...');
        }
    }
    String.format = function(str, ...params) {
        params.forEach((key, index) => {
            str = str.replace(`{${index}}`, key);
        });
        return str;
    };
}())

let str = 'mystring';
str = str.ensureStart('my');
str = str.ensureStart('hello');
str = str.truncate(18);
str = str.truncate(12);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');