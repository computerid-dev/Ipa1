import { CategoryInfo, LessonModule } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'biologi',
    title: 'Biologi',
    description: 'Mempelajari makhluk hidup, organ tubuh manusia, fotosintesis tumbuhan, peredaran darah, dan jaringan kehidupan.',
    icon: 'Dna',
    color: 'emerald',
    badge: 'Makhluk Hidup & Ekosistem',
    bgGradient: 'from-emerald-600/20 to-teal-800/20 border-emerald-500/30 text-emerald-400',
    lessonsCount: 4,
  },
  {
    id: 'kimia',
    title: 'Kimia',
    description: 'Mempelajari atom, unsur, senyawa, wujud materi, larutan asam basa, serta perubahan fisika dan kimia.',
    icon: 'FlaskConical',
    color: 'amber',
    badge: 'Materi & Reaksi',
    bgGradient: 'from-amber-600/20 to-orange-800/20 border-amber-500/30 text-amber-400',
    lessonsCount: 3,
  },
  {
    id: 'fisika',
    title: 'Fisika',
    description: 'Mempelajari gaya, hukum Newton, energi, sifat cahaya, optik, serta kelistrikan seri dan paralel.',
    icon: 'Zap',
    color: 'sky',
    badge: 'Gaya & Energi',
    bgGradient: 'from-sky-600/20 to-blue-800/20 border-sky-500/30 text-sky-400',
    lessonsCount: 3,
  },
  {
    id: 'ilmu-bumi',
    title: 'Ilmu Bumi',
    description: 'Mempelajari struktur lapisan bumi, gempa & gunung api, atmosfer, daur air, serta sistem tata surya.',
    icon: 'Globe',
    color: 'indigo',
    badge: 'Bumi & Antariksa',
    bgGradient: 'from-indigo-600/20 to-violet-800/20 border-indigo-500/30 text-indigo-400',
    lessonsCount: 3,
  },
  {
    id: 'sains-umum',
    title: 'Sains Umum',
    description: 'Mempelajari metode ilmiah, variabel eksperimen, keselamatan laboratorium, serta pengukuran besaran IPA.',
    icon: 'Microscope',
    color: 'purple',
    badge: 'Metode & Pengukuran',
    bgGradient: 'from-purple-600/20 to-fuchsia-800/20 border-purple-500/30 text-purple-400',
    lessonsCount: 2,
  },
];

export const LESSON_MODULES: LessonModule[] = [
  // ==========================================
  // --- BIOLOGI ---
  // ==========================================
  {
    id: 'bio-1',
    categoryId: 'biologi',
    title: 'Sistem Pencernaan & Organ Tubuh Manusia',
    targetGrade: 'SD Kelas 4 - SMP Kelas 8',
    description: 'Pahami bagaimana makanan diolah menjadi energi oleh organ pencernaan manusia secara mekanis dan kimiawi.',
    iconName: 'Activity',
    color: 'emerald',
    pages: [
      {
        pageNumber: 1,
        title: 'Organ Pencernaan Utama: Mulut, Kerongkongan & Lambung',
        content: `Sistem pencernaan manusia adalah rangkaian organ terintegrasi yang bekerja memecah makanan berukuran besar menjadi zat-zat gizi mikro yang dapat diserap sel tubuh.

Proses pencernaan dibagi menjadi dua jenis:
1. **Pencernaan Mekanis**: Pemecahan fisik makanan tanpa merusak struktur kimianya (misalnya gigi mengunyah makanan di mulut).
2. **Pencernaan Kimiawi**: Pemecahan ikatan kimia molekul makanan bantuan **enzim penceran**.

Urutan organ bagian atas:
- **Mulut**: Gigi memotong makanan, sementara kelenjar ludah menghasilkan enzim **Amilase (Ptialin)** untuk mengubah amilum (karbohidrat kompleks) menjadi glukosa sederhana.
- **Kerongkongan (Esofagus)**: Tabung berotot yang melakukan gerakan **Peristaltik**—yaitu gerakan meremas dan mendorong bolus makanan secara bergelombang menuju lambung.
- **Lambung**: Makanan diolah secara asam dengan cairan lambung yang mengandung **Asam Klorida (HCl)** untuk membunuh kuman penyakit, serta enzim **Pepsin** untuk memecah protein menjadi pepton, dan enzim **Renin** untuk mengendapkan protein susu (kasein).`,
        keyTakeaway: 'Amilase mengubah amilum di mulut, gerakan peristaltik mendorong makanan di kerongkongan, dan HCl di lambung membunuh kuman.',
        microQuestion: {
          id: 'bio-1-q1',
          question: 'Enzim yang diproduksi oleh kelenjar ludah di mulut untuk memecah karbohidrat amilum menjadi gula sederhana adalah?',
          options: ['Pepsin', 'Amilase (Ptialin)', 'Renin', 'Tripsin'],
          correctIndex: 1,
          explanation: 'Tepat sekali! Enzim Amilase (Ptialin) bertugas mencerna karbohidrat secara kimiawi saat makanan dikunyah di dalam mulut.',
        },
      },
      {
        pageNumber: 2,
        title: 'Usus Halus, Jonjot Vili & Penyerapan Nutrisi',
        content: `Setelah diproses di lambung selama 2–4 jam, bubur makanan (kim) masuk ke dalam **Usus Halus (Intestinum Tenue)**.

Usus halus terbagi menjadi tiga bagian utama:
1. **Usus 12 Jari (Duodenum)**: Tempat muara saluran kantung empedu (yang mengemulsikan lemak) dan pankreas (penghasil enzim lipase, tripsin, amilase).
2. **Usus Kosong (Jejunum)**: Tempat pencernaan kimiawi lanjutan.
3. **Usus Penyerapan (Ileum)**: Tempat terjadinya penyerapan nutrisi utama (glukosa, asam amino, asam lemak, vitamin, dan mineral) ke dalam sistem peredaran darah.

Permukaan dalam usus halus dilapisi oleh jutaan lipatan halus yang disebut **Vili (Jonjot Usus)**. Vili berfungsi memperluas daerah penyerapan sari makanan hingga puluhan meter persegi agar nutrisi terserap secara efisien ke dalam pembuluh darah kapiler.`,
        keyTakeaway: 'Usus halus adalah lokasi utama penyerapan nutrisi makanan dengan bantuan lipatan jonjot usus (vili).',
        microQuestion: {
          id: 'bio-1-q2',
          question: 'Struktur berupa jutaan tonjolan halus pada dinding dalam usus halus yang berfungsi memperluas bidang penyerapan nutrisi dinamakan?',
          options: ['Stomata', 'Vili (Jonjot Usus)', 'Alveolus', 'Nefron'],
          correctIndex: 1,
          explanation: 'Benar! Vili memperluas permukaan dalam usus halus sehingga sari-sari makanan terserap maksimal ke pembuluh darah.',
        },
      },
      {
        pageNumber: 3,
        title: 'Usus Besar, Bakteri E. Coli & Gangguan Pencernaan',
        content: `Sisa makanan yang tidak terserap di usus halus akan diteruskan menuju **Usus Besar (Kolon)**.

Fungsi Utama Usus Besar:
- **Penyerapan Air & Garam Mineral**: Mengatur kadar air pada sisa makanan agar feses tidak terlalu cair atau terlalu padat.
- **Pembusukan Sisa Makanan**: Dibantu oleh bakteri menguntungkan **Escherichia coli (E. coli)**. Bakteri ini membantu membusukkan sisa organik sekaligus menghasilkan **Vitamin K** dan **Vitamin B12** yang berguna bagi tubuh.
- **Rektum & Anus**: Rektum menjadi penampung sementara feses sebelum dikeluarkan melalui lubang Anus pada proses defekasi.

Gangguan Kesehatan Sistem Pencernaan:
- **Maag (Gastritis)**: Peradangan dinding lambung akibat asam lambung (HCl) berlebih atau infeksi bakteri.
- **Diare**: Penyerapan air di usus besar terganggu akibat infeksi kuman, menyebabkan feses encer.
- **Konstipasi (Sembelit)**: Penyerapan air terlalu banyak di usus besar akibat kurang konsumsi makanan berserat (sayur dan buah).`,
        keyTakeaway: 'Bakteri E. coli di usus besar membusukkan sisa makanan dan menghasilkan Vitamin K, sementara serat mencegah sembelit.',
        microQuestion: {
          id: 'bio-1-q3',
          question: 'Bakteri simbiotik yang mendiami usus besar manusia dan membantu pembusukan sisa makanan serta pembentukan Vitamin K adalah?',
          options: ['Lactobacillus bulgaricus', 'Escherichia coli', 'Salmonella typhi', 'Rhizobium leguminosarum'],
          correctIndex: 1,
          explanation: 'Sempurna! Escherichia coli (E. coli) adalah bakteri pembusuk bermanfaat di dalam usus besar manusia.',
        },
      },
    ],
  },
  {
    id: 'bio-2',
    categoryId: 'biologi',
    title: 'Fotosintesis, Respirasi & Ekosistem Tumbuhan',
    targetGrade: 'SD Kelas 5 - SMP Kelas 7',
    description: 'Bagaimana tumbuhan hijau mengolah sinar matahari menjadi bahan organik dan menjaga rantai makanan dalam ekosistem.',
    iconName: 'Leaf',
    color: 'emerald',
    pages: [
      {
        pageNumber: 1,
        title: 'Mekanisme Fotosintesis & Pigmen Klorofil',
        content: `Tumbuhan hijau dikelompokkan sebagai organisme **Autotrof** (Produsen) karena mampu memasak makanannya sendiri melalui proses kimia biologi yang disebut **Fotosintesis**.

Fotosintesis terjadi di dalam organel sel tumbuhan bernama **Kloroplas**, yang kaya akan zat warna hijau bernama **Klorofil**.

Bahan Dasar Fotosintesis:
1. **Air ($H_2O$)**: Diserap dari dalam tanah oleh bulu-bulu akar, lalu diangkut menuju daun melalui pembuluh kayu (**Xilem**).
2. **Karbondioksida ($CO_2$)**: Dihirup dari udara bebas melalui pori-pori mikroskopis pada permukaan daun yang disebut **Stomata**.
3. **Energi Foton Cahaya**: Diserap oleh pigmen klorofil pada daun dari paparan sinar matahari.

Persamaan Reaksi Kimia Fotosintesis:
$$6CO_2 + 6H_2O \\xrightarrow{\\text{Cahaya + Klorofil}} C_6H_{12}O_6 \\text{ (Glukosa)} + 6O_2 \\text{ (Oksigen)}$$`,
        keyTakeaway: 'Air diangkut xilem, Karbondioksida masuk lewat stomata, dan cahaya diserap klorofil di kloroplas.',
        microQuestion: {
          id: 'bio-2-q1',
          question: 'Pori-pori mikroskopis pada daun tempat masuknya gas karbondioksida dan keluarnya gas oksigen dinamakan?',
          options: ['Xilem', 'Stomata', 'Floem', 'Kambium'],
          correctIndex: 1,
          explanation: 'Benar! Stomata adalah mulut daun yang berfungsi sebagai organ pertukaran gas $CO_2$ dan $O_2$.',
        },
      },
      {
        pageNumber: 2,
        title: 'Hasil Fotosintesis & Alokasi Energi Tumbuhan',
        content: `Proses fotosintesis menghasilkan dua produk penting bagi keberlangsungan makhluk hidup di bumi:

1. **Glukosa ($C_6H_{12}O_6$)**:
   - Merupakan gula sederhana karbohidrat yang digunakan tumbuhan sebagai sumber energi pertumbuhan, pembentukan sel baru, bunga, dan buah.
   - Kelebihan glukosa disimpannya dalam bentuk karbohidrat cadangan yaitu **Amilum/Tepung** pada akar (singkong), batang (sagu), biji (padi, jagung), atau buah (pisang).
   - Makanan ini diangkut ke seluruh bagian tumbuhan melalui pembuluh tapis (**Floem**).

2. **Gas Oksigen ($O_2$)**:
   - Dilepaskan ke udara melalui stomata. Gas ini mutlak diperlukan oleh manusia, hewan, dan mikrobia untuk proses **Respirasi (Pernapasan)**.

Respirasi Tumbuhan:
Pada malam hari ketika tidak ada cahaya matahari, tumbuhan melakukan respirasi dengan menyerap oksigen dan melepaskan karbondioksida untuk memecah cadangan gula menjadi energi seluler.`,
        keyTakeaway: 'Hasil fotosintesis adalah Glukosa yang diangkut floem dan Oksigen yang dilepas ke atmosfer.',
        microQuestion: {
          id: 'bio-2-q2',
          question: 'Pembuluh pada tumbuhan yang bertugas mengangkut zat hasil fotosintesis dari daun ke seluruh bagian tumbuhan adalah?',
          options: ['Pembuluh Xilem', 'Pembuluh Floem', 'Pembuluh Kapiler', 'Epidermis'],
          correctIndex: 1,
          explanation: 'Hebat! Pembuluh Floem bertugas menyalurkan hasil fotosintesis (glukosa) dari daun ke seluruh jaringan tumbuhan.',
        },
      },
      {
        pageNumber: 3,
        title: 'Jaring-Jaring Makanan & Peran Dekomposer',
        content: `Di dalam suatu **Ekosistem**, terjadi interaksi makan-memakan antarmakhluk hidup yang membentuk rantai makanan dan jaring-jaring makanan.

Tingkatan Tropik dalam Rantai Makanan:
1. **Produsen (Tingkat Tropik I)**: Tumbuhan hijau yang menghasilkan energi organik sendiri melalui fotosintesis.
2. **Konsumen Primer / Herbivora (Tingkat Tropik II)**: Hewan pemakan tumbuhan (contoh: belalang, kelinci, sapi).
3. **Konsumen Sekunder / Karnivora (Tingkat Tropik III)**: Hewan pemakan pemakan tumbuhan (contoh: katak, ular).
4. **Konsumen Tersier / Puncak**: Pemangsa tingkat tinggi (contoh: elang, singa).
5. **Pengurai (Dekomposer)**: Organisme seperti **Jamur (Fungi)** dan **Bakteri** yang menguraikan sisa bangkai makhluk hidup menjadi hara anorganik untuk menyuburkan tanah kembali.`,
        keyTakeaway: 'Tumbuhan sebagai produsen memulai aliran energi, sedangkan dekomposer mengembalikan nutrisi organik ke tanah.',
        microQuestion: {
          id: 'bio-2-q3',
          question: 'Organisme yang berperan menguraikan materi organik dari bangkai hewan dan tumbuhan mati menjadi hara tanah adalah?',
          options: ['Herbivora', 'Dekomposer (Pengurai)', 'Konsumen Puncak', 'Produsen Autotrof'],
          correctIndex: 1,
          explanation: 'Tepat! Dekomposer seperti jamur dan bakteri menguraikan sampah organik menjadi zat hara untuk menyuburkan tanah.',
        },
      },
    ],
  },
  {
    id: 'bio-3',
    categoryId: 'biologi',
    title: 'Sistem Peredaran Darah Manusia (Sirkulasi)',
    targetGrade: 'SD Kelas 5 - SMP Kelas 8',
    description: 'Menjelajahi komponen darah, struktur jantung 4 ruang, dan jalur sirkulasi darah besar dan kecil.',
    iconName: 'Heart',
    color: 'emerald',
    pages: [
      {
        pageNumber: 1,
        title: 'Komponen Utama Darah Manusia',
        content: `Darah manusia merupakan jaringan ikat cair yang berfungsi mengedarkan oksigen, sari makanan, hormon, serta mengangkut sisa metabolisme.

Darah terdiri dari 4 komponen utama:
1. **Plasma Darah (55%)**: Cairan kekuningan yang 90% terdiri dari air, protein plasma (albumin, fibrinogen), dan melarutkan sari makanan.
2. **Sel Darah Merah (Eritrosit)**:
   - Berbentuk cakram bikonkaf tanpa inti sel.
   - Mengandung **Hemoglobin (Hb)**, zat besi penyikat oksigen ($O_2$) dari paru-paru ke seluruh jaringan tubuh.
3. **Sel Darah Putih (Leukosit)**:
   - Berfungsi sebagai sistem kekebalan tubuh (imunitas) membasmi kuman, bakteri, dan virus berbahaya.
4. **Keping Darah (Trombosit)**:
   - Berperan penting dalam proses **pembekuan darah** saat terjadi luka menggunakan protein fibrinogen.`,
        keyTakeaway: 'Eritrosit berisi hemoglobin pengangkut $O_2$, leukosit melawan penyakit, dan trombosit membekukan luka.',
        microQuestion: {
          id: 'bio-3-q1',
          question: 'Komponen darah yang mengandung pigmen hemoglobin dan berfungsi mengangkut oksigen dari paru-paru adalah?',
          options: ['Plasma Darah', 'Sel Darah Merah (Eritrosit)', 'Sel Darah Putih (Leukosit)', 'Trombosit'],
          correctIndex: 1,
          explanation: 'Sempurna! Eritrosit kaya akan protein Hemoglobin yang sanggup mengikat gas Oksigen.',
        },
      },
      {
        pageNumber: 2,
        title: 'Organ Jantung & Pembuluh Darah',
        content: `**Jantung** manusia adalah organ pemompa darah berotot tebal yang terletak di dalam rongga dada sebelah kiri.

Jantung terdiri dari 4 Ruang Utama:
1. **Serambi Kanan (Atrium Dekster)**: Menerima darah kaya $CO_2$ dari seluruh tubuh.
2. **Serambi Kiri (Atrium Sinister)**: Menerima darah kaya $O_2$ dari paru-paru.
3. **Bilik Kanan (Ventrikel Dekster)**: Memompa darah kaya $CO_2$ menuju paru-paru.
4. **Bilik Kiri (Ventrikel Sinister)**: Dinding paling tebal, memompa darah kaya $O_2$ ke seluruh tubuh.

Perbedaan Pembuluh Darah:
- **Pembuluh Nadi (Arteri)**: Dinding tebal dan elastis, mengalirkan darah **keluar meninggalkan jantung**. Arteri terbesar dinamakan **Aorta**.
- **Pembuluh Balik (Vena)**: Dinding tipis, memiliki katup sepanjang pembuluh, mengalirkan darah **menuju kembali ke jantung**.`,
        keyTakeaway: 'Bilik kiri memompa darah bersih ke seluruh tubuh lewat aorta, arteri membawa darah keluar jantung, vena masuk ke jantung.',
        microQuestion: {
          id: 'bio-3-q2',
          question: 'Ruang jantung yang memiliki dinding otot paling tebal karena bertugas memompa darah bersih ($O_2$) ke seluruh tubuh adalah?',
          options: ['Serambi Kanan', 'Bilik Kanan', 'Serambi Kiri', 'Bilik Kiri'],
          correctIndex: 3,
          explanation: 'Benar! Bilik Kiri (Ventrikel Sinister) membutuhkan otot ekstra tebal untuk memompa darah hingga ke organ terjauh.',
        },
      },
      {
        pageNumber: 3,
        title: 'Peredaran Darah Kecil vs Peredaran Darah Besar',
        content: `Sistem sirkulasi darah manusia disebut **Peredaran Darah Ganda** karena darah melewati jantung sebanyak dua kali dalam satu putaran lengkap.

1. **Peredaran Darah Kecil (Sirkulasi Pulmonalis)**:
   - Sirkulasinya singkat: Dari jantung menuju paru-paru lalu kembali ke jantung.
   - Skema: **Bilik Kanan $\\rightarrow$ Arteri Pulmonalis $\\rightarrow$ Paru-paru $\\rightarrow$ Vena Pulmonalis $\\rightarrow$ Serambi Kiri**.
   - Tujuan: Membuang $CO_2$ dan mengambil $O_2$ baru di alveolus paru-paru.

2. **Peredaran Darah Besar (Sirkulasi Sistemik)**:
   - Sirkulasinya luas: Dari jantung menuju seluruh organ tubuh lalu kembali ke jantung.
   - Skema: **Bilik Kiri $\\rightarrow$ Aorta $\\rightarrow$ Seluruh Tubuh $\\rightarrow$ Vena Cava $\\rightarrow$ Serambi Kanan**.
   - Tujuan: Menyuplai oksigen dan nutrisi bagi seluruh jaringan tubuh manusia.`,
        keyTakeaway: 'Peredaran kecil membawa darah ke paru-paru, peredaran besar mengedarkan darah ke seluruh tubuh.',
        microQuestion: {
          id: 'bio-3-q3',
          question: 'Urutan rute peredaran darah kecil (pulmonalis) pada manusia yang benar adalah?',
          options: [
            'Bilik Kiri -> Seluruh Tubuh -> Serambi Kanan',
            'Bilik Kanan -> Paru-paru -> Serambi Kiri',
            'Serambi Kiri -> Paru-paru -> Bilik Kanan',
            'Serambi Kanan -> Seluruh Tubuh -> Bilik Kiri'
          ],
          correctIndex: 1,
          explanation: 'Tepat sekali! Peredaran darah kecil berjalan dari Bilik Kanan -> Paru-paru -> Serambi Kiri.',
        },
      },
    ],
  },
  {
    id: 'bio-4',
    categoryId: 'biologi',
    title: 'Sistem Pernapasan Manusia & Alveolus',
    targetGrade: 'SD Kelas 5 - SMP Kelas 8',
    description: 'Mengenal jalur masuknya udara, mekanisme pernapasan dada dan perut, serta pertukaran gas di alveolus.',
    iconName: 'Wind',
    color: 'emerald',
    pages: [
      {
        pageNumber: 1,
        title: 'Jalur Pernapasan & Difusi Alveolus',
        content: `Sistem pernapasan (respirasi) berfungsi mengambil oksigen ($O_2$) dari lingkungan untuk pembakaran seluler dan mengeluarkan karbondioksida ($CO_2$).

Urutan Jalur Pernapasan:
1. **Rongga Hidung**: Udara disaring oleh rambut hidung, dihangatkan oleh kapiler, dan disesuaikan kelembabannya oleh selaput lendir.
2. **Tenggorokan (Trakea)**: Memiliki silia (rambut getar) untuk menolak debu/kotoran asing.
3. **Bronkus & Bronkiolus**: Cabang batang tenggorokan menuju paru-paru kanan dan kiri.
4. **Alveolus**: Gelembung-gelembung udara berdinding tipis di ujung bronkiolus yang terbungkus pembuluh darah kapiler. Di alveolus inilah terjadi **difusi gas**, yaitu penyerapan oksigen ke dalam darah dan pelepasan karbondioksida dari darah ke udara.`,
        keyTakeaway: 'Rongga hidung menyaring & menyesuaikan suhu udara, sedangkan difusi gas berlangsung di alveolus.',
        microQuestion: {
          id: 'bio-4-q1',
          question: 'Bagian paru-paru tempat terjadinya pertukaran gas Oksigen ($O_2$) dan Karbondioksida ($CO_2$) secara difusi adalah?',
          options: ['Trakea', 'Bronkus', 'Alveolus', 'Laring'],
          correctIndex: 2,
          explanation: 'Benar! Alveolus adalah gelembung udara mikroskopis tempat pertukaran gas $O_2$ dan $CO_2$.',
        },
      },
      {
        pageNumber: 2,
        title: 'Pernapasan Dada vs Pernapasan Perut',
        content: `Mekanisme bernapas terdiri dari dua fase: **Inspirasi** (menghirup udara) dan **Ekspirasi** (menghembuskan udara).

Berdasarkan otot yang bekerja, bernapas dibagi dua:
1. **Pernapasan Dada**:
   - Melibatkan gerakan **otot antartulang rusuk (interkostal)**.
   - *Inspirasi*: Otot antartulang rusuk berkontraksi $\\rightarrow$ tulang rusuk terangkat $\\rightarrow$ rongga dada membesar $\\rightarrow$ tekanan memgecil $\\rightarrow$ udara masuk.

2. **Pernapasan Perut**:
   - Melibatkan gerakan otot sekat rongga dada yaitu **Diafragma**.
   - *Inspirasi*: Diafragma berkontraksi menjadi **mendatar** $\\rightarrow$ rongga dada membesar $\\rightarrow$ udara masuk.
   - *Ekspirasi*: Diafragma berelaksasi menjadi **melengkung ke atas** $\\rightarrow$ rongga dada mengecil $\\rightarrow$ udara terdorong keluar.`,
        keyTakeaway: 'Pernapasan dada dipengaruhi otot tulang rusuk, pernapasan perut dipengaruhi kontraksi diafragma.',
        microQuestion: {
          id: 'bio-4-q2',
          question: 'Saat kita melakukan inspirasi pada pernapasan perut, otot diafragma akan berkontraksi sehingga posisinya menjadi?',
          options: ['Mendatar', 'Melengkung ke atas', 'Mengecil', 'Terangkat ke dada'],
          correctIndex: 0,
          explanation: 'Sempurna! Saat berkontraksi (inspirasi), otot diafragma mendatar sehingga kapasitas rongga dada membesar.',
        },
      },
    ],
  },

  // ==========================================
  // --- KIMIA ---
  // ==========================================
  {
    id: 'kim-1',
    categoryId: 'kimia',
    title: 'Struktur Atom, Partikel Subatomik & Unsur',
    targetGrade: 'SMP Kelas 7 - Kelas 9',
    description: 'Mengenal partikel dasar proton, neutron, elektron, serta perbedaan unsur, senyawa, dan campuran.',
    iconName: 'Atom',
    color: 'amber',
    pages: [
      {
        pageNumber: 1,
        title: 'Pengenalan Partikel Subatomik',
        content: `**Atom** adalah bagian terkecil penyusun materi yang tidak dapat dibagi lagi menjadi bagian yang lebih sederhana menggunakan reaksi kimia biasa.

Setiap atom terdiri dari tiga partikel dasar subatomik:
1. **Proton**: Partikel bermuatan **Positif (+1)**, terletak di dalam **Inti Atom (Nukleus)**.
2. **Neutron**: Partikel yang **Tidak Bermuatan / Netral (0)**, terletak bersama proton di dalam **Inti Atom**.
3. **Elektron**: Partikel bermuatan **Negatif (-1)**, berukuran sangat kecil dan bergerak sangat cepat mengelilingi inti atom pada lintasan kulit atom.

Massa atom terpusat pada Inti Atom karena massa proton dan neutron jauh lebih berat dibandingkan massa elektron.`,
        keyTakeaway: 'Proton (+) dan Neutron (0) berada di inti atom, sedangkan Elektron (-) mengelilingi inti di kulit atom.',
        microQuestion: {
          id: 'kim-1-q1',
          question: 'Partikel penyusun inti atom yang tidak memiliki muatan listrik (netral) dinamakan?',
          options: ['Proton', 'Elektron', 'Neutron', 'Kation'],
          correctIndex: 2,
          explanation: 'Hebat! Neutron adalah partikel netral tanpa muatan listrik di dalam inti atom.',
        },
      },
      {
        pageNumber: 2,
        title: 'Nomor Atom, Nomor Massa & Perhitungan Partikel',
        content: `Dalam tabel periodik unsur, setiap atom dituliskan dengan lambang unsur berpenanda nomor khusus:
$$_Z^A X$$

Keterangan Notasi Unsur:
- $X$ = Lambang Kimia Unsur (contoh: $Na$ untuk Natrium, $O$ untuk Oksigen).
- $Z$ = **Nomor Atom**: Menunjukkan jumlah **Proton** di dalam inti atom.
- $A$ = **Nomor Massa**: Menunjukkan jumlah **Proton + Neutron**.

Rumus Menghitung Partikel Atom Netral:
- **Jumlah Proton** = $Z$
- **Jumlah Elektron** = $Z$ (karena atom netral jumlah positif dan negatif sama)
- **Jumlah Neutron** = $A - Z$ (Nomor Massa dikurangi Nomor Atom)

*Contoh Perhitungan*: Unsur Natrium $_{11}^{23}Na$ memiliki:
Proton = 11, Elektron = 11, dan Neutron = $23 - 11 = 12$.`,
        keyTakeaway: 'Jumlah neutron dihitung dari Nomor Massa (A) dikurangi Nomor Atom (Z).',
        microQuestion: {
          id: 'kim-1-q2',
          question: 'Jika suatu atom netral Karbon memiliki Nomor Atom Z = 6 dan Nomor Massa A = 12, berapa jumlah neutronnya?',
          options: ['6', '12', '18', '0'],
          correctIndex: 0,
          explanation: 'Tepat sekali! Jumlah neutron = Nomor Massa (12) - Nomor Atom (6) = 6 neutron.',
        },
      },
      {
        pageNumber: 3,
        title: 'Klasifikasi Materi: Unsur, Senyawa & Campuran',
        content: `Materi di alam dapat diklasifikasikan menjadi zat murni dan campuran:

1. **Unsur**:
   - Zat tunggal murni paling sederhana yang tidak dapat diuraikan lagi menjadi zat lain.
   - *Contoh*: Emas ($Au$), Besi ($Fe$), Oksigen ($O_2$), Tembaga ($Cu$).

2. **Senyawa**:
   - Zat murni gabungan dari 2 atau lebih unsur berbeda yang terikat secara reaksi kimiawi dengan perbandingan tetap.
   - Sifat senyawa berbeda total dari sifat unsur penyusunnya.
   - *Contoh*: Air ($H_2O$), Garam Dapur ($NaCl$), Karbondioksida ($CO_2$).

3. **Campuran**:
   - Gabungan 2 atau lebih zat tanpa reaksi kimia, sehingga sifat asal zat penyusunnya masih tetap ada.
   - *Homogen (Larutan)*: Serba sama, tak bisa dibedakan komponennya (contoh: air gula, sirup, udara).
   - *Heterogen*: Masih dapat dibedakan batas zatnya (contoh: campuran air dan pasir, air dan minyak).`,
        keyTakeaway: 'Air ($H_2O$) dan Garam ($NaCl$) adalah Senyawa, sedangkan Air gula adalah Campuran Homogen.',
        microQuestion: {
          id: 'kim-1-q3',
          question: 'Air murni ($H_2O$) yang terdiri dari ikatan unsur Hidrogen dan Oksigen dikelompokkan sebagai?',
          options: ['Unsur Tunggal', 'Senyawa', 'Campuran Heterogen', 'Partikel Bebas'],
          correctIndex: 1,
          explanation: 'Benar! Air adalah Senyawa kimia gabungan unsur Hidrogen dan Oksigen.',
        },
      },
    ],
  },
  {
    id: 'kim-2',
    categoryId: 'kimia',
    title: 'Larutan Asam, Basa, Garam & Indikator pH',
    targetGrade: 'SMP Kelas 7 - Kelas 9',
    description: 'Pelajari derajat keasaman pH, uji kertas lakmus, serta reaksi netralisasi pembentukan garam.',
    iconName: 'TestTube',
    color: 'amber',
    pages: [
      {
        pageNumber: 1,
        title: 'Sifat Asam, Basa & Skala pH',
        content: `Sifat kimia larutan air ditentukan oleh konsentrasi ion hidrogen ($H^+$) dan ion hidroksida ($OH^-$), yang diukur menggunakan **Skala pH (0 sampai 14)**.

1. **Larutan Asam (pH < 7)**:
   - Terionisasi melepaskan ion $H^+$ dalam air.
   - Memiliki rasa masam, bersifat **Korosif** (mengikis logam).
   - *Contoh*: Cuka dapur (Asam Asetat), Asam Lambung ($HCl$), Jeruk nipis.

2. **Larutan Netral (pH = 7)**:
   - Konsentrasi $H^+$ sama dengan $OH^-$.
   - *Contoh*: Air murni ($H_2O$), larutan garam meja.

3. **Larutan Basa (pH > 7)**:
   - Terionisasi melepaskan ion $OH^-$ dalam air.
   - Memiliki rasa pahit, terasa licin di kulit (seperti sabun), dan bersifat **Kaustik**.
   - *Contoh*: Sabun mandi, pembersih kaca (Amonia), Obat maag ($Mg(OH)_2$).`,
        keyTakeaway: 'Asam (pH < 7) kaya ion $H^+$, Netral (pH = 7), Basa (pH > 7) kaya ion $OH^-$.',
        microQuestion: {
          id: 'kim-2-q1',
          question: 'Larutan yang memiliki derajat keasaman pH lebih besar dari 7 dikategorikan sebagai larutan?',
          options: ['Asam', 'Basa', 'Netral', 'Anorganik'],
          correctIndex: 1,
          explanation: 'Tepat! Larutan Basa memiliki pH > 7 dan menghasilkan ion $OH^-$ dalam air.',
        },
      },
      {
        pageNumber: 2,
        title: 'Uji Indikator Lakmus & Indikator Alami',
        content: `Untuk mengetahui apakah suatu larutan bersifat asam atau basa secara aman, ilmuwan menggunakan **Indikator Asam-Basa**.

Perubahan Warna Kertas Lakmus:
- **Kertas Lakmus Merah**:
  - Tetap **MERAH** dalam larutan Asam dan Netral.
  - Berubah menjadi **BIRU** dalam larutan Basa.

- **Kertas Lakmus Biru**:
  - Berubah menjadi **MERAH** dalam larutan Asam.
  - Tetap **BIRU** dalam larutan Basa dan Netral.

Indikator Alami:
Ekstrak tumbuhan berwarna pekat seperti **Kunyit** (berubah warna kuning cerah ke merah bata dalam basa), **Bunga Sepatu**, dan **Kubis Ungu** dapat dimanfaatkan sebagai indikator keasaman alami di lingkungan sekitar.`,
        keyTakeaway: 'Asam membuat lakmus biru jadi MERAH, Basa membuat lakmus merah jadi BIRU.',
        microQuestion: {
          id: 'bio-kim-2-q2',
          question: 'Jika kertas lakmus merah dicelupkan ke dalam larutan pembersih lantai yang bersifat basa, warna kertas lakmus akan berubah menjadi?',
          options: ['Kuning', 'Hijau', 'Biru', 'Merah Muda'],
          correctIndex: 2,
          explanation: 'Sempurna! Larutan Basa selalu mengubah warna kertas lakmus merah menjadi Biru.',
        },
      },
      {
        pageNumber: 3,
        title: 'Reaksi Netralisasi Pembentukan Garam',
        content: `Ketika larutan Asam direaksikan dengan larutan Basa dalam jumlah seimbang, sifat asam dan basanya akan saling menetralkan. Reaksi ini disebut **Reaksi Netralisasi**.

Persamaan Umum Reaksi Netralisasi:
$$\\text{Asam} + \\text{Basa} \\rightarrow \\text{Garam} + \\text{Air}$$

*Contoh Reaksi*:
Reaksi Asam Klorida ($HCl$) dengan Natrium Hidroksida ($NaOH$):
$$HCl + NaOH \\rightarrow NaCl \\text{ (Garam Dapur)} + H_2O \\text{ (Air)}$$

Penerapan Sehari-hari:
Penderita penyakit maag yang mengalami kelebihan asam lambung ($HCl$) meminum obat maag bersifat basa lambung ($Mg(OH)_2$) agar asam netral kembali.`,
        keyTakeaway: 'Reaksi Asam + Basa menghasilkan Garam dan Air yang bersifat netral.',
        microQuestion: {
          id: 'kim-2-q3',
          question: 'Reaksi kimia antara zat asam dan zat basa akan menghasilkan dua produk utama yaitu?',
          options: ['Logam dan Gas Oksigen', 'Garam dan Air', 'Minyak dan Busa', 'Asam Pekat dan Karbon'],
          correctIndex: 1,
          explanation: 'Benar! Reaksi netralisasi antara Asam dan Basa menghasilkan senyawa Garam dan Air.',
        },
      },
    ],
  },
  {
    id: 'kim-3',
    categoryId: 'kimia',
    title: 'Perubahan Fisika vs Kimia & Wujud Zat',
    targetGrade: 'SD Kelas 5 - SMP Kelas 8',
    description: 'Pelajari fase padat, cair, gas, perubahan wujud materi, serta indikator reaksi kimia.',
    iconName: 'Sparkles',
    color: 'amber',
    pages: [
      {
        pageNumber: 1,
        title: '3 Wujud Zat & Siklus Perubahan Wujud',
        content: `Seluruh materi di alam semesta dikelompokkan dalam 3 wujud utama: **Padat**, **Cair**, dan **Gas**.

Sifat Partikel Zat:
- **Padat**: Bentuk dan volume tetap, jarak antarpartikel sangat rapat, gaya tarik sangat kuat.
- **Cair**: Volume tetap tetapi bentuk berubah menyesuaikan wadah, gaya tarik agak lemah.
- **Gas**: Bentuk dan volume berubah memenuhi ruangan, partikel sangat renggang dan bebas bergerak.

Istilah Perubahan Wujud Materi:
- **Mencair**: Padat $\\rightarrow$ Cair (es mencair).
- **Membeku**: Cair $\\rightarrow$ Padat (air jadi es).
- **Menguap**: Cair $\\rightarrow$ Gas (air mendidih).
- **Mengembun**: Gas $\\rightarrow$ Cair (titik air di luar gelas dingin).
- **Menyublim**: Padat $\\rightarrow$ Gas (Kapur barus / kamper mengecil).
- **Mengkristal (Deposisi)**: Gas $\\rightarrow$ Padat (pembentukan salju/jelaga).`,
        keyTakeaway: 'Menyublim adalah perubahan padat ke gas, sedangkan mengkristal adalah gas ke padat.',
        microQuestion: {
          id: 'kim-3-q1',
          question: 'Peristiwa perubahan wujud kapur barus (kamper) dari wujud padat langsung menjadi gas dinamakan?',
          options: ['Menguap', 'Menyublim', 'Mengembun', 'Mencair'],
          correctIndex: 1,
          explanation: 'Hebat! Menyublim adalah perubahan wujud langsung dari zat padat menjadi gas.',
        },
      },
      {
        pageNumber: 2,
        title: 'Perubahan Fisika vs Perubahan Kimia',
        content: `Perubahan zat dibedakan berdasarkan terbentuk atau tidaknya zat jenis baru:

1. **Perubahan Fisika**:
   - Perubahan yang **TIDAK menghasilkan zat baru**.
   - Bersifat sementara dan umumnya dapat kembali ke bentuk semula (reversible).
   - Hanya terjadi perubahan wujud, bentuk, atau ukuran fisik semata.
   - *Contoh*: Es mencair, kertas digunting, beras ditumbuk jadi tepung, gula larut dalam air.

2. **Perubahan Kimia (Reaksi Kimia)**:
   - Perubahan yang **MENGHASILKAN ZAT BARU** dengan sifat kimia berbeda.
   - Bersifat permanen (irreversible).
   - *Contoh*: Kayu dibakar jadi abu, besi berkarat ($Fe_2O_3$), singkong difermetasi jadi tapai, makanan membusuk.`,
        keyTakeaway: 'Perubahan fisika tidak menghasilkan zat baru, sedangkan perubahan kimia menghasilkan zat baru.',
        microQuestion: {
          id: 'kim-3-q2',
          question: 'Peristiwa beras ditumbuk halus hingga menjadi tepung beras tergolong dalam contoh perubahan?',
          options: ['Perubahan Kimia', 'Perubahan Fisika', 'Perubahan Biologis', 'Perubahan Nuklir'],
          correctIndex: 1,
          explanation: 'Benar! Penumbukan beras hanya mengubah ukuran bentuk fisik tanpa mengubah zat kimianya.',
        },
      },
    ],
  },

  // ==========================================
  // --- FISIKA ---
  // ==========================================
  {
    id: 'fis-1',
    categoryId: 'fisika',
    title: 'Gaya, Hukum Newton & Gerak Benda',
    targetGrade: 'SD Kelas 6 - SMP Kelas 8',
    description: 'Pahami gaya tarik/dorong, 3 Hukum Newton tentang gerak, dan gaya gesek dalam kehidupan.',
    iconName: 'Move',
    color: 'sky',
    pages: [
      {
        pageNumber: 1,
        title: 'Pengertian Gaya & Jenis-Jenis Gaya',
        content: `**Gaya** (dilambangkan $F$, satuan **Newton / N**) adalah interaksi berupa **tarikan** atau **dorongan** yang diberikan pada suatu benda.

Gaya dapat menyebabkan perubahan pada benda:
- Mengubah posisi/kecepatan (benda diam jadi bergerak).
- Mengubah arah gerak benda.
- Mengubah bentuk atau ukuran benda (plastisin ditekan).

Pengelompokan Jenis Gaya:
1. **Gaya Sentuh**: Kontak langsung dengan benda. Contoh: Gaya Otot (menendang bola), Gaya Gesek, Gaya Pegas (ketapel).
2. **Gaya Tak Sentuh**: Tanpa kontak fisik langsung. Contoh: Gaya Gravitasi Bumi (buah jatuh), Gaya Magnet, Gaya Listrik Statis.`,
        keyTakeaway: 'Gaya adalah tarikan/dorongan berkonsep Newton ($N$) yang bisa mengubah gerak atau bentuk benda.',
        microQuestion: {
          id: 'fis-1-q1',
          question: 'Gaya tarik bumi yang menyebabkan benda jatuh melayang menuju ke permukaan bumi dinamakan gaya?',
          options: ['Gaya Pegas', 'Gaya Gravitasi', 'Gaya Gesek', 'Gaya Otot'],
          correctIndex: 1,
          explanation: 'Benar! Gaya Gravitasi adalah gaya tarik tak sentuh pusat bumi.',
        },
      },
      {
        pageNumber: 2,
        title: 'Tiga Hukum Newton tentang Gerak Benda',
        content: `Fisikawan Sir Isaac Newton merumuskan 3 hukum utama gerak benda:

1. **Hukum I Newton (Inersia / Kelembaman)**:
   - "Setiap benda cenderung mempertahankan keadaannya (diam tetap diam, bergerak tetap bergerak lurus beraturan) jika gaya total yang bekerja bernilai nol ($\\sum F = 0$)."
   - *Contoh*: Tubuh penumpang terdorong ke depan saat bus direm mendadak.

2. **Hukum II Newton**:
   - Percepatan ($a$) yang dialami benda berbanding lurus dengan gaya ($F$) dan berbanding terbalik dengan massa benda ($m$).
   - **Rumus**: $$F = m \\times a$$

3. **Hukum III Newton (Aksi - Reaksi)**:
   - "Setiap gaya aksi akan menimbulkan gaya reaksi yang sama besar tetapi berlawanan arah ($F_{\\text{aksi}} = -F_{\\text{reaksi}}$)."
   - *Contoh*: Semburan gas roket meluncur ke bawah menyebabkan badan roket meluncur pesat ke atas.`,
        keyTakeaway: 'Hukum I tentang kelembaman (inersia), Hukum II ($F=m \\cdot a$), Hukum III tentang Aksi-Reaksi.',
        microQuestion: {
          id: 'fis-1-q2',
          question: 'Sifat kecenderungan alami benda untuk mempertahankan posisinya (keadaan semula) dinamakan sifat?',
          options: ['Elastisitas', 'Inersia (Kelembaman)', 'Gravitasi', 'Kemagnetan'],
          correctIndex: 1,
          explanation: 'Tepat sekali! Inersia atau kelembaman dijelaskan dalam Hukum I Newton.',
        },
      },
      {
        pageNumber: 3,
        title: 'Gaya Gesek & Cara Mengatasinya',
        content: `**Gaya Gesek** adalah gaya yang timbul akibat dua permukaan benda yang saling bersentuhan dengan arah berlawanan dari arah gerak benda.

Faktor yang Mempengaruhi Gaya Gesek:
- **Kekasaran Permukaan**: Semakin kasar permukaan, gaya gesek semakin besar.
- **Gaya Normal / Berat Benda**: Semakin berat benda, gaya gesek semakin kuat.

Keuntungan & Kerugian Gaya Gesek:
- *Menguntungkan*: Bantal rem sepeda menghentikan roda, alur ban mobil mencegah slip licin di jalan basah.
- *Merugikan*: Mengikis rantai mesin kendaraan cepat aus, menghambat laju gerakan.

Cara Memperkecil Gaya Gesek:
Memoles oli pelumas, memasang bantalan roda (bearing/pelor), dan memperhalus permukaan kontak.`,
        keyTakeaway: 'Gaya gesek menahan gerakan benda. Oli pelumas digunakan untuk memperkecil gaya gesek.',
        microQuestion: {
          id: 'fis-1-q3',
          question: 'Untuk mengurangi aus dan memperkecil gaya gesek berlebih pada mesin mesin roda kendaraan, kita dapat menambahkan?',
          options: ['Serbuk Pasir', 'Oli Pelumas', 'Air Garam', 'Kertas Amplas'],
          correctIndex: 1,
          explanation: 'Sempurna! Pelumas oli melapisi permukaan logam agar gesekan menjadi licin dan lancar.',
        },
      },
    ],
  },
  {
    id: 'fis-2',
    categoryId: 'fisika',
    title: 'Energi, Gelombang, Cahaya & Sifat Optik',
    targetGrade: 'SD Kelas 6 - SMP Kelas 8',
    description: 'Pelajari energi kinetik & potensial, sifat perambatan cahaya, serta pembiasan cermin dan lensa.',
    iconName: 'Sun',
    color: 'sky',
    pages: [
      {
        pageNumber: 1,
        title: 'Bentuk Energi & Hukum Kekekalan Energi',
        content: `**Energi** adalah kemampuan suatu benda untuk melakukan usaha (kerja). Satuan SI energi adalah **Joule (J)**.

Dua Bentuk Energi Mekanik Utama:
1. **Energi Potensial ($E_p$)**: Energi yang dimiliki benda karena kedudukan / ketinggiannya terhadap tanah.
   $$E_p = m \\times g \\times h$$
   *(m = massa, g = gravitasi, h = ketinggian)*.
2. **Energi Kinetik ($E_k$)**: Energi yang dimiliki benda karena kelajuan geraknya.
   $$E_k = \\frac{1}{2} m v^2$$
   *(v = kecepatan)*.

**Hukum Kekekalan Energi**:
"Energi tidak dapat diciptakan maupun dimusnahkan, melainkan hanya dapat berubah bentuk dari satu energi ke bentuk energi lainnya."`,
        keyTakeaway: 'Energi potensial bergantung pada ketinggian ($h$), energi kinetik bergantung pada kecepatan ($v$).',
        microQuestion: {
          id: 'fis-2-q1',
          question: 'Energi yang dimiliki oleh buah kelapa yang berada di atas pohon karena ketinggiannya dinamakan energi?',
          options: ['Energi Kinetik', 'Energi Potensial Gravitasi', 'Energi Kalor', 'Energi Bunyi'],
          correctIndex: 1,
          explanation: 'Benar! Energi Potensial dipengaruhi oleh massa, gravitasi, dan ketinggian posisi benda.',
        },
      },
      {
        pageNumber: 2,
        title: 'Lima Sifat Cahaya & Pembiasan Refraksi',
        content: `Cahaya merupakan gelombang elektromagnetik yang dapat merambat tanpa memerlukan medium perantara.

Lima Sifat Utama Cahaya:
1. **Merambat Lurus**: Terbukti dari terbentuknya bayangan saat cahaya terhalang benda gelap.
2. **Menembus Benda Bening**: Cahaya melewati kaca bening transparan.
3. **Dapat Dipantulkan (Refleksi)**: Pantulan pada cermin datar atau permukaan air tenang.
4. **Dapat Dibiaskan (Refraksi)**: Pembelokan arah rambat cahaya saat melewati dua medium berbeda kerapatan optiknya (contoh: pensil terlihat patah/bengkok di dalam gelas berisi air).
5. **Dapat Diuraikan (Dispersi)**: Cahaya putih (polikromatik) terurai menjadi spektrum warna pelangi (MEJIKUHIBINIU).`,
        keyTakeaway: 'Pembiasan (refraksi) membuat pensil tampak bengkok di dalam gelas air.',
        microQuestion: {
          id: 'fis-2-q2',
          question: 'Fenomena pensil tampak patah atau bengkok ketika sebagian dimasukkan ke dalam gelas air bening disebabkan oleh sifat cahaya yaitu?',
          options: ['Pemantulan Cahaya', 'Pembiasan Cahaya (Refraksi)', 'Penguraian Pelangi', 'Penyerapan Cahaya'],
          correctIndex: 1,
          explanation: 'Hebat! Pembiasan terjadi saat cahaya merambat dari medium udara ke medium air yang beda kerapatannya.',
        },
      },
    ],
  },
  {
    id: 'fis-3',
    categoryId: 'fisika',
    title: 'Listrik Dinamis, Rangkaian Seri-Paralel & Ohm',
    targetGrade: 'SD Kelas 6 - SMP Kelas 9',
    description: 'Pelajari arus listrik, beda potensial voltase, Hukum Ohm, dan perbedaan rangkaian seri dan paralel.',
    iconName: 'Zap',
    color: 'sky',
    pages: [
      {
        pageNumber: 1,
        title: 'Arus Listrik, Tegangan & Hukum Ohm',
        content: `Arus listrik terjadi karena adanya muatan muatan elektron yang mengalir pada rangkaian tertutup dari kutub potensial tinggi (positif) ke potensial rendah (negatif).

Tiga Besaran Listrik Utama:
- **Arus Listrik ($I$)**: Banyaknya muatan mengalir per detik, satuan **Ampere (A)**.
- **Tegangan / Beda Potensial ($V$)**: Dorongan energi listrik, satuan **Volt (V)**.
- **Hambatan Listrik ($R$)**: Hambatan penghambat arus, satuan **Ohm ($\\Omega$)**.

**Hukum Ohm**:
$$V = I \\times R \\quad \\text{atau} \\quad I = \\frac{V}{R}$$

*Contoh Soal*: Jika lampu dengan hambatan $R = 4 \\; \\Omega$ dihubungkan baterai $V = 12 \\text{ Volt}$, maka arus yang mengalir adalah $I = \\frac{12}{4} = 3 \\text{ Ampere}$.`,
        keyTakeaway: 'Hukum Ohm menyatakan $V = I \\cdot R$. Arus berbanding lurus dengan tegangan.',
        microQuestion: {
          id: 'fis-3-q1',
          question: 'Berdasarkan Hukum Ohm, jika tegangan listrik sebesar 12 Volt dihubungkan pada hambatan 4 Ohm, besar kuat arus listriknya adalah?',
          options: ['3 Ampere', '8 Ampere', '16 Ampere', '48 Ampere'],
          correctIndex: 0,
          explanation: 'Tepat sekali! $I = V / R = 12 / 4 = 3 \\text{ Ampere}$.',
        },
      },
      {
        pageNumber: 2,
        title: 'Rangkaian Seri vs Rangkaian Paralel',
        content: `Rangkaian komponen listrik dapat disusun dengan dua metode konfigurasi:

1. **Rangkaian Seri**:
   - Komponen disusun sejajar dalam **satu jalur tanpa cabang**.
   - Arus yang mengalir di setiap komponen sama besar.
   - *Kelemahan*: Jika 1 lampu putus/mati, seluruh lampu dalam rangkaian ikut mati. Nyala lampu lebih redup.

2. **Rangkaian Paralel**:
   - Komponen disusun bercabang dalam **beberapa lintasan terpisah**.
   - Tegangan di setiap cabang sama besar.
   - *Keunggulan*: Jika 1 lampu mati, lampu di cabang lain tetap menyala. Nyala lampu lebih terang.
   - Digunakan pada **instalasi listrik rumah tangga** dan lampu lalu lintas.`,
        keyTakeaway: 'Listrik rumah menggunakan Rangkaian Paralel agar perangkat dapat dinyalakan/dimatikan secara independen.',
        microQuestion: {
          id: 'fis-3-q2',
          question: 'Keunggulan utama penggunaan rangkaian paralel pada instalasi kelistrikan di rumah tangga adalah?',
          options: [
            'Jika satu alat dipadamkan, alat lain tetap menyala',
            'Menggunakan kabel paling sedikit',
            'Nyala lampu menjadi sangat redup',
            'Jika satu sakelar dimatikan, semua rumah mati total'
          ],
          correctIndex: 0,
          explanation: 'Benar! Rangkaian paralel memiliki cabang mandiri sehingga tidak mematikan alat lain saat satu sakelar dimatikan.',
        },
      },
    ],
  },

  // ==========================================
  // --- ILMU BUMI ---
  // ==========================================
  {
    id: 'bumi-1',
    categoryId: 'ilmu-bumi',
    title: 'Struktur Lapisan Bumi, Gempa & Gunung Api',
    targetGrade: 'SD Kelas 5 - SMP Kelas 8',
    description: 'Menjelajahi kerak bumi, mantel magma, lempeng tektonik seismik, serta erupsi vulkanik.',
    iconName: 'Globe',
    color: 'indigo',
    pages: [
      {
        pageNumber: 1,
        title: 'Empat Lapisan Penyusun Bumi',
        content: `Planet Bumi memiliki struktur berlapis mulai dari permukaan luar hingga ke pusat inti:

1. **Kerak Bumi (Crust)**:
   - Lapisan batuan padat terluar paling tipis (ketebalan 5–70 km tempat kita tinggal).
   - Terdiri dari Kerak Benua dan Kerak Samudra.
2. **Mantel Bumi (Mantle)**:
   - Lapisan paling tebal (sekitar 2.900 km) yang terdiri dari batuan lunak semi-cair pijar bernama **Magma**.
3. **Inti Luar (Outer Core)**:
   - Lapisan cairan pekat logam besi dan nikel dengan suhu sekitar $4.000^\\circ C$.
4. **Inti Dalam (Inner Core)**:
   - Bola padat logam besi-nikel bertekanan sangat tinggi dengan suhu mencapai $5.000-6.000^\\circ C$.`,
        keyTakeaway: 'Kerak tempat tinggal kita adalah lapisan terluar tipis, sedangkan mantel mengandung magma pijar.',
        microQuestion: {
          id: 'bumi-1-q1',
          question: 'Lapisan paling tebal di bawah kerak bumi yang terdiri dari batuan lunak pijar magma dinamakan?',
          options: ['Kerak Benua', 'Mantel Bumi', 'Inti Dalam', 'Atmosfer'],
          correctIndex: 1,
          explanation: 'Sempurna! Mantel Bumi adalah lapisan batuan pijar magma tebal di bawah kerak bumi.',
        },
      },
      {
        pageNumber: 2,
        title: 'Lempeng Tektonik & Gempa Seismik',
        content: `Kerak bumi tidak utuh, melainkan terpecah menjadi beberapa kepingan besar yang disebut **Lempeng Tektonik** (seperti cangkang telur retak).

Pergerakan Lempeng Tektonik:
- **Konvergen**: Lempeng saling bertabrakan (membentuk pegunungan lipatan).
- **Divergen**: Lempeng saling menjauh (membentuk rekahan samudra).
- **Transform**: Lempeng saling bergesekan menyamping (membentuk sesar/patahan).

Gempa Bumi (Seismik):
Pelepasan energi secara tiba-tiba akibat pergeseran lempeng tektonik menghasilkan gelombang seismik yang menggetarkan permukaan bumi.
Kekuatan getaran gempa diukur menggunakan instrumen **Seismograf** dengan satuan **Skala Richter (SR)**.`,
        keyTakeaway: 'Gempa bumi disebabkan geseran lempeng tektonik, dicatat seismograf dalam Skala Richter.',
        microQuestion: {
          id: 'bumi-1-q2',
          question: 'Alat ukur instrumen yang digunakan ilmuwan untuk mencatat getaran gelombang gempa bumi adalah?',
          options: ['Barometer', 'Seismograf', 'Anemometer', 'Thermometer'],
          correctIndex: 1,
          explanation: 'Benar! Seismograf merekam getaran gelombang seismik dari pusat gempa bumi.',
        },
      },
    ],
  },
  {
    id: 'bumi-2',
    categoryId: 'ilmu-bumi',
    title: 'Atmosfer, Daur Air & Pemanasan Global',
    targetGrade: 'SD Kelas 5 - SMP Kelas 8',
    description: 'Pelajari lapisan atmosfer troposfer stratosfer, tahapan siklus hidrologi air, dan efek rumah kaca.',
    iconName: 'CloudRain',
    color: 'indigo',
    pages: [
      {
        pageNumber: 1,
        title: 'Lima Lapisan Atmosfer Pelindung Bumi',
        content: `**Atmosfer** adalah lapisan selubung gas yang menyelimuti bumi dari radiasi berbahaya antariksa.

Urutan Lapisan Atmosfer dari Terdekat ke Terluar:
1. **Troposfer (0 - 12 km)**:
   - Tempat terjadinya fenomena cuaca (awan, hujan, angin, petir). Tempat penerbangan pesawat komersial.
2. **Stratosfer (12 - 50 km)**:
   - Tempat ditemukannya **Lapisan Ozon ($O_3$)** yang menyerap sinar ultraviolet (UV) berbahaya dari matahari.
3. **Mesosfer (50 - 85 km)**:
   - Lapisan pelindung yang membakar sebagian besar meteorit jatuhan antariksa.
4. **Termosfer / Ionosfer (85 - 500 km)**:
   - Memantulkan gelombang radio dan tempat munculnya fenomena cahaya **Aurora**.
5. **Eksosfer (> 500 km)**:
   - Lapisan terluar berbatasan dengan hampa udara luar angkasa. tempat satelit buatan mengorbit.`,
        keyTakeaway: 'Troposfer adalah lokasi fenomena cuaca hujan, sedangkan Stratosfer berisi lapisan penangkal UV Ozon.',
        microQuestion: {
          id: 'bumi-2-q1',
          question: 'Lapisan atmosfer terdekat dengan permukaan bumi tempat berlangsungnya fenomena cuaca hujan dan awan dinamakan?',
          options: ['Stratosfer', 'Troposfer', 'Mesosfer', 'Eksosfer'],
          correctIndex: 1,
          explanation: 'Hebat! Troposfer adalah lapisan paling bawah tempat terjadinya seluruh fenomena iklim & cuaca.',
        },
      },
      {
        pageNumber: 2,
        title: 'Tahapan Siklus Hidrologi Daur Air',
        content: `Jumlah air di bumi relatif tetap karena mengalami perputaran berkelanjutan melalui **Siklus Hidrologi (Daur Air)**.

Tahapan Utama Daur Air:
1. **Evaporasi**: Penguapan air dari daratan, sungai, dan laut akibat panas matahari.
2. **Transpirasi**: Penguapan air dari jaringan tubuh tumbuhan hidup melalui stomata.
3. **Kondensasi**: Uap air naik ke atmosfer dingin dan mengembun membentuk tumpukan titik-titik air **Awan**.
4. **Presipitasi**: Awan yang sudah jenuh mencair dan jatuh ke bumi sebagai **Hujan / Salju**.
5. **Infiltrasi**: Penyerapan air hujan ke dalam pori-pori tanah menjadi air tanah.`,
        keyTakeaway: 'Evaporasi (air menguap), Transpirasi (tumbuhan menguap), Kondensasi (jadi awan), Presipitasi (hujan).',
        microQuestion: {
          id: 'bumi-2-q2',
          question: 'Proses penguapan air yang berasal dari jaringan permukaan daun tumbuhan hidup dinamakan?',
          options: ['Evaporasi', 'Transpirasi', 'Kondensasi', 'Infiltrasi'],
          correctIndex: 1,
          explanation: 'Tepat sekali! Transpirasi adalah penguapan air spesifik dari mahkluk hidup tumbuhan.',
        },
      },
    ],
  },
  {
    id: 'bumi-3',
    categoryId: 'ilmu-bumi',
    title: 'Tata Surya, Planet, Rotasi & Gerhana',
    targetGrade: 'SD Kelas 6 - SMP Kelas 8',
    description: 'Mengenal susunan 8 planet tata surya, akibat gerak rotasi dan revolusi, serta fenomena gerhana.',
    iconName: 'Compass',
    color: 'indigo',
    pages: [
      {
        pageNumber: 1,
        title: '8 Planet Anggota Tata Surya',
        content: `**Tata Surya** kita terdiri dari Matahari sebagai bintang pusat gravitasi yang dikelilingi oleh 8 planet utama.

Urutan Planet dari Terdekat ke Matahari:
1. **Merkurius**: Planet terkecil, tanpa atmosfer, paling dekat matahari.
2. **Venus**: Planet terpanas (efek rumah kaca tebal), dijuluki Bintang Fajar/Kejora.
3. **Bumi**: Satu-satunya planet tempat ditemukannya kehidupan dan air cair.
4. **Mars**: Dijuluki "Planet Merah" karena tanahnya kaya besi oksida.
--- *Sabuk Asteroid* ---
5. **Yupiter**: **Planet terbesar** di Tata Surya dengan Bintik Merah Raksasa.
6. **Saturnus**: Planet indah yang memiliki **Sistem Cincin** es & debu raksasa.
7. **Uranus**: Planet dingin berwarna biru kehijauan yang berputar miring.
8. **Neptunus**: Planet terjauh berangin paling kencang.`,
        keyTakeaway: 'Yupiter adalah planet terbesar, Venus terpanas, dan Saturnus terkenal dengan cincin indahnya.',
        microQuestion: {
          id: 'bumi-3-q1',
          question: 'Planet terbesar dalam sistem Tata Surya kita yang memiliki fitur Bintik Merah Raksasa dinamakan?',
          options: ['Saturnus', 'Yupiter', 'Mars', 'Neptunus'],
          correctIndex: 1,
          explanation: 'Benar! Yupiter adalah raksasa gas sekaligus planet terbesar di Tata Surya.',
        },
      },
      {
        pageNumber: 2,
        title: 'Rotasi & Revolusi Bumi serta Gerhana',
        content: `Pergerakan Bumi dan Bulan menghasilkan ritme fenomena astronomi:

1. **Rotasi Bumi (24 Jam)**: Perputaran bumi pada porosnya.
   - *Akibat*: Pergantian **Siang dan Malam**, gerak semu harian matahari, dan perbedaan zona waktu (WIB, WITA, WIT).

2. **Revolusi Bumi (365,25 Hari / 1 Tahun)**: Peredaran bumi mengelilingi matahari.
   - *Akibat*: Perubahan **Musim** di bumi dan gerak semu tahunan matahari.

3. **Gerhana**:
   - **Gerhana Matahari**: Terjadi saat kedudukan lurus urutan **Matahari $\\rightarrow$ Bulan $\\rightarrow$ Bumi** (bayangan Bulan menutupi Matahari di siang hari).
   - **Gerhana Bulan**: Terjadi saat kedudukan lurus urutan **Matahari $\\rightarrow$ Bumi $\\rightarrow$ Bulan** (bumi menghalangi sinar matahari ke bulan).`,
        keyTakeaway: 'Rotasi bumi menyebabkan siang-malam & zona waktu, sedangkan gerhana terjadi saat posisi sejajar.',
        microQuestion: {
          id: 'bumi-3-q2',
          question: 'Peristiwa pergantian siang dan malam serta perbedaan zona waktu di Indonesia terjadi sebagai akibat dari?',
          options: ['Revolusi Bumi', 'Rotasi Bumi', 'Revolusi Bulan', 'Gerhana Matahari'],
          correctIndex: 1,
          explanation: 'Sempurna! Rotasi bumi (perputaran bumi pada porosnya) menyebabkan fenomena siang dan malam.',
        },
      },
    ],
  },

  // ==========================================
  // --- SAINS UMUM ---
  // ==========================================
  {
    id: 'sains-1',
    categoryId: 'sains-umum',
    title: 'Metode Ilmiah, Variabel & Keselamatan Lab',
    targetGrade: 'SD Kelas 5 - SMP Kelas 7',
    description: 'Langkah eksperimen ilmiah rasional, identifikasi variabel, dan prosedur keselamatan laboratorium.',
    iconName: 'Microscope',
    color: 'purple',
    pages: [
      {
        pageNumber: 1,
        title: '6 Langkah Metode Ilmiah & Variabel',
        content: `**Metode Ilmiah** adalah pendekatan sistematis terkontrol yang digunakan ilmuwan untuk menyelidiki fenomena alam secara rasional dan terukur.

Langkah-Langkah Metode Ilmiah:
1. **Merumuskan Masalah**: Mengajukan pertanyaan spesifik penelitian.
2. **Studi Literatur & Menyusun Hipotesis**: Membuat **dugaan sementara** yang dapat diuji.
3. **Merancang Eksperimen**: Menguji hipotesis dengan variabel terkontrol.
4. **Mengumpulkan & Menganalisis Data**: Mencatat hasil percobaan dalam tabel/grafik.
5. **Penarikan Kesimpulan**: Menilai apakah hipotesis diterima atau ditolak.
6. **Publikasi Laporan**: Mengomunikasikan temuan kepada publik.

Tiga Jenis Variabel Percobaan:
- **Variabel Bebas**: Faktor yang **sengaja diubah-ubah** oleh peneliti.
- **Variabel Terikat**: Faktor yang **diukur / diamati** sebagai respon hasil.
- **Variabel Kontrol**: Faktor yang **dijaga tetap sama** agar eksperimen adil.`,
        keyTakeaway: 'Hipotesis adalah dugaan sementara, sedangkan Variabel Bebas adalah variabel yang sengaja diubah.',
        microQuestion: {
          id: 'sains-1-q1',
          question: 'Faktor yang sengaja diubah-ubah atau dimanipulasi oleh peneliti dalam suatu eksperimen dinamakan?',
          options: ['Variabel Terikat', 'Variabel Bebas', 'Variabel Kontrol', 'Hipotesis Mutlak'],
          correctIndex: 1,
          explanation: 'Tepat! Variabel Bebas adalah faktor independen yang sengaja diubah untuk melihat pengaruhnya.',
        },
      },
      {
        pageNumber: 2,
        title: 'Alat-Alat Laboratorium IPA & Simbol Bahaya',
        content: `Praktikum di Laboratorium IPA memerlukan pengenalan alat gelas dan kepatuhan keselamatan kerja:

Alat Laboratorium Utama:
- **Gelas Kimia (Beaker)**: Wadah penampung dan pemanas zat cair.
- **Gelas Ukur**: Silinder kaca bergaris untuk mengukur volume cairan secara tepat.
- **Tabung Reaksi**: Tempat mereaksikan zat kimia dalam skala kecil.
- **Pipet Tetes**: Mengambil cairan dalam jumlah tetesan kecil.

Simbol Bahaya Bahan Kimia:
- **Tengkorak (Toxic)**: Bahan beracun jika terhirup atau tertelan.
- **Api (Flammable)**: Bahan mudah terbakar (alkohol, spirtus).
- **Cairan Menetes (Corrosive)**: Bahan asam/basa pekat yang dapat merusak kulit dan melubangi logam.`,
        keyTakeaway: 'Gelas ukur digunakan mengukur volume cairan, sedangkan gambar tengkorak menandakan bahan beracun (toxic).',
        microQuestion: {
          id: 'sains-1-q2',
          question: 'Simbol bergambar tengkorak pada botol reagen di laboratorium kimia menandakan sifat zat bahaya yaitu?',
          options: ['Mudah Terbakar', 'Beracun (Toxic)', 'Mudah Meledak', 'Radioaktif'],
          correctIndex: 1,
          explanation: 'Benar! Simbol tengkorak dan siluet tulang memperingatkan bahwa bahan tersebut beracun (Toxic).',
        },
      },
    ],
  },
  {
    id: 'sains-2',
    categoryId: 'sains-umum',
    title: 'Besaran Pokok, Besaran Turunan & Pengukuran',
    targetGrade: 'SD Kelas 5 - SMP Kelas 8',
    description: 'Mengenal 7 besaran pokok Satuan Internasional (SI), besaran turunan, dan ketelitian alat ukur.',
    iconName: 'Ruler',
    color: 'purple',
    pages: [
      {
        pageNumber: 1,
        title: '7 Besaran Pokok Satuan Internasional (SI)',
        content: `Dalam pengukuran IPA, **Besaran** adalah segala sesuatu yang dapat diukur dan dinyatakan dengan angka serta memiliki **Satuan**.

**Besaran Pokok** adalah besaran utama yang satuannya telah ditetapkan terlebih dahulu secara internasional (SI):

1. **Panjang**: Satuan SI **Meter (m)** $\\rightarrow$ Alat ukur: Penggaris, Jangka Sorong.
2. **Massa**: Satuan SI **Kilogram (kg)** $\\rightarrow$ Alat ukur: Neraca Ohaus.
3. **Waktu**: Satuan SI **Sekon / Detik (s)** $\\rightarrow$ Alat ukur: Stopwatch.
4. **Suhu**: Satuan SI **Kelvin (K)** $\\rightarrow$ Alat ukur: Termometer.
5. **Kuat Arus Listrik**: Satuan SI **Ampere (A)** $\\rightarrow$ Alat ukur: Amperemeter.
6. **Intensitas Cahaya**: Satuan SI **Candela (cd)**.
7. **Jumlah Zat**: Satuan SI **Mole (mol)**.`,
        keyTakeaway: 'Suhu memiliki satuan baku SI Kelvin (K), Massa bernilai Kilogram (kg), dan Waktu bernilai Sekon (s).',
        microQuestion: {
          id: 'sains-2-q1',
          question: 'Satuan Internasional (SI) yang baku ditetapkan untuk mengukur besaran Suhu adalah?',
          options: ['Celcius ($^\\circ C$)', 'Fahrenheit ($^\\circ F$)', 'Kelvin (K)', 'Reamur ($^\\circ R$)'],
          correctIndex: 2,
          explanation: 'Sempurna! Kelvin (K) adalah satuan standar Internasional (SI) untuk mengukur Suhu.',
        },
      },
      {
        pageNumber: 2,
        title: 'Besaran Turunan & Alat Ukur Presisi',
        content: `**Besaran Turunan** adalah besaran yang diturunkan dari kombinasi besaran-besaran pokok.

Contoh Besaran Turunan:
- **Luas ($A$)**: $m \\times m = m^2$ (diturunkan dari Panjang).
- **Volume ($V$)**: $m \\times m \\times m = m^3$ (diturunkan dari Panjang).
- **Kecepatan ($v$)**: $m/s$ (diturunkan dari Panjang dan Waktu).
- **Massa Jenis ($\\rho$)**: $\\frac{massa}{volume} = kg/m^3$.

Alat Ukur Panjang Presisi:
- **Jangka Sorong**: Ketelitian hingga $0,1 \\text{ mm}$ ($0,01 \\text{ cm}$), digunakan mengukur diameter dalam tabung atau kedalaman botol.
- **Mikrometer Sekrup**: Ketelitian sangat tinggi $0,01 \\text{ mm}$ ($0,001 \\text{ cm}$), digunakan mengukur ketebalan koin, plat tipis, atau kawat.`,
        keyTakeaway: 'Mikrometer sekrup memiliki ketelitian paling tinggi $0,01\\text{ mm}$ untuk mengukur benda tipis.',
        microQuestion: {
          id: 'sains-2-q2',
          question: 'Alat ukur panjang presisi yang memiliki ketelitian hingga 0,01 mm dan cocok digunakan untuk mengukur tebal kertas adalah?',
          options: ['Penggaris Kayu', 'Meteran Pita', 'Jangka Sorong', 'Mikrometer Sekrup'],
          correctIndex: 3,
          explanation: 'Tepat sekali! Mikrometer sekrup memiliki skala utama dan putar dengan ketelitian 0,01 mm.',
        },
      },
    ],
  },
];
