"use client"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Moodo</h1>
          <p className="text-xl mb-8 opacity-90">Smart Fragrance for Smart Homes. IoT-connected diffusers with personalized scent capsules.</p>
          <a href="#pricing" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition">Get Started</a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Moodo?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "🌿", title: "Smart Scent Mixing", desc: "Mix and match 4 capsule slots to create your perfect scent blend." },
            { icon: "📱", title: "App Controlled", desc: "Control intensity, schedule, and blend from your phone." },
            { icon: "🔄", title: "Capsule Subscription", desc: "Never run out. Fresh capsules delivered monthly." },
            { icon: "🏨", title: "Hospitality Ready", desc: "Enterprise solutions for hotels, spas, and retail spaces." },
          ].map((f, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-gray-50">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "Choose Your Device", desc: "Pick from our range of smart diffusers." },
              { step: "2", title: "Select Capsules", desc: "Build your scent library from 50+ fragrances." },
              { step: "3", title: "Enjoy & Automate", desc: "Set schedules, mix scents, and relax." },
            ].map((s, i) => (
              <div key={i}>
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sarah K.", text: "My home smells incredible. The app scheduling is genius." },
            { name: "Hotel Marais", text: "We use Moodo in our lobby. Guests always comment on the scent." },
            { name: "David R.", text: "The subscription means I always have fresh capsules. Love it." },
          ].map((t, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-700 mb-3 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="font-bold text-sm text-emerald-700">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="bg-emerald-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg mb-8 opacity-90">Start with a device + 3 capsules. Cancel subscription anytime.</p>
        <a href="https://moodo.co" className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition">Shop Now</a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 px-6 text-center">
        <p>&copy; 2026 Moodo. Smart Fragrance Technology.</p>
      </footer>
    </div>
  )
}
