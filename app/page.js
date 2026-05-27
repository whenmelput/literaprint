export default function Home() {

  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-gray-900">

        <h1 className="text-2xl font-bold text-cyan-400">
          LiteraPrint
        </h1>

        <div className="flex gap-5">

          <a href="#layanan">
            Layanan
          </a>

          <a href="#harga">
            Harga
          </a>

          <a href="#kontak">
            Kontak
          </a>

        </div>

      </nav>

      {/* Banner */}

      <section className="text-center py-20 px-5">

        <h1 className="text-5xl font-bold text-cyan-400">

          LiteraPrint

        </h1>

        <p className="mt-5 text-xl text-gray-300">

          Solusi Print • Fotokopi • Scan • Jasa Ketik • Layanan BPJS

        </p>

        <a

          href="https://wa.me/6281331176953"
          target="_blank"

          className="
          bg-green-500
          hover:bg-green-600
          px-6
          py-3
          rounded-lg
          inline-block
          mt-8
          font-bold
          "

        >

          Hubungi WhatsApp

        </a>

      </section>


      {/* Layanan */}

      <section
        id="layanan"
        className="bg-gray-900 p-10"
      >

        <h2 className="text-3xl font-bold text-cyan-400">

          Layanan Kami

        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="bg-black p-5 rounded">

            📄 Cetak Dokumen

          </div>

          <div className="bg-black p-5 rounded">

            📚 Fotokopi

          </div>

          <div className="bg-black p-5 rounded">

            🖨️ Print Warna

          </div>

          <div className="bg-black p-5 rounded">

            📠 Scan Dokumen

          </div>

          <div className="bg-black p-5 rounded">

            ⌨️ Jasa Ketik

          </div>

          <div className="bg-black p-5 rounded">

            🏥 Layanan BPJS

          </div>

        </div>

      </section>


      {/* Harga */}

      <section
        id="harga"
        className="p-10"
      >

        <h2 className="text-3xl font-bold text-cyan-400">

          Daftar Harga

        </h2>

        <div className="mt-6 space-y-3">

          <p>

            Print Hitam Putih : Rp500 / lembar

          </p>

          <p>

            Print Warna : Rp750 / lembar

          </p>

          <p>

            Fotokopi : Rp300 / lembar

          </p>

          <p>

            Scan Dokumen : Rp1.000

          </p>

        </div>

      </section>


      {/* Testimoni */}

      <section
        className="bg-gray-900 p-10"
      >

        <h2 className="text-3xl font-bold text-cyan-400">

          Testimoni Pelanggan

        </h2>

        <div className="mt-6 space-y-5">

          <div>

            ⭐⭐⭐⭐⭐

            "Pelayanan cepat dan ramah."

          </div>

          <div>

            ⭐⭐⭐⭐⭐

            "Print tugas kuliah jadi lebih mudah."

          </div>

        </div>

      </section>


      {/* Kontak */}

      <section
        id="kontak"
        className="p-10 text-center"
      >

        <h2 className="text-3xl font-bold text-cyan-400">

          Hubungi Kami

        </h2>

        <p className="mt-5">

          📍 Umbul Sari Mijen RT 03 RW 01, Kota Semarang 

        </p>

        <p>

          📞 081331176953

        </p>

        <a

          href="https://wa.me/62813311776953"
          target="_blank"

          className="
          bg-green-500
          hover:bg-green-600
          px-6
          py-3
          rounded-lg
          inline-block
          mt-5
          "

        >

          Chat WhatsApp

        </a>

      </section>

    </main>
  )

}