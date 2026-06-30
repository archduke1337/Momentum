export function Stats() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid divide-x-0 divide-y divide-border/50 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-10 pr-8 md:py-16">
            <p className="font-heading text-5xl font-bold leading-none text-primary md:text-6xl">3</p>
            <p className="mt-1 text-sm text-muted">Robot platforms</p>
          </div>
          <div className="py-10 md:px-8 md:py-16">
            <p className="font-heading text-5xl font-bold leading-none text-primary md:text-6xl">ROS2</p>
            <p className="mt-1 text-sm text-muted">Navigation stack</p>
          </div>
          <div className="py-10 md:pl-8 md:py-16">
            <p className="font-heading text-5xl font-bold leading-none text-primary md:text-6xl">India</p>
            <p className="mt-1 text-sm text-muted">Built and supported locally</p>
          </div>
        </div>
      </div>
    </section>
  );
}
