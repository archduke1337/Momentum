export function Stats() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid divide-x-0 divide-y divide-border/50 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-10 pr-8 md:py-16">
            <p className="font-heading text-5xl font-bold leading-none text-primary md:text-6xl">3</p>
            <p className="mt-3 font-heading text-lg font-semibold text-foreground">Robot platforms</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
              Pixel for ROS2 education, Orbit for scaled validation, Cyborg for industrial load movement.
            </p>
          </div>
          <div className="py-10 md:px-8 md:py-16">
            <p className="font-heading text-5xl font-bold leading-none text-primary md:text-6xl">ROS2</p>
            <p className="mt-3 font-heading text-lg font-semibold text-foreground">Navigation stack</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
              SLAM, mapping, path planning, sensor fusion, and recovery behavior across all three platforms.
            </p>
          </div>
          <div className="py-10 md:pl-8 md:py-16">
            <p className="font-heading text-5xl font-bold leading-none text-primary md:text-6xl">India</p>
            <p className="mt-3 font-heading text-lg font-semibold text-foreground">Built and supported locally</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
              Design, assembly, pilot deployment, and service from Pune. Closer to the teams using the robots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
