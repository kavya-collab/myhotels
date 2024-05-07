import React, { forwardRef, HTMLProps, Ref } from 'react';
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StepperProps {
    label: string;
    onChange: (value: number) => void;
    value: number;
    className?: string;
  }
  
  const Stepper = forwardRef<HTMLDivElement, StepperProps>(
    ({ className, label, onChange, value, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-10 min-w-[190px] items-center justify-between gap-2 rounded-md border border-input bg-background py-2 text-sm',
          className,
        )}
      >
        <Button
          disabled={value === 0}
          variant='ghost'
          onClick={() => onChange(value - 1)}
        >
          -
        </Button>
        <span
          className={cn(!value && 'truncate text-muted-foreground')}
          ref={ref}
          {...props}
        >
          {value} {label}
          {value > 1 || value === 0 ? 's' : ''}
        </span>
        <Button
          disabled={value === 100}
          variant='ghost'
          onClick={() => onChange(value + 1)}
        >
          +
        </Button>
      </div>
    );
  },
);

Stepper.displayName = 'Stepper';

export { Stepper };
