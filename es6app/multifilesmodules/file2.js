import { ManageString, GetLength } from './file1.js'

function StringOp(str) {
    console.log('Changing to Upper Case ' + ManageString(str, 'U'));
    console.log('Changing to Lower Case ' + ManageString(str, 'L'));
    console.log('Length  = ' + GetLength(str));
}

StringOp('Mahesh Sabnis');