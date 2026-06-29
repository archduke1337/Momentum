'use client';

const principles = [
  {
    title: 'Teach the stack',
    body: 'Pixel and Orbit make ROS2 navigation visible: mapping, localization, sensing, path planning, and recovery behavior.',
  },
  {
    title: 'Test the route',
    body: 'Orbit gives teams a larger physical platform to validate payload movement, corridor behavior, and navigation logic.',
  },
  {
    title: 'Move the load',
    body: 'Cyborg takes the same autonomy thinking into factories and warehouses where repeated material movement costs time.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
            Not three robots. One progression.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">
            Momentum becomes easier to understand when the products are arranged by learning curve and deployment seriousness.
          </p>
        </div>

        <div className="grid border border-border">
          {principles.map((item, index) => (
            <article key={item.title} className="grid gap-5 border-b border-border bg-surface p-6 last:border-b-0 md:grid-cols-[110px_1fr] md:p-8">
              <p className="font-heading text-5xl font-bold text-primary">{String(index + 1).padStart(2, '0')}</p>
              <div>
                <h3 className="font-heading text-3xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
