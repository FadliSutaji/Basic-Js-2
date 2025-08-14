let kolom = document.getElementById("Kolom");
let angka = document.querySelectorAll(".Angka");
let operator = document.querySelectorAll(".Operator");
let clear = document.getElementById("clear");
let hasil = document.getElementById("Hasil");

let awal = "";  // Untuk tampilan
let rumus = ""; // Untuk perhitungan

// Tombol angka
angka.forEach(btn => {
    btn.addEventListener("click", function() {
        awal += btn.textContent; 
        rumus += btn.textContent; 
        kolom.textContent = awal; 
    });
});

// Tombol operator
operator.forEach(btn => {
    btn.addEventListener("click", function() {
        let op = btn.textContent;

        // Untuk tampilan
        awal += op;

        // Untuk perhitungan
        if (op === "x") rumus += "*";
        else if (op === "%") rumus += "/100";
        else if (op === "÷") rumus += "/";
        else rumus += op;

        kolom.textContent = awal;
    });
});

// Tombol clear
clear.addEventListener("click", function() {
    awal = "";
    rumus = "";
    kolom.textContent = "0";
});

// Tombol hasil
hasil.addEventListener("click", function() {
    kolom.textContent = eval(rumus);
});
