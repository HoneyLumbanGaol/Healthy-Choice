# Healthy Choice

**Healthy Choice** adalah game edukasi berbasis web yang mengajak pemain membuat keputusan sehat dalam kehidupan sehari-hari.

Pemain akan menghadapi berbagai situasi sederhana, seperti bangun tidur, berolahraga, memilih minuman, makan siang, mencuci tangan, beristirahat, menjaga kesehatan mental, dan mempersiapkan hari berikutnya.

Tujuan permainan ini adalah membantu pemain memahami bahwa kebiasaan kecil yang dilakukan secara konsisten dapat mendukung kesehatan tubuh dan pikiran.

## Fitur Utama

- 8 tantangan kebiasaan sehat sehari-hari.
- Pilihan antara kebiasaan sehat dan kebiasaan yang kurang baik.
- Penjelasan singkat setelah setiap pilihan.
- Sistem skor dengan nilai `+100 poin` untuk pilihan sehat.
- Sistem level:
  - Level 1: Pemula Sehat
  - Level 2: Penjelajah Aktif
  - Level 3: Jagoan Seimbang
  - Level 4: Pahlawan Kesehatan
- Progress bar untuk menunjukkan jumlah tantangan yang sudah diselesaikan.
- Modal hasil akhir setelah seluruh tantangan selesai.
- Tombol mulai ulang dan main lagi.
- Tampilan responsif untuk desktop dan perangkat mobile.
- Background ceria dengan maskot wortel, awan, matahari, daun, dan elemen emoji.

## Daftar Tantangan

1. **Awal Hari**
   - Memahami pentingnya tidur yang cukup dan jadwal bangun yang teratur.

2. **Gerak Aktif**
   - Memilih olahraga atau aktivitas fisik dibandingkan terlalu lama menggunakan perangkat.

3. **Hidrasi**
   - Memilih air putih dibandingkan minuman manis berlebihan.

4. **Isi Piring**
   - Mengenal pentingnya makanan yang seimbang, seperti sayur, protein, dan karbohidrat secukupnya.

5. **Kebersihan**
   - Membiasakan mencuci tangan dengan sabun sebelum makan.

6. **Waktu Istirahat**
   - Memahami pentingnya tidur sesuai jadwal dan mengurangi aktivitas layar hingga larut malam.

7. **Pikiran Sehat**
   - Mendorong pemain untuk mengelola perasaan dan bercerita kepada orang tepercaya.

8. **Kebiasaan Baik**
   - Membiasakan persiapan sederhana untuk mendukung kebiasaan sehat pada hari berikutnya.

## Cara Bermain

1. Buka halaman game di browser.
2. Baca situasi dan pertanyaan yang ditampilkan.
3. Pilih salah satu dari dua pilihan yang tersedia.
4. Baca feedback yang muncul setelah memilih.
5. Klik **Lanjutkan** untuk menuju tantangan berikutnya.
6. Selesaikan seluruh 8 tantangan untuk melihat skor akhir.
7. Gunakan tombol reset untuk memulai permainan dari awal.

## Sistem Skor dan Level

Setiap jawaban yang mendukung kebiasaan sehat memberikan `100 poin`.

Level pemain dihitung berdasarkan skor:

| Skor | Level |
| --- | --- |
| 0–199 | Pemula Sehat |
| 200–399 | Penjelajah Aktif |
| 400–599 | Jagoan Seimbang |
| 600 poin atau lebih | Pahlawan Kesehatan |

## Teknologi

Game dibuat menggunakan teknologi web dasar:

- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts: Baloo 2 dan Nunito
- Emoji sebagai elemen visual dan ilustrasi

Tidak membutuhkan database, server backend, atau instalasi dependency tambahan.

## Struktur File

```text
healthy-choice/
├── index.html   # Struktur halaman dan komponen game
├── style.css    # Tampilan, layout, animasi, dan responsive design
├── script.js    # Data tantangan, sistem skor, level, feedback, dan interaksi game
└── README.md    # Dokumentasi project
```

## Cara Menjalankan

### Opsi 1: Membuka langsung

Buka file berikut di browser:

```text
index.html
```

### Opsi 2: Menggunakan server lokal

Jika Python tersedia, jalankan perintah berikut dari folder project:

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

## Tujuan Edukasi

Healthy Choice dibuat untuk membantu pemain:

- Mengenali kebiasaan hidup sehat.
- Memahami pentingnya tidur yang cukup.
- Membiasakan aktivitas fisik.
- Memilih makanan dan minuman yang lebih bergizi.
- Menjaga kebersihan diri.
- Memperhatikan kesehatan mental.
- Membuat persiapan sederhana untuk hari berikutnya.

> Rawat dirimu, satu pilihan dalam satu waktu.
