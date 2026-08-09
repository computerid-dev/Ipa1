import React, { useState } from 'react';
import { sound } from '../utils/sound';
import { Info, User, Phone, Mail, Send, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const DeveloperInfoModal: React.FC = () => {
  const [pesan, setPesan] = useState('');
  const [namaPengirim, setNamaPengirim] = useState('');
  const [terkirim, setTerkirim] = useState(false);

  const handleKirimPesan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pesan.trim()) return;

    sound.playVictory();
    setTerkirim(true);
    setTimeout(() => {
      setPesan('');
      setNamaPengirim('');
      setTerkirim(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-[#42423E] animate-fade-in">
      {/* Developer Profile Hero (Kotak Card) */}
      <div className="bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#8A9A5B] text-white flex items-center justify-center font-bold text-2xl shadow-xs">
              NYR
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#8A9A5B] px-2.5 py-1 rounded-md">
                Pengembang Aplikasi & Layanan CS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2C2C2A]">Nugroho Y.R.</h2>
              <p className="text-xs sm:text-sm text-[#6E6C64]">
                Pengembang Utama Website Edukasi IPA Interaktif <span className="font-bold text-[#8A9A5B]">Science Adventure</span>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E0DDD5] text-[#8A9A5B] text-xs font-bold rounded-xl">
              <ShieldCheck className="w-4 h-4" /> Versi 1.0.0
            </span>
          </div>
        </div>
      </div>

      {/* CS Contact Info Grid (Kotak Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Nomor CS Card */}
        <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 shadow-xs space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF2E1] border border-[#8A9A5B] text-[#3B5838] flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8C8A82]">Nomor CS / Pendamping</p>
            <p className="text-xl font-bold text-[#2C2C2A] tracking-wide">081522851050</p>
            <p className="text-xs text-[#6E6C64]">
              Layanan bantuan & pendampingan belajar IPA untuk siswa dan guru.
            </p>
          </div>

          <a
            href="https://wa.me/6281522851050"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            className="mt-4 px-4 py-2.5 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white font-bold text-xs rounded-xl shadow-xs transition-all text-center block"
          >
            Hubungi via WhatsApp / Telp
          </a>
        </div>

        {/* Email CS Card */}
        <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 shadow-xs space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E0DDD5] text-[#5B8A9A] flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8C8A82]">Email CS (Bantuan & Bot)</p>
            <p className="text-lg font-bold text-[#5B8A9A] break-all">nugrohokelyn@gmail.com</p>
            <p className="text-xs text-[#6E6C64]">
              Email resmi testing & pesan otomatis pertanyaan seputar materi IPA.
            </p>
          </div>

          <a
            href="mailto:nugrohokelyn@gmail.com?subject=Tanya%20Sains%20Adventure"
            onClick={() => sound.playClick()}
            className="mt-4 px-4 py-2.5 bg-[#5B8A9A] hover:bg-[#4B7A8A] text-white font-bold text-xs rounded-xl shadow-xs transition-all text-center block"
          >
            Kirim Email Langsung
          </a>
        </div>
      </div>

      {/* Interactive Form to CS (Kotak Card) */}
      <div className="bg-white border border-[#E0DDD5] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8A9A5B]" />
          <h3 className="text-lg font-bold text-[#2C2C2A]">Kirim Pesan / Pertanyaan ke Developer</h3>
        </div>
        <p className="text-xs text-[#6E6C64]">
          Ada materi IPA yang kurang kamu pahami? Tuliskan pertanyaanmu di bawah ini!
        </p>

        <form onSubmit={handleKirimPesan} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#42423E] mb-1">Nama Kamu</label>
              <input
                type="text"
                value={namaPengirim}
                onChange={(e) => setNamaPengirim(e.target.value)}
                placeholder="Contoh: Budi"
                className="w-full px-4 py-2 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] text-xs font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#42423E] mb-1">Pertanyaan / Pesan</label>
            <textarea
              rows={3}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tuliskan saran atau pertanyaan seputar IPA..."
              className="w-full px-4 py-2.5 bg-[#FAF9F6] border border-[#E0DDD5] rounded-xl text-[#42423E] text-xs font-medium focus:outline-none focus:border-[#8A9A5B] focus:ring-1 focus:ring-[#8A9A5B]"
              required
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-[#8A9A5B] hover:bg-[#7A8A4B] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" /> Kirim Pesan
          </button>

          {terkirim && (
            <div className="p-3 bg-[#EAF2E1] border border-[#8A9A5B] text-[#3B5838] text-xs font-bold rounded-xl flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4" /> Pesanmu berhasil terkirim ke Nugroho Y.R. (CS)!
            </div>
          )}
        </form>
      </div>

      {/* App Mission & Technical Note */}
      <div className="bg-[#EFEDE7] border border-[#E0DDD5] rounded-2xl p-6 text-center space-y-2 text-[#6E6C64] text-xs">
        <p className="flex items-center justify-center gap-1 font-semibold text-[#2C2C2A]">
          Dibuat dengan <Heart className="w-4 h-4 text-[#D66D5B] fill-[#D66D5B]" /> untuk Pendidikan IPA Indonesia (SD & SMP).
        </p>
        <p>
          Science Adventure bekerja secara 100% offline-friendly dengan penyimpanan data lokal (LocalStorage).
        </p>
      </div>
    </div>
  );
};
