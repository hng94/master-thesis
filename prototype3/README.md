First, install wasmedge runtime into system
> curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash

Run cargo to build Wasm binary
> cargo build --target wasm32-wasi  

And then use wasmedge to execute Wasm binary
> wasmedge --dir .:. target/wasm32-wasi/debug/square.wasm