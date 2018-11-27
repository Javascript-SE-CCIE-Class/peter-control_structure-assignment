function checkIf(num) {
    if (num < 20) {
        return true;
    }
    if (num < 100) {
        return true;
    }
    if (num < 400) {
        return true;
    } else throw new RangeError(`${num} is out of range`);
}

console.log(checkIf(6500));