const k = [10, [20],
    [
        [1, [2, 3, 4]]
    ]
];
// generator function
function* traverseNested(data) {
    if (!data) { return; }

    for (var i = 0; i < data.length; i++) {
        var element = data[i];

        element instanceof Array
            ?
            yield* traverseNested(element) :
            yield element
    }
}

const generator = traverseNested(k);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());