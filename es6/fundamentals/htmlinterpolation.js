let names = ["Tejas", "Mahesh", "Ramesh","Ram", "Sabnis"];

let options='';
for(let n in names){
    options += `<option value="${names[n]}}">${names[n]}</option>`;
}

