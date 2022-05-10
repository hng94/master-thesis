import * as fs from 'fs';
const PI = Math.PI;

async function main() {
    const wasmBuffer = fs.readFileSync('./lib/square.wasm');
    const { instance } = await WebAssembly.instantiate(wasmBuffer, {});
    const { square } = instance.exports;
    console.log(`The square value of Pi is: ${square(PI)}`);
}

main()