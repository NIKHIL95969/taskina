"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Checkbox } from "./ui/checkbox"

interface ListItemProps {
  text: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  rightElement?: React.ReactNode
  className?: string
}

export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ text, checked, onCheckedChange, rightElement, className, ...props }, ref) => {
    const handleCheckedChange = (newChecked: boolean) => {
      if (onCheckedChange) {
        onCheckedChange(newChecked);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between w-full p-3 bg-white",
          "hover:bg-gray-50 cursor-pointer transition-colors", // Added hover effect
          "active:bg-gray-100", // Added active/pressed state
          className,
        )}
        onClick={() => handleCheckedChange(!checked)} // Make entire item clickable
        {...props}
      >
        <span className="text-sm font-medium text-gray-700">{text}</span>
        {rightElement || (
          <div 
            className="flex items-center" 
            onClick={(e) => e.stopPropagation()} // Prevent double toggle
          >
            <Checkbox 
              checked={checked} 
              onCheckedChange={handleCheckedChange}
              className="hover:border-[#CDCDCD] hover:dark:border-gray-500" // Ensure hover matches parent
            />
          </div>
        )}
      </div>
    )
  },
)

ListItem.displayName = "ListItem"