import { useEffect, useState } from "react";
import { Phone, MapPin, Clock, Star, Heart, ChefHat, Coffee, Cake } from "lucide-react";

const PHONE = "+917795374343";
const PHONE_DISPLAY = "+91 77953 74343";
const MAPS_URL = "https://www.google.com/maps/place/LE+KENE/@12.9157344,77.6445352,17z";
const ADDRESS = "174/A, 19th Main Rd, Sector 4, HSR Layout, Bengaluru, Karnataka 560102";

const signaturePastries = [
  { name: "Chocolate Eclair", price: 120, note: "Melt-in-the-mouth signature" },
  { name: "Tiramisu Mini Eclair", price: 130, note: "A guest favourite — 9/10" },
  { name: "Black Forest Profiterole", price: 140, note: "Cherry, cream, choux" },
  { name: "Vanilla Mango Tart", price: 160, note: "Seasonal & fragrant" },
  { name: "Chocolate Cupcake", price: 100, note: "Rich, not too sweet" },
  { name: "Vanilla Chiffon Cake", price: 150, note: "By the slice" },
  { name: "Brown Butter Brownie", price: 110, note: "Deep, nutty, fudgy" },
];

const savouryBites = [
  { name: "Jalapeño Cheese Bun", price: 90 },
  { name: "Margherita Pizza Muffin", price: 100 },
  { name: "Herb & Cheese Croissant", price: 130 },
];

const drinks = [
  { name: "Cold Brew Coffee", price: 160 },
  { name: "Iced Chocolate", price: 150 },
  { name: "Café Latte", price: 140 },
  { name: "Fresh Lemonade", price: 100 },
];

const testimonials = [
  {
    quote: "Desserts are yummy and affordable. Do try their eclairs and profiteroles — they melt in the mouth.",
    name: "Priya R.",
    role: "HSR regular",
  },
  {
    quote: "Not too sweet. You can have a lot of dessert together and still crave for more. Must try.",
    name: "Arjun M.",
    role: "Pastry enthusiast",
  },
  {
    quote: "This cosy patisserie serves an eclectic selection of baked goodies. Really love the quality and taste.",
    name: "Sanya K.",
    role: "Visitor from Indiranagar",
  },
  {
    quote: "A small, cosy place with welcoming staff. The Tiramisu Mini Eclair was a 9/10!",
    name: "Rohan D.",
    role: "First-time guest",
  },
];

const sellingPoints = [
  { icon: Heart, title: "Not too sweet", body: "The hallmark our regulars love — refined sweetness, never cloying." },
  { icon: ChefHat, title: "Handcrafted daily", body: "Small-batch bakes, made fresh each morning by our pastry team." },
  { icon: Cake, title: "Signature éclairs", body: "Melt-in-the-mouth choux pastry, the heart of LE KÉNE." },
  { icon: Coffee, title: "Open till 11 PM", body: "Cosy self-service space for evening treats and lingering coffees." },
];

const LeKene = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="lekene-root" data-testid="lekene-home">
      {/* NAV */}
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "lekene-nav-scrolled" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2" data-testid="brand-logo">
            <span className="font-serif tracking-[0.18em] text-[1.35rem] sm:text-2xl font-medium text-ink">
              LE KÉNE
            </span>
            <span className="hidden sm:inline text-[0.65rem] tracking-[0.32em] uppercase text-ink/50">
              Pâtisserie
            </span>
          </a>
          <div className="hidden md:flex items-center gap-9 text-[0.78rem] tracking-[0.22em] uppercase text-ink/70">
            <a href="#about" className="lekene-nav-link" data-testid="nav-about">About</a>
            <a href="#menu" className="lekene-nav-link" data-testid="nav-menu">Menu</a>
            <a href="#reviews" className="lekene-nav-link" data-testid="nav-reviews">Love</a>
            <a href="#visit" className="lekene-nav-link" data-testid="nav-visit">Visit</a>
          </div>
          <a
            href={`tel:${PHONE}`}
            data-testid="nav-call-button"
            className="lekene-btn-pill lekene-btn-primary text-xs sm:text-sm"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={1.6} />
            <span className="hidden sm:inline">Call us</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="lekene-hero relative overflow-hidden">
        <div className="lekene-hero-grain" />
        <div className="lekene-hero-glow" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-36 sm:pt-44 pb-20 sm:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
          {/* Left text */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-3 mb-7" data-testid="hero-eyebrow">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-ink/60">
                HSR Layout · Bengaluru
              </span>
            </div>
            <h1
              data-testid="hero-title"
              className="font-serif text-[3.4rem] sm:text-[5rem] lg:text-[6.5rem] leading-[0.95] tracking-tight text-ink"
            >
              Petite French
              <br />
              <span className="italic text-gold/90">pâtisserie.</span>
              <br />
              Big on taste.
            </h1>
            <p
              data-testid="hero-subtitle"
              className="mt-8 max-w-xl text-ink/70 text-base sm:text-lg leading-relaxed"
            >
              A cosy corner in HSR for hand-rolled éclairs, choux profiteroles and
              small-batch tarts — refined sweetness, made fresh each morning,
              served with warmth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4" data-testid="hero-cta-group">
              <a
                href={`tel:${PHONE}`}
                data-testid="hero-call-button"
                className="lekene-btn-pill lekene-btn-primary"
              >
                <Phone className="w-4 h-4" strokeWidth={1.6} />
                Call us
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-directions-button"
                className="lekene-btn-pill lekene-btn-ghost"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.6} />
                Get directions
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4" data-testid="hero-meta">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill={i <= 4 ? "#C9A84C" : "none"}
                      stroke="#C9A84C"
                      strokeWidth={1.4}
                    />
                  ))}
                </div>
                <span className="text-sm text-ink/70">
                  <span className="font-medium text-ink">4.4</span> · 735+ Google reviews
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink/70">
                <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                11:00 AM — 11:00 PM, daily
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative">
            <div className="lekene-hero-card">
              <div className="lekene-hero-card-inner">
                <div className="absolute inset-0 lekene-pastry-art" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <span className="text-[0.65rem] tracking-[0.4em] uppercase text-cream/70">
                    Today on the counter
                  </span>
                  <p className="font-serif text-3xl text-cream mt-2 leading-tight">
                    Tiramisu mini éclair
                  </p>
                  <p className="text-cream/70 text-sm mt-2">
                    Mascarpone cream, espresso glaze, choux baked at dawn.
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-2xl text-gold">₹130</span>
                    <span className="text-[0.65rem] tracking-[0.3em] uppercase text-cream/50">
                      9/10 · guest pick
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lekene-hero-chip lekene-hero-chip-1">
              <span className="font-serif italic text-ink">not too sweet</span>
            </div>
            <div className="lekene-hero-chip lekene-hero-chip-2">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-ink/70">
                LGBTQ+ friendly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="lekene-section relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4">
            <span className="text-[0.7rem] tracking-[0.4em] uppercase text-ink/50">
              · 01 — Our story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-5 leading-[1.05]">
              A Parisian
              <br />
              <em className="text-gold not-italic font-light italic">whisper</em>
              <br />
              in HSR.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-ink/75 text-lg leading-relaxed">
              LE KÉNE is a small, self-service pâtisserie tucked into 19th Main —
              the kind of place where the smell of fresh choux floats out at sunrise
              and the lights stay warm till late.
            </p>
            <p className="text-ink/65 text-base leading-relaxed mt-6">
              We bake in small batches, by hand, every morning. Our éclairs are
              piped fresh, our tarts cooled on marble, our coffee pulled to order.
              No queues, no pretence — just refined sweetness, served the way we
              like it ourselves: not too sweet, always honest.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10" data-testid="selling-points-grid">
              {sellingPoints.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  data-testid={`selling-point-${title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-cream p-7 group hover:bg-cream-deep transition-colors duration-500"
                >
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.4} />
                  <h3 className="font-serif text-xl text-ink mt-4">{title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed mt-2">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="lekene-section-dark relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-cream/50">
                · 02 — The counter
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-5 leading-[1.05]">
                What we&apos;re
                <br />
                baking <em className="italic text-gold">today.</em>
              </h2>
            </div>
            <p className="text-cream/60 max-w-md text-base leading-relaxed">
              A rotating, hand-piped selection. Prices in INR. Most items sell out
              by evening — call ahead for larger orders.
            </p>
          </div>

          {/* Signature pastries */}
          <div className="mb-20" data-testid="menu-pastries">
            <div className="flex items-baseline gap-4 mb-9">
              <span className="font-serif italic text-gold text-xl">Signature pastries</span>
              <span className="flex-1 h-px bg-cream/15" />
            </div>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-2">
              {signaturePastries.map((item) => (
                <div
                  key={item.name}
                  data-testid={`menu-item-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="lekene-menu-row group"
                >
                  <div className="flex items-baseline justify-between gap-4 py-5">
                    <div className="min-w-0">
                      <p className="font-serif text-lg text-cream group-hover:text-gold transition-colors duration-300">
                        {item.name}
                      </p>
                      <p className="text-cream/45 text-xs mt-1 tracking-wide">{item.note}</p>
                    </div>
                    <span className="font-serif text-lg text-cream/80 whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Savoury + drinks */}
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-testid="menu-savoury">
              <div className="flex items-baseline gap-4 mb-9">
                <span className="font-serif italic text-gold text-xl">Savoury bites</span>
                <span className="flex-1 h-px bg-cream/15" />
              </div>
              <div className="space-y-1">
                {savouryBites.map((item) => (
                  <div
                    key={item.name}
                    data-testid={`menu-item-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="lekene-menu-row"
                  >
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="font-serif text-lg text-cream">{item.name}</p>
                      <span className="font-serif text-lg text-cream/80">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-testid="menu-drinks">
              <div className="flex items-baseline gap-4 mb-9">
                <span className="font-serif italic text-gold text-xl">Drinks</span>
                <span className="flex-1 h-px bg-cream/15" />
              </div>
              <div className="space-y-1">
                {drinks.map((item) => (
                  <div
                    key={item.name}
                    data-testid={`menu-item-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
                    className="lekene-menu-row"
                  >
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="font-serif text-lg text-cream">{item.name}</p>
                      <span className="font-serif text-lg text-cream/80">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-cream/10">
            <p className="text-cream/60 text-sm">
              <em className="text-gold not-italic">Average for two</em> · approximately ₹600
            </p>
            <a
              href={`tel:${PHONE}`}
              data-testid="menu-call-button"
              className="lekene-btn-pill lekene-btn-ghost-light"
            >
              <Phone className="w-4 h-4" strokeWidth={1.6} />
              Pre-order over call
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="lekene-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <span className="text-[0.7rem] tracking-[0.4em] uppercase text-ink/50">
                · 03 — Customer love
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-5 leading-[1.05]">
                A neighbourhood
                <br />
                <em className="text-gold italic font-light">favourite.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 self-end">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      fill={i <= 4 ? "#C9A84C" : "none"}
                      stroke="#C9A84C"
                      strokeWidth={1.4}
                    />
                  ))}
                </div>
                <span className="font-serif text-2xl text-ink">4.4</span>
              </div>
              <p className="text-ink/65 text-sm">
                Across 735+ Google reviews from HSR Layout regulars.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-ink/10 border border-ink/10" data-testid="testimonials-grid">
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                data-testid={`testimonial-${idx}`}
                className="bg-cream p-9 sm:p-11 flex flex-col"
              >
                <div className="flex mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5" fill="#C9A84C" stroke="#C9A84C" strokeWidth={1.4} />
                  ))}
                </div>
                <p className="font-serif text-xl sm:text-2xl text-ink leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto pt-8 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-ink text-sm">{t.name}</p>
                    <p className="text-ink/55 text-xs tracking-wide">{t.role}</p>
                  </div>
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase text-gold">
                    Google review
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="lekene-section-cream-deep relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="text-[0.7rem] tracking-[0.4em] uppercase text-ink/50">
              · 04 — Visit us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink mt-5 leading-[1.05]">
              Come say
              <br />
              <em className="text-gold italic font-light">bonjour.</em>
            </h2>
            <p className="mt-7 text-ink/70 text-base leading-relaxed max-w-md">
              We&apos;re a small, self-service space on 19th Main. Step in for a coffee,
              stay for an éclair. Walk-ins welcome — pre-orders too.
            </p>

            <div className="mt-10 space-y-7" data-testid="visit-contact-block">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ink/50 mb-1">
                    Address
                  </p>
                  <p className="text-ink text-base leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ink/50 mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE}`}
                    data-testid="visit-phone-link"
                    className="text-ink text-base hover:text-gold transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[0.65rem] tracking-[0.3em] uppercase text-ink/50 mb-1">
                    Hours
                  </p>
                  <p className="text-ink text-base">11:00 AM — 11:00 PM</p>
                  <p className="text-ink/55 text-sm">Open daily · all week</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                data-testid="visit-call-button"
                className="lekene-btn-pill lekene-btn-primary"
              >
                <Phone className="w-4 h-4" strokeWidth={1.6} />
                Call us
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="visit-directions-button"
                className="lekene-btn-pill lekene-btn-ghost"
              >
                <MapPin className="w-4 h-4" strokeWidth={1.6} />
                Get directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              data-testid="visit-map-link"
              className="lekene-map-card group"
            >
              <iframe
                title="LE KÉNE on Google Maps"
                src="https://www.google.com/maps?q=LE+KENE+HSR+Layout+Bengaluru&output=embed"
                className="lekene-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="lekene-map-pin">
                <MapPin className="w-4 h-4" strokeWidth={1.6} />
                <span className="text-xs tracking-[0.2em] uppercase">Open in Google Maps</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lekene-footer" data-testid="site-footer">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <p className="font-serif tracking-[0.18em] text-2xl text-cream">LE KÉNE</p>
              <p className="text-cream/55 text-sm tracking-[0.32em] uppercase mt-1">
                Pâtisserie · HSR
              </p>
              <p className="mt-6 font-serif italic text-cream/70 text-lg max-w-sm">
                &ldquo;Petite French pâtisserie. Big on taste.&rdquo;
              </p>
            </div>
            <div className="md:col-span-4 text-cream/70 text-sm leading-relaxed">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Find us</p>
              <p>{ADDRESS}</p>
              <a
                href={`tel:${PHONE}`}
                data-testid="footer-phone"
                className="block mt-3 hover:text-gold transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="md:col-span-3 text-cream/70 text-sm">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3">Hours</p>
              <p>Mon — Sun</p>
              <p>11:00 AM — 11:00 PM</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                data-testid="footer-directions"
                className="inline-flex items-center gap-2 mt-4 text-cream hover:text-gold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.6} />
                <span className="text-xs tracking-[0.2em] uppercase">Directions</span>
              </a>
            </div>
          </div>
          <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-cream/40 text-xs tracking-wide">
            <p>© {new Date().getFullYear()} LE KÉNE — Made with care in HSR Layout.</p>
            <p className="italic">Everyone is welcome here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeKene;
