
    function hitungDeret() {
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let n = document.getElementById("n").value;
        let hasil = document.getElementById("hasil");

        // Konversi input ke number atau null jika kosong
        a = a ? parseFloat(a) : null;
        b = b ? parseFloat(b) : null;
        n = n ? parseInt(n) : null;

        // Jika hanya dua nilai yang diketahui, hitung nilai yang tidak diketahui
        if (a === null && b !== null && n !== null) {
            a = (n === 1) ? b : "Tidak cukup data";
        } 
        else if (b === null && a !== null && n !== null) {
            b = (n === 1) ? a : "Tidak cukup data";
        } 
        else if (n === null && a !== null && b !== null) {
            n = "Tidak cukup data";
        }

        // Jika semua nilai diketahui, hitung suku ke-n
        if (a !== null && b !== null && n !== null && typeof a === "number" && typeof b === "number" && typeof n === "number") {
            let Un = a + (n - 1) * b;
            hasil.innerHTML = `Suku ke-${n} dari barisan aritmatika adalah <strong>${Un}</strong>`;
        } else {
            hasil.innerHTML = "Masukkan minimal 2 nilai agar bisa dihitung.";
        }
    }
