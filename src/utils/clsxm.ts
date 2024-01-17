import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxm = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};
