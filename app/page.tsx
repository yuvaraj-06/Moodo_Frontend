"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Experience Moodo</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Smart IoT fragrance diffusers with personalized capsule subscriptions. Transform your space, elevate your mood.</p>
        <button className="bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-400 transition">Discover Your Scent</button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Smart Scenting, Simplified</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-5xl mb-4">📱</p><h3 className="text-xl font-semibold mb-2">App Control</h3><p className="text-gray-600">Manage fragrances from anywhere.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-5xl mb-4">🔄</p><h3 className="text-xl font-semibold mb-2">Subscription Service</h3><p className="text-gray-600">Fresh capsules delivered to your door.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-5xl mb-4">💡</p><h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3><p className="text-gray-600">Automate your scent experience.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-5xl mb-4">🌿</p><h3 className="text-xl font-semibold mb-2">Natural Blends</h3><p className="text-gray-600">Premium essential oil based fragrances.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-12">How Moodo Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
          <div className="p-6 bg-slate-800 rounded-lg shadow-md">
            <p className="text-amber-500 text-3xl font-bold mb-2">1.</p><h3 className="text-xl font-semibold mb-2">Choose Your Diffuser</h3><p className="text-gray-300">Select the perfect Moodo device for your space.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg shadow-md">
            <p className="text-amber-500 text-3xl font-bold mb-2">2.</p><h3 className="text-xl font-semibold mb-2">Subscribe to Capsules</h3><p className="text-gray-300">Pick from our range of curated fragrance collections.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-lg shadow-md">
            <p className="text-amber-500 text-3xl font-bold mb-2">3.</p><h3 className="text-xl font-semibold mb-2">Enjoy Automated Bliss</h3><p className="text-gray-300">Control via app, set schedules, relax & enjoy.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <p className="text-gray-700 italic mb-4">"Moodo has transformed my home office! The scents are incredible and the app control is a game-changer."</p>
            <p className="font-semibold text-emerald-600">- Sarah L.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-sm text-left">
            <p className="text-gray-700 italic mb-4">"Absolutely love the subscription model. I never run out of my favorite fragrances. Highly recommend Moodo!"</p>
            <p className="font-semibold text-emerald-600">- Mark P.</p>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="bg-emerald-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Moodo Journey Today</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">Get your Moodo diffuser and a curated capsule subscription to begin your enhanced sensory experience.</p>
        <div className="mb-10">
          <p className="text-5xl font-bold text-amber-500 mb-2">$199</p>
          <p className="text-xl">Moodo Diffuser + Starter Pack</p>
          <p className="text-lg mt-4">Subscriptions from <span className="font-bold text-amber-500">$19.99</span>/month</p>
        </div>
        <button className="bg-white text-emerald-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition">Order Moodo Now</button>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center">
        <p>&copy; 2023 Moodo. All rights reserved.</p>
      </footer>
    </div>
  );
}