export default function PrecioCabello() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Extenciones",
              "Corte",
              "Cepillado",
              "Tintura",
              "Alisados",
              "Keratinas"
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-xl text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  