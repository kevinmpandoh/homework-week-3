// Fungsi untuk membuat array dengan nilai random dari 1 sampai 50
function buatArray(totalArray) {
    let array = [];
    // Isi array kosong dengan angka random di antara 1 - 50 berjumlah 100 nilai
    for (let i = 0; i < totalArray; i++) {
        array.push(Math.floor(Math.random() * 50 ) + 1)
    }
    return array
}

// Fungsi untuk menghitung nilai Gajil
function hitungIndexGanjil(array) {    
    let ganjil = [];
    for (let i = 0; i < array.length; i++) {
        if ( i % 2 == 1) {
            ganjil.push(array[i])
        }
    }
    return ganjil;
}

// Fungsi untuk menghitung nilai Genap
function hitungIndexGenap(array) {
    let genap = [];    
    for (let i = 0; i < array.length; i++) {
        if ( i % 2 == 0) {
            genap.push(array[i])
        }
    }
    return genap
}

function hitungMin(array) {
    let nilaiTerkecil = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < nilaiTerkecil) {
            nilaiTerkecil = array[i]
        }
    }
    return nilaiTerkecil
}

function hitungMax(array) {
    let nilaiTerbesar = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > nilaiTerbesar) {
            nilaiTerbesar = array[i]
        }
    }
    return nilaiTerbesar
}

function hitungTotal(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

function hitungRataRata(array, total) {
    return total / array.length
}

const array = buatArray(100);
const ganjil = hitungIndexGanjil(array);
const genap = hitungIndexGenap(array);

console.log("========INDEX ARRAY========")
console.log(`Index array: ${array.length}`)
console.log(`Index array GANJIL: ${ganjil.length}`)
console.log(`Index array GENAP: ${genap.length}`)

// Ganjil
const minGanjil = hitungMin(ganjil)
const maxGanjil = hitungMax(ganjil)
const totalGanjil = hitungTotal(ganjil)
const rataRataGanjil = hitungRataRata(ganjil, totalGanjil)

console.log("========GANJIL========")
console.log(`Nilai minimal array Ganjil: ${minGanjil}`)
console.log(`Nilai maksimal array Ganjil: ${maxGanjil}`)
console.log(`Nilai total array Ganjil: ${totalGanjil}`)
console.log(`Nilai rata-rata array Ganjil: ${rataRataGanjil}`)

// Genap
const minGenap = hitungMin(genap)
const maxGenap = hitungMax(genap)
const totalGenap = hitungTotal(genap)
const rataRataGenap = hitungRataRata(genap, totalGenap)

console.log("========GENAP========")
console.log(`Nilai minimal array Genap: ${minGenap}`)
console.log(`Nilai maksimal array Genap: ${maxGenap}`)
console.log(`Nilai total array Genap: ${totalGenap}`)
console.log(`Nilai rata-rata array Genap: ${rataRataGenap}`)

console.log("==========PERBANDINGAN==========")

// Membandingkan nilai minimal dari kedua array
if (minGanjil == minGenap) {
    console.log("Nilai Min array GANJIL sama dengan dari array GENAP")
} else if (minGanjil > minGenap) {
    console.log("Nilai Min array GANJIL lebih besar")
} else {
    console.log("Nilai Min array GENAP lebih besar")
}

// Membandingkan nilai maksimal dari kedua array
if (maxGanjil == maxGenap) {
    console.log("Nilai Max array GANJIL sama dengan array GENAP")
} else if (maxGanjil > maxGenap) {
    console.log("Nilai Max array GANJIL lebih besar")
} else {
    console.log("Nilai Max array GENAP lebih besar")
}

// Membandingkan nilai total dari kedua array
if (totalGanjil == maxGenap) {
    console.log("Nilai Total array GANJIL sama dengan array GENAP")
} else if (totalGanjil > totalGenap) {
    console.log("Nilai Total array GANJIL lebih besar")
} else {
    console.log("Nilai Total array GENAP lebih besar")
}

// Membandingkan rata-rata total dari kedua array
if (rataRataGanjil == rataRataGenap) {
    console.log("Nilai Rata-rata array GANJIL sama dengan array GENAP")
} else if (rataRataGanjil > rataRataGenap) {
    console.log("Nilai Rata-rata array GANJIL lebih besar")
} else {
    console.log("Nilai Rata-rata array GENAP lebih besar")
}

