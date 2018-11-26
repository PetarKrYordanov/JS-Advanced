(function solve() {
    String.prototype.ensureStart = function (str) {
        result = (this.startsWith(str)) ? this.toString() : str + this;
        return result;
    }

    String.prototype.ensureEnd = function (str) {
        let result = this.endsWith(str) ? this.toString() : this + str;
        return result;
    }

    String.prototype.isEmpty = function () {
        return this == "";
    }

    String.prototype.truncate = function (n) {
        let words = this.split(/' '/g);
        if (this.length <= n) {
            return this.toString();
        } else {
            if (n < 4) {
                return '.'.repeat(n);
            }

            let result = this.slice(0, n - 2);

            let spaceIndex = result.lastIndexOf(" ");

            if (spaceIndex !== -1) {
                return this.slice(0, spaceIndex) + '...';
            } else {
                return result += '...';
            }
        }

    }

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})()

var testString = 'the quick brown fox jumps over the lazy';
var answer = testString.ensureEnd(' dog');
answer = answer.ensureEnd(' dog');