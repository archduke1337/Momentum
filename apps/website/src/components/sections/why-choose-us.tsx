const pipeline = [
  {
    stage: '01',
    title: 'Learn autonomy',
    body: 'Pixel and Orbit make ROS2 navigation visible: mapping, localization, sensing, path planning, and recovery behavior. Teams build working intuition before scaling.',
  },
  {
    stage: '02',
    title: 'Validate movement',
    body: 'Orbit tests payload routes, corridor navigation, and operator handoff at a larger physical scale. The same autonomy logic, validated for real conditions.',
  },
  {
    stage: '03',
    title: 'Deploy Cyborg',
    body: 'Cyborg takes the validated stack into factories and warehouses. Same navigation. Same sensors. Now moving loads on production routes.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-primary/60 uppercase">pipeline</p>
        <h2 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
          One navigation stack. Three scale points.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          Every product runs the same autonomy core. The difference is physical scale and deployment readiness.
        </p>
      </div>

      <div className="mt-14 grid gap-0 md:grid-cols-3">
        {pipeline.map((item, index) => (
          <div
            key={item.stage}
            className="relative border-l border-border pl-6 pb-10 md:border-l-0 md:border-t md:pb-0 md:pt-8 md:px-6"
          >
            <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full border border-primary/30 bg-background text-xs font-mono font-bold text-primary md:left-1/2 md:top-0">
              {item.stage}
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
