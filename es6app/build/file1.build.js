"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ManageString = ManageString;
exports.GetLength = GetLength;

function ManageString(str, c) {
    if (c == "L") return str.toLowerCase();
    if (c == "U") return str.toUpperCase();
    return str;
}

function GetLength(str) {
    return str.length;
}