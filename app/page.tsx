"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10">
        <h1 className="text-xl md:text-2xl font-bold">
          Nova<span className="text-[#5865F2]">Core</span>
        </h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-[#5865F2] px-4 py-2 rounded-xl text-sm">
          Get Started
        </button>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-10 py-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Build Discord Communities That
            <span className="text-[#5865F2]"> Grow</span>
          </h1>

          <p className="text-gray-400 mt-6 text-base md:text-lg">
            We design modern Discord servers for creators, startups, and gaming brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-[#5865F2] px-6 py-3 rounded-xl">
              Start Project
            </button>
            <button className="border border-white/10 px-6 py-3 rounded-xl">
              View Work
            </button>
          </div>
        </div>

        {/* VISUAL BOX */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="space-y-3">
            <div className="bg-[#5865F2]/20 p-3 rounded-xl"># welcome</div>
            <div className="bg-white/5 p-3 rounded-xl text-gray-300">Verification</div>
            <div className="bg-white/5 p-3 rounded-xl text-gray-300">Automation</div>
            <div className="bg-white/5 p-3 rounded-xl text-gray-300">Moderation</div>
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 md:px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Setup", "Automation", "Growth"].map((item) => (
            <div key={item} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold mb-2">{item}</h3>
              <p className="text-gray-400 text-sm">
                Professional Discord infrastructure built for engagement.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-10 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to build your server?
          </h2>

          <p className="text-gray-400 mb-6">
            Let’s create something people actually enjoy using.
          </p>

          <button className="bg-[#5865F2] px-8 py-4 rounded-xl">
            Get Started
          </button>
        </div>
      </section>

    </main>
  );
}