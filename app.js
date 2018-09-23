const inside = require('point-in-polygon');
const { readFile, saveFile } = require('./save-file') 

console.log(readFile('points.csv'));


/*readFile('points.csv')
.then((data)=>{
    console.log(data);   
})
.catch((err)=>{
    console.log(err);
})*/