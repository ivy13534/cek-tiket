alert(
    'Aplikasi Cek Tiket!'
); //Pesan Awal

const nama = prompt("Masukkan Nama Anda!"); //Membuat Input Nama
const umur = prompt("Masukkan Umur Anda!"); //Membuat Input Umur
let Studio; //Variabel baru

if (umur >= 13) { //Perbandingan jika Umur lebih atau sama dengan 13
    Studio = prompt("Pilih Studio (A, B, atau C)"); //Input pilihan Studio
    if (Studio == "A") { //Jika Studio A
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
    } else if (Studio == "B"){ //Jika Studio B
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
    } else if (Studio == "C"){ //Jika Studio C
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
    } else { //Pilihan studio tidak ada
        alert("Pilihan Studio tidak valid");
    }
} else { //Kondisi Umur kurang dari 13
    alert (`Tidak boleh masuk`);
}
