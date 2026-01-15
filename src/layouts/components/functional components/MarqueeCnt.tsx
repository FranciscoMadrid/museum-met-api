import React from 'react'
import Marquee from 'react-fast-marquee'

export interface MarqueeCntProps {
  children: React.ReactNode;
  className?: string
  direction?: 'left' | 'right'
  speed?: number,
  autoFill?: boolean,
  showGradient?: boolean
}

export default function MarqueeCnt(
  {
    children, 
    className,
    direction = 'right',
    speed = 50,
    autoFill = false,
    showGradient = false,
  }:MarqueeCntProps) {
  return (
    <Marquee
      autoFill={autoFill}
      className={`${className}`}
      direction={direction}
      speed={speed}
      gradient={showGradient}
    >
      {children}
    </Marquee>
  )
}
