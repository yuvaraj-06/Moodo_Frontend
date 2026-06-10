export default function Home() {
  const primaryColor = '#0066FF'; // Moodo Blue
  const accentColor = '#22c55e'; // Accent Green

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased">
      {/* Navbar (simple, just logo) */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold" style={{ color: primaryColor }}>
          Moodo
        </div>
        {/* For a single page, no complex navigation needed. */}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6" style={{ color: primaryColor }}>
              Moodo: Craft Your Perfect Atmosphere
            </h1>