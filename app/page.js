export default function Home() {
  return (
    <main>

      {/* HERO */}

      <section className="bg-blue-700 text-white text-center p-14">

        <h1 className="text-5xl font-bold">
          LiteraPrint
        </h1>

        <p className="mt-5 text-xl">
          Print • Fotokopi • Scan • Jasa Ketik • Layanan BPJS
        </p>

        <button className="bg-green-500 px-6 py-3 rounded-lg mt-6 hover:bg-green-600">

          Hubungi Sekarang

        </button>

      </section>


      {/* PROBLEM SOLUTION */}

      <section className="bg-black text-white p-12">

        <h2 className="text-4xl font-bold">

          Mengapa Memilih LiteraPrint?

        </h2>

        <p className="mt-5 text-lg">

          Solusi cepat untuk kebutuhan print,
          scan dokumen, fotokopi,
          jasa ketik, dan layanan BPJS.

        </p>

      </section>


      {/* FITUR */}

      <section className="bg-gray-100 p-12 text-black">

        <h2 className="text-4xl font-bold">

          Layanan Kami

        </h2>

        <div className="grid grid-cols-2 gap-5 mt-8">

          <div className="bg-white p-5 rounded-lg shadow">

            📄 Print Dokumen

          </div>

          <div className="bg-white p-5 rounded-lg shadow">

            📚 Fotokopi

          </div>

          <div className="bg-white p-5 rounded-lg shadow">

            🖨 Scan Dokumen

          </div>

          <div className="bg-white p-5 rounded-lg shadow">

            ⌨ Jasa Ketik

          </div>

          <div className="bg-white p-5 rounded-lg shadow">

            🏥 Layanan BPJS

          </div>

          <div className="bg-white p-5 rounded-lg shadow">

            ⚡ Pelayanan Cepat

          </div>

        </div>

      </section>


      {/* TESTIMONI */}

      <section className="bg-black text-white p-12">

        <h2 className="text-4xl font-bold">

          Testimoni Pelanggan

        </h2>

        <div className="mt-8 space-y-4">

          <div className="bg-gray-800 p-5 rounded">

            ⭐⭐⭐⭐⭐
            "Pelayanan cepat dan ramah."

          </div>

          <div className="bg-gray-800 p-5 rounded">

            ⭐⭐⭐⭐⭐
            "Print tugas kuliah jadi lebih mudah."

          </div>

          <div className="bg-gray-800 p-5 rounded">

            ⭐⭐⭐⭐⭐
            "Harga terjangkau dan hasil bagus."

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-blue-700 text-white text-center p-12">

        <h2 className="text-4xl font-bold">

          Butuh Print atau Fotokopi?

        </h2>

        <p className="mt-4">

          Hubungi LiteraPrint sekarang.

        </p>

        <button className="bg-green-500 px-6 py-3 rounded-lg mt-6 hover:bg-green-600">

          WhatsApp Sekarang

        </button>

      </section>


      {/* FOOTER */}

      <footer className="bg-black text-white text-center p-6">

        LiteraPrint © 2026

        <p className="mt-2">

          Print • Scan • Fotokopi • Jasa Ketik

        </p>

      </footer>

    </main>
  );
}