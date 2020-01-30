let names=["joel","jhenaro","percy","cesar","cinthia"];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if(element==="percy"){
        continue
    }
    console.log(element);
    
}

for (const name of names) {

    if(name==="percy"){
        continue;
    }
    console.log(name);
}

for (const key in names) {

    if(names[key]==="percy"){
        continue;
    }

    console.log(names[key]);

}