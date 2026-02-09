"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  baseTop?: number
  baseTopMobile?: number
  incrementY?: number
  incrementYMobile?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative flex flex-col", className)}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      baseTop = 112,
      baseTopMobile,
      incrementY = 10,
      incrementYMobile,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = React.useState(false)
    
    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024)
      }
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
    
    const effectiveIncrement = isMobile && incrementYMobile != null ? incrementYMobile : incrementY
    const y = index * effectiveIncrement
    const effectiveBaseTop = isMobile && baseTopMobile != null ? baseTopMobile : baseTop

    return (
      <motion.div
        ref={ref}
        className={cn("sticky", className)}
        style={{
          ...style,
          top: effectiveBaseTop + y,
          zIndex: 100 + index,
        }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }
