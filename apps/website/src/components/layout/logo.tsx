'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = 'h-8 w-auto', width = 200, height = 40 }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ width, height }} className={className} />;
  }

  const isLight = resolvedTheme === 'light';

  return (
    <Image
      src="/logo.png"
      alt="Momentum Robotics"
      width={width}
      height={height}
      className={`${className} ${isLight ? 'invert' : ''}`}
      priority
    />
  );
}
