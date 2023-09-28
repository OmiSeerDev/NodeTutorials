//Buffers
const buffer = Buffer.alloc(4);
const buffer2 = Buffer.from([1,2,3,4,5]);
const buffer3 = Buffer.from('Hellou!');

console.log(buffer);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());

const abc = Buffer.alloc(26);
console.log(abc);

for (let i=0; i < 26 ; i++){
    abc[i] = i + 97;
}
console.log(abc.toString());

//Streams
const fs = require('fs');

let data ='';

let readableStream = fs.createReadStream(__dirname+ '/input.txt');

readableStream.setEncoding('utf-8');
readableStream.on('data', (info)=> {
console.log('%s',info );
});

//Buffer de escritura
process.stdout.write('Hola');

//Stream
const stream = require('stream');
const util = require('util');

const Transform = stream.Transform;

class Mayus {
    constructor() {
        Transform.call(this);
    }
    _transform(chunk, codif, cb) {
        const chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        cb();
    }
}
util.inherits(Mayus, Transform);


let mayus = new Mayus();
readableStream
    .pipe(mayus)
    .pipe(process.stdout);