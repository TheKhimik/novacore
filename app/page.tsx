"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-[#0B0F19] text-white min-h-screen">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0F19]/70 border-b border-white/10 px-8 py-5 flex justify-between"
      >
        <h1 className="font-bold text-xl">
          Nova<span className="text-[#5865F2]">Core</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-[#5865F2] px-5 py-2 rounded-xl text-sm">
          Get Started
        </button>
      </motion.nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 py-28 grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Build Discord Communities That{" "}
            <span className="text-[#5865F2]">Scale Fast</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Premium Discord setups for creators, brands, and startups.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#5865F2] px-6 py-3 rounded-xl">
              Start Project
            </button>
            <button className="border border-white/10 px-6 py-3 rounded-xl">
              View Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-6"
        >
          <div className="space-y-3">
            {["Welcome Channel", "Verification", "Auto Roles", "Tickets"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white/5 hover:bg-white/10 transition p-4 rounded-xl"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>

      </section>

      {/* FEATURES */}
      <section id="features" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Premium Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Fast Server Setup",
            "Modern UI Design",
            "Automation Bots",
            "Security Systems",
            "Growth Strategy",
            "24/7 Optimization",
          ].map((feature) => (
            <motion.div
              key={feature}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-28 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold">
            Ready to build something powerful?
          </h2>

          <p className="text-gray-400 mt-4">
            Let’s launch your Discord community the right way.
          </p>

          <button className="mt-8 bg-[#5865F2] px-8 py-4 rounded-xl">
            Get Started
          </button>
        </motion.div>
      </section>{/* DISCORD AUTOMATION SECTION */}
<section className="px-8 py-28 max-w-6xl mx-auto">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">
  Turn Your Discord Into a Fully Automated Community That Runs Itself
</h2>

<p className="text-gray-400 mt-4 max-w-2xl mx-auto">
  We design and deploy high-performance Discord systems that handle verification, moderation, onboarding, and engagement — so your server grows and runs smoothly without constant management.
</p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      "Verification System",
      "Ticket Support Bot",
      "Auto Role Assignment",
      "Moderation AI",
      "Community Analytics",
      "Custom Bot Systems",
    ].map((item) => (
      <div
        key={item}
        className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-[#5865F2]/40 transition"
      >
        <h3 className="text-lg font-semibold">{item}</h3>
        <p className="text-gray-400 mt-2">
          Fully automated Discord feature for professional community management.
        </p>
      </div>
    ))}

  </div>

</section>
<section id="contact" className="px-8 py-28 max-w-4xl mx-auto">

  <h2 className="text-4xl font-bold mb-10 text-center">
    Get in Touch
  </h2>

  <form
    action="https://formspree.io/f/xzdwbvlk"
    method="POST"
    className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-3xl"
  >

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
      required
    />

    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10"
      required
    />

    <button
      type="submit"
      className="w-full bg-[#5865F2] py-4 rounded-xl font-semibold hover:bg-[#4752d6]"
    >
      Send Message
    </button>

  </form>

</section>
    </main>
  );
}