use std::f64;

fn main() {
    let pi = f64::consts::PI;
    println!("The square value of Pi is: {}", square(pi));
}

pub fn square(x: f64) -> f64 {
    x * x
}