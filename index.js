function findArraysWithCommonName(arr) {
    const flatArr = arr.flat();
    const mapObjectToCount = flatArr.reduce(function (map, item) {
        const key = JSON.stringify(item);
        const count = (map[key] ? map[key] : 0) + 1;
        return { ...map, [key]: count };
    }, {});

    const result = Object.entries(mapObjectToCount)
        .filter(([json, count]) => count > 1)
        .map(([json]) => JSON.parse(json));
    return result;
}

function getValueArray(cArray, array) {
    let i = 0;
    let j = 0;
    values = [];
    while (i < cArray.length && j < array.length) {
        if (cArray[i].name === array[j].name) {
            values.push(array[j].value);
            i++;
        }
        j++;
    }
    return values;
}

var arrays = [
    [
        { name: 'kiwi', value: 12 },
        { name: 'apple', value: 5 },
        { name: 'apple', value: 12 },
        { name: 'pizza', value: 33 },
        { name: 'pizza', value: 24 },
        { name: 'fish', value: 5 },
        { name: 'milk', value: 5 },
        { name: 'banana', value: 7 },
        { name: 'orange', value: 11 },
    ],
    [
        { name: 'taco', value: 23 },
        { name: 'pizza', value: 78 },
        { name: 'apple', value: 12 },
        { name: 'pizza', value: 33 },
        { name: 'pizza', value: 24 },
        { name: 'fish', value: 5 },
        { name: 'pie', value: 1 },
        { name: 'cake', value: 3 },
        { name: 'banana', value: 7 },
        { name: 'beef', value: 123 },
        { name: 'lime', value: 72 },
        { name: 'pizza', value: 34 },
    ],
    [
        { name: 'apple', value: 12 },
        { name: 'pizza', value: 33 },
        { name: 'pizza', value: 24 },
        { name: 'pizza', value: 23 },
        { name: 'fish', value: 5 },
        { name: 'banana', value: 7 },
        { name: 'banana', value: 77 },
    ]
];

let result = findArraysWithCommonName(arrays);

result.forEach(function (e) {
    console.log(e);
});

arrays.forEach(function (x){
    let values = getValueArray(result, x);
    values.forEach(function (v) {
        console.log(v);
    });
    console.log('\n');
});
