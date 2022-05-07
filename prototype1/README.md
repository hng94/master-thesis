 **Requirements**

You can start the prototype directly with python
> python -m SimpleHTTPServer #python2 \n
> python3 -m http.server 8080 #python3

Or if you want to modify WebAssembly program in src/lib.rs
 1. You must install Rust language with rustup first
 2. Install WebAssembly toolchain with following commands

> rustup target add wasm32-unknown-unknown \n
> cargo install wasm-gc

 3. Change src/lib.rs file then compile it to square.wasm in target folder

> cargo build --target wasm32-unknown-unknown --release wasm-gc \n
> target/wasm32-unknown-unknown/release/square.wasm
