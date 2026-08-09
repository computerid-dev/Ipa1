# 🔬 Science Adventure

Aplikasi edukasi IPA berbasis game interaktif untuk siswa SD dan SMP, mencakup materi **Biologi, Kimia, Fisika, Ilmu Bumi, dan Sains Umum**, lengkap dengan mode belajar dan mode Test IPA (50 soal).

## ✨ Fitur

- **Buku Materi** — kumpulan modul pembelajaran per kategori (Biologi, Kimia, Fisika, Ilmu Bumi, Sains Umum)
- **Mode Belajar (Study Mode)** — belajar materi per topik dengan sistem poin
- **Test IPA** — 50 soal ujian dengan 3 tingkat kesulitan (Mudah, Sedang, Tinggi), lengkap dengan pembahasan jawaban dan sertifikat hasil
- **Profil & Progress** — nama, kelas, poin, dan riwayat test tersimpan otomatis di perangkat (localStorage)
- **Pengaturan** — kontrol suara (sound effect) dan efek partikel latar belakang
- **Desain responsif** — nyaman diakses lewat desktop maupun HP

## 🛠️ Teknologi

| Teknologi | Kegunaan |
|---|---|
| [React 19](https://react.dev/) + TypeScript | UI & logic aplikasi |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [lucide-react](https://lucide.dev/) | Ikon |
| [motion](https://motion.dev/) | Animasi |

## 🚀 Cara Menjalankan

**Prasyarat:** [Node.js](https://nodejs.org/) versi 18 ke atas sudah terpasang.

```bash
# 1. Install dependencies
npm install

# 2. Jalankan mode development
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`.

### Build untuk Produksi

```bash
npm run build      # Menghasilkan folder dist/
npm run preview    # Pratinjau hasil build
```

### Cek Tipe TypeScript

```bash
npm run lint
```

## 📁 Struktur Proyek

```
src/
├── components/         # Komponen UI (Navbar, Dashboard, Modal, dll)
├── data/                # Data statis: soal test & materi pelajaran
├── utils/               # Fungsi bantu (sound effect)
├── types.ts             # Definisi tipe TypeScript
├── App.tsx               # Komponen utama & router tampilan
└── main.tsx              # Entry point aplikasi
```

## ▲ Deploy ke Vercel

1. Push project ini ke repository GitHub kamu.
2. Buka [vercel.com](https://vercel.com), klik **Add New → Project**, lalu import repo GitHub tadi.
3. Vercel bakal otomatis mendeteksi framework **Vite** (sudah dikonfigurasi lewat `vercel.json`) — cukup klik **Deploy**, nggak perlu setting environment variable apa pun karena aplikasi ini murni client-side (semua data tersimpan di `localStorage`, tidak ada pemanggilan API eksternal/server).
4. Selesai — Vercel akan kasih kamu URL live (`https://nama-project.vercel.app`).

## 💾 Penyimpanan Data

Progress belajar, poin, dan riwayat test disimpan secara lokal di browser pengguna menggunakan `localStorage`. Artinya data **tidak tersinkron antar perangkat** dan akan hilang jika cache/local storage browser dibersihkan.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](./LICENSE) — bebas digunakan, dimodifikasi, dan didistribusikan.
