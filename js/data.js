const nama = "Naufal Rizky";
let usia = 18;

const biodata = document.getElementById('biodata')
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <= 18) {
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia <= 30) {
        generasi = "dewasa";
    }
    else if (usia > 30 && usia <= 50) {
        generasi = "Menjelang Tua";
    }
    else if (usia > 50 && usia <= 100) {
        generasi = "menjelang ajal";
    }
    else if (usia > 10 && usia <= 2) {
        generasi = "generasi anak anak"
    }
    else {
        generasi = "generasi bayi"
    }

    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

generateBiodata();
