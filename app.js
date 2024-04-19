let form = document.querySelector("#inputForm");
let input = document.querySelector("#tableInput");
let table = document.querySelector(".tablePrinter");


form.addEventListener("submit",(event ) => {

    event.preventDefault();

    let tableOf = input.value;   
    table.innerHTML = "";
    for (let i = 1; i <= 10; i++) {

        const message = `${tableOf} X ${i} = ${tableOf * i}`;
        table.innerHTML += `${message}<br> `;
        
}
})