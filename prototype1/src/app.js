(async () => {
    let response = await fetch('../wasm/square.wasm');
    let bytes = await response.arrayBuffer();
    let { instance } = await WebAssembly.instantiate(bytes, {});
    const PI = Math.PI;
    const result = document.getElementById('result');
    result.innerText = `The square value is: ${instance.exports.square(PI)}`;
})();