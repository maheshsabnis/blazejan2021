export const array = {
    print: function() {
        let arr = ['A', 'B', 'C'];
        arr.forEach((v) => {
            console.log(v);
        });
    }
};

export const operation = {
    getLength: function(str) {
        return str.length;
    },
    upper: function(str) {
        return str.toUpperCase();
    }
};