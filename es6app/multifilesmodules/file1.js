export function ManageString(str, c) {
    if (c == "L") return str.toLowerCase();
    if (c == "U") return str.toUpperCase();
    return str;
}

export function GetLength(str) {
    return str.length;
}