"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import logo from "@/assets/logo.png"
import { Button } from "./button"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Separated */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-12 md:h-32 w-auto" />
        </Link>

        {/* Centered Navigation Menu */}
        <div className="flex items-center gap-2 bg-background/5 border border-border/40 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-hero-accent",
                  isActive && "bg-hero-accent/10 text-hero-accent"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-hero-accent/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-hero-accent rounded-t-full">
                      <div className="absolute w-12 h-6 bg-hero-accent/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-hero-accent/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-hero-accent/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA Button - Separated */}
        <Button
          variant="ghost"
          className="hidden sm:flex rounded-full px-6 py-2 text-sm font-semibold 
          bg-hero-accent hover:bg-hero-accent/90 text-white transition-all duration-300 
          border-none shadow-lg shadow-hero-accent/20"
        >
          Empezar ahora
        </Button>
      </div>
    </div>
  )
}
