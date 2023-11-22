// Mendapatkan elemen HTML
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const inputC = document.getElementById("input-c");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("result");

// Menambahkan event listener untuk tombol Hitung
calculateBtn.addEventListener("click", function() {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const c = parseFloat(inputC.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.textContent = "Masukkan angka yang valid";
    } else {
        const hasil = (c - b) / a;
        result.textContent = `x = ${hasil}`;
    }
});
