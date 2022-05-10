# master-thesis
Repository for Master Thesis Prototypes

If you want to modify WebAssembly program in src/lib.rs
 1. You must install Rust language with rustup first
 2. Install WebAssembly toolchain with following commands

> rustup target add wasm32-unknown-unknown
> 
> cargo install wasm-gc

 3. Change src/lib.rs file then compile it to square.wasm in target folder

> cargo build --target wasm32-unknown-unknown --release wasm-gc
> 
> target/wasm32-unknown-unknown/release/square.wasm
