const checks = [
  {
    q: 'Which payload and route should we pilot first?',
    a: 'Start with one repeatable movement path. Map the floor, measure the load, scope the handoff points. We help evaluate before any commitment.',
  },
  {
    q: 'Can operators understand and override the robot safely?',
    a: 'Every platform has an emergency stop, visible status indicators, and a manual override path. Operator training takes a day, not a week.',
  },
  {
    q: 'How do we connect this to our workflow later?',
    a: 'Cyborg exposes an integration API layer. Start with standalone routes, then connect to WMS, MES, or your existing orchestration layer.',
  },
  {
    q: 'What training does the team need before deployment?',
    a: 'Pixel and Orbit serve as training platforms. Teams learn ROS2 navigation fundamentals before Cyborg arrives on the factory floor.',
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface/25">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">assessment</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
            Before committing to a fleet
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            These are the questions that come up in every first conversation. Here is how we address them.
          </p>
        </div>

        <div className="mt-14 mx-auto max-w-3xl space-y-4">
          {checks.map((item) => (
            <details key={item.q} className="group border border-border bg-background open:bg-surface">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-foreground list-none">
                {item.q}
                <span className="size-5 flex items-center justify-center rounded-full border border-primary/30 text-xs text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-border px-5 py-4">
                <p className="text-sm leading-6 text-muted-foreground">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
