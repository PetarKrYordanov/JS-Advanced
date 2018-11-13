let solution = (function () {
    function add(vektor1, vektor2) {
        return '\[' + (vektor1[0] + vektor2[0]) + ', ' + (vektor2[1] + vektor1[1]) + '\]';
    }
    function multiply(vektor, scalar) {
        return '[' + (vektor[0] * scalar).toString() + ', ' + (vektor[1] * scalar).toString() + ']';
    }
    function length(vektor) {
        return Math.sqrt(vektor[0] * vektor[0] + vektor[1] * vektor[1]);
    }
    function dot(vektor1, vektor2) {
        return (vektor1[0] * vektor2[0] + vektor1[1] * vektor2[1]);
    }
    function cross(vektor1, vektor2) {
        return vektor1[0] * vektor2[1] - vektor1[1] * vektor2[0];
    }
    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    }
}
)()

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.add([5.43, -1], [1, 31]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.multiply([3.5, -2], -1));

console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));

