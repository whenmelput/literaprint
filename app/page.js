export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between p-5 bg-gray-900">
        <h1 className="text-2xl font-bold text-cyan-400">
          LiteraPrint
        </h1>

        <div className="flex gap-5">
          <a href="#layanan">Layanan</a>
          <a href="#harga">Harga</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      {/* Banner */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-cyan-400">
          LiteraPrint
        </h1>

        <p className="mt-5 text-xl">
          Print • Fotokopi • Scan • Jasa Ketik • BPJS
        </p>

        <button
          className="bg-green-500 px-6 py-3 rounded mt-6"
        >
          Hubungi WhatsApp
        </button>
      </section>

      {/* Layanan */}
      <section
        id="layanan"
        className="p-10 bg-gray-900"
      >
        <h2 className="text-3xl font-bold">
          Layanan Kami
        </h2>

        <div className="grid grid-cols-2 gap-5 mt-5">

          <div>📄 Cetak Dokumen</div>

          <div>📚 Fotokopi</div>

          <div>🖨️ Print Warna</div>

          <div>⌨️ Jasa Ketik</div>

          <div>📠 Scan Dokumen</div>

          <div>🏥 Layanan BPJS</div>

        </div>
      </section>

      {/* Harga */}
      <section
        id="harga"
        className="p-10"
      >
        <h2 className="text-3xl font-bold">
          Daftar Harga
        </h2>

        <div className="mt-5">

          <p>Print Hitam Putih : Rp500</p>

          <p>Print Warna : Rp750</p>

          <p>Fotokopi : Rp300</p>

          <p>Scan Dokumen : Rp1.000</p>

        </div>
      </section>

      {/* Testimoni */}
      <section className="p-10 bg-gray-900">

        <h2 className="text-3xl font-bold">
          Testimoni
        </h2>

        <p className="mt-5">
          ⭐⭐⭐⭐⭐
          "Pelayanan cepat dan ramah"
        </p>

        <p>
          ⭐⭐⭐⭐⭐
          "Print tugas kuliah jadi mudah"
        </p>

      </section>

      {/* Kontak */}
      <section
        id="kontak"
        className="p-10 text-center"
      >

        <h2 className="text-3xl font-bold">
          Hubungi Kami
        </h2>

        <p>📍 Semarang</p>

        <p>📞 081331176953</p>

        <button
          className="bg-green-500 px-6 py-3 rounded mt-5"
        >
          WhatsApp
        </button>

      </section>

    </main>
  )
}