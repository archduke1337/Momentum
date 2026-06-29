'use client';

const questions = [
  'Which payload and route should we pilot first?',
  'Can operators understand and override the robot safely?',
  'How do we connect this to our workflow later?',
  'What training does the team need before deployment?',
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface/25">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
              Built for the questions that come before a purchase order
            </h2>
          </div>
          <div className="grid gap-3">
            {questions.map((question) => (
              <div key={question} className="border border-border bg-background p-5">
                <p className="text-lg font-semibold leading-7 text-foreground">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
