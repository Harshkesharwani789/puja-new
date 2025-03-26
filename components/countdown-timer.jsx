"use client"

import { useState, useEffect } from "react"

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Cleanup
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base">
      <div className="bg-primary/10 px-2 py-1 rounded">
        <span className="font-semibold">{timeLeft.days.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">d</span>
      </div>
      <span>:</span>
      <div className="bg-primary/10 px-2 py-1 rounded">
        <span className="font-semibold">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">h</span>
      </div>
      <span>:</span>
      <div className="bg-primary/10 px-2 py-1 rounded">
        <span className="font-semibold">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">m</span>
      </div>
      <span>:</span>
      <div className="bg-primary/10 px-2 py-1 rounded">
        <span className="font-semibold">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">s</span>
      </div>
    </div>
  )
}

