// The alltruth functions
function allTruthy(...args) {
    return args.every(elem => !!elem);
}

// all the different paramaters
document.addEventListener('DOMContentLoaded', function() {
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML += `allTruthy(true, true, true): ${allTruthy(true, true, true)} <br>`;
    outputDiv.innerHTML += `allTruthy(true, false, true): ${allTruthy(true, false, true)} <br>`;
    outputDiv.innerHTML += `allTruthy(5, 4, 3, 2, 1, 0): ${allTruthy(5, 4, 3, 2, 1, 0)} <br>`;
    outputDiv.innerHTML += `allTruthy('hello', '', 'world'): ${allTruthy('hello', '', 'world')} <br>`;
    outputDiv.innerHTML += `allTruthy({ name: 'John' }, null, undefined): ${allTruthy({ name: 'John' }, null, undefined)} <br>`;
    outputDiv.innerHTML += `allTruthy(1, 'test', [1, 2, 3]): ${allTruthy(1, 'test', [1, 2, 3])} <br>`;
    outputDiv.innerHTML += `allTruthy(): ${allTruthy()} <br>`; // No arguments
    outputDiv.innerHTML += `allTruthy(false): ${allTruthy(false)} <br>`;
    outputDiv.innerHTML += `allTruthy(0): ${allTruthy(0)} <br>`;
    outputDiv.innerHTML += `allTruthy(null): ${allTruthy(null)} <br>`;
    outputDiv.innerHTML += `allTruthy(undefined): ${allTruthy(undefined)} <br>`;
});
