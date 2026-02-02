import { useMemo } from 'react';

const hexToRgb = (hex: string): [number, number, number] => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return [r, g, b];
};

const rgbToString = (rgb: [number, number, number]): string =>
  `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);

const generateGradient = (
  baseHex: string,
  steps = 9,
  white = 245,
  black = 15
): string[] => {
  const [r, g, b] = hexToRgb(baseHex);
  return Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    if (t < 0.5) {
      const k = t / 0.5;
      return rgbToString([
        lerp(white, r, k),
        lerp(white, g, k),
        lerp(white, b, k),
      ]);
    } else {
      const k = (t - 0.5) / 0.5;
      return rgbToString([
        lerp(r, black, k),
        lerp(g, black, k),
        lerp(b, black, k),
      ]);
    }
  });
};

// Hook
export const useGradient = (baseColor: string) => {
  return useMemo(() => {
    const colors = generateGradient(baseColor);

    return {
      'gradient-100': colors[0],
      'gradient-200': colors[1],
      'gradient-300': colors[2],
      'gradient-400': colors[3],
      'gradient-500': colors[4],
      'gradient-600': colors[5],
      'gradient-700': colors[6],
      'gradient-800': colors[7],
      'gradient-900': colors[8],
    };
  }, [baseColor]);
};
