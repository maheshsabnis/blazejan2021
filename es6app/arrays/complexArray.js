let data = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(JSON.stringify(data));

data.forEach((v, i) => {
    v.forEach((n, i) => {
        console.log(n);
    })
});