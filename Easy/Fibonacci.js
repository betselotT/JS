/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let first = 0;
    let second = 1;
    yield first;
    yield second;

    while (true) {
        let final = first + second;
        yield final;
        let temp = second;
        second = final;
        first = temp;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */