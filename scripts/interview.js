"use strict";

const MAX_PRIME = 1000000;
const MAX_QUOTA = 10000000;

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
    return new Promise((resolve, reject) => {
        if (quota > MAX_QUOTA) {
            reject(`Quota is too big: ${quota}`);
        } else {
            setTimeout(() => {
                console.log("3.1.starting calculating immediately...");
                const primes = [];
                while (primes.length < quota) {
                    const candidate = random(MAX_PRIME);
                    if (isPrime(candidate)) {
                        primes.push(candidate);
                    }
                }
                console.log("3.2. resolved");
                resolve(primes);
            }, 0);
        }
    });
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");
const userInput = document.querySelector("#user-input");

document.querySelector("#generate").addEventListener("click", () => {
    // output.textContent = "Calculating ...";
    console.log("1. calculating ...");

    generatePrimes(quota.value)
        .then((primes) => {
            console.log("4. done!");
            userInput.textContent += "done!";
            output.textContent = `Finished generating ${primes.length} primes!`;
        })
        .catch((reason) => {
            output.textContent = reason;
        });
    console.log("2. non-blocking");
    userInput.textContent = "Calculating ...";
});

document.querySelector("#reset").addEventListener("click", () => {
    document.location.reload();
});
