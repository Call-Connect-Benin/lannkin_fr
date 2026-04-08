import { TESTIMONIALS } from "@/data/homepage";
import { Container } from "@/presentation/components/ui/Container";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-16">
      <Container className="relative z-10">
        <div className="mb-10 text-center">
          <p
            className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider"
            style={{ color: "#498f6d" }}
          >
            {TESTIMONIALS.badge}
          </p>
          <h2
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#FFFFFF" }}
          >
            {TESTIMONIALS.title}
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            {TESTIMONIALS.subtitle}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.items.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className="mb-4 flex items-center gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} style={{ color: "#f59e0b" }}>★</span>
                ))}
              </div>
              <p
                className="mb-5 text-sm italic leading-relaxed"
                style={{ color: "rgba(255,255,255,0.70)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                  {testimonial.name}
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {testimonial.company} · {testimonial.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
