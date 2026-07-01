'use client';

import { Linkedin, Mail } from 'lucide-react';
import AnimatedTooltip from '@/components/smoothui/animated-tooltip';

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/momentum-robotics/',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:hello@momentumrobotics.in',
    icon: Mail,
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <AnimatedTooltip key={social.label} content={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex size-11 items-center justify-center border border-border bg-surface text-muted transition-colors duration-300 hover:border-foreground hover:text-foreground"
              aria-label={social.label}
            >
              <Icon className="size-4" aria-hidden="true" />
            </a>
          </AnimatedTooltip>
        );
      })}
    </div>
  );
}
