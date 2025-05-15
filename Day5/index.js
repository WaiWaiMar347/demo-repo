const d=require('./math');
console.log(d.add(1,2));
console.log(d.div(4,2));

const fs = require('fs');//import fs from 'fs';
const path = require('path');//import path from 'path';
const os=require('os');

fs.readFile('test.txt','utf8',(error,data) => {if(error){throw error} console.log(data)});
//const full=path.PlactformPath.dirname('test.txt');
//console.log(full);
console.log(os.platform()+"  "+os.cpus().length+"  "+os.freemem());