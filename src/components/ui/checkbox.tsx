"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const checkboxVariants = {
  default: " dark:border-gray-600",
  hoverUnselected: "hover:border-[#CDCDCD] hover:dark:border-gray-500",
  hoverSelected: "data-[state=checked]:hover:opacity-75 data-[state=checked]:hover:dark:bg-primary/90",
  pressed: "active:scale-95 active:ring-2 active:ring-[#2469F6]/25",
  focus: "focus-visible:border-[#2469F6] focus-visible:ring-[#2469F6]/50",
  invalid: "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  disabled: "disabled:cursor-not-allowed disabled:opacity-50",
}

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>

function Checkbox({
  className,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer shrink-0 h-[23px] w-[23px] rounded-[4px] border shadow-xs transition-all",
        "size-4 outline-none relative",
        "dark:bg-input/30",
        "data-[state=checked]:bg-[#2469F6] data-[state=checked]:border-[#2469F6]",
        "data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary",
        checkboxVariants.default,
        checkboxVariants.hoverUnselected,
        checkboxVariants.hoverSelected,
        checkboxVariants.pressed,
        checkboxVariants.focus,
        checkboxVariants.invalid,
        checkboxVariants.disabled,
        className
      )}
      {...props}
    >
      {/* Regular check (visible when selected) */}
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>

      {/* Gray check (visible on hover when unselected) */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center",
        "opacity-0 hover:opacity-50",
        "data-[state=checked]:hover:opacity-0", // Hide when checked
        "transition-opacity duration-100",
        "text-gray-400" // Gray color
      )}>
        <CheckIcon className="size-3.5" />
      </div>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }