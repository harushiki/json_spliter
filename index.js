const { mkdirSync, existsSync,  writeFile } = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

if (!existsSync('./outputs')){
    mkdirSync('./outputs');
}

const data = require('./data.json')

readline.question('Enter attr name : \n', name => {
    
    name = name.trim()

    data.forEach(element => {

        let str = JSON.stringify(element)

        writeFile(('outputs/'+(element[name].replace(/[^\w\s]/gi, '')).split(' ').join('_')+".json").toLowerCase(), str, (err) => {})
    });
    
    readline.close();
});