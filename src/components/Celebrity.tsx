import React from 'react';
import { Sparkles } from 'lucide-react';

import Bridal from '../Assets/Bridal.png';
import Royal from '../Assets/Royal.png';
import Classical from '../Assets/Classical.png';

const Celebrity: React.FC = () => {
  const cards = [
    { title: 'Bridal Elegance', desc: 'Temple jewelry + Kanchipuram', image: Bridal },
    { title: 'Royal Groom', desc: 'Gold sherwani with embroidery', image: Royal },
    { title: 'Classical Dancer', desc: 'Traditional silk costume', image: Classical }
  ];

  return (
    <section id="signature" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <div className="flex justify-center gap-4 mb-8">
          <Sparkles className="text-amber-500" size={40} />
          <Sparkles className="text-amber-400" size={40} />
        </div>

        <h2 className="text-5xl font-bold mb-6">
          Signature <span className="text-amber-600">Styling Excellence</span>
        </h2>

         <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Our signature styling represents the heart of Univouge — a refined balance of
          tradition, craftsmanship, and visual storytelling.
        </p>

        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          From cinematic costumes to bridal couture and classical ensembles, each design
          is thoughtfully created to reflect personality, culture, and occasion.
          These signature looks define our identity — elegant, expressive, and timeless.
        </p>

        {/* ---------- IMAGE CARDS ---------- */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg overflow-hidden h-[500px] relative group"
              style={{
                backgroundImage: `url(${c.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div>

              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="text-sm">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Celebrity;
