"use client"

import { useState, useEffect } from "react"

export function TotalPortfolioValue() {
  const [value, setValue] = useState(100000)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const change = Math.random() * 1000 - 500
        return Math.max(0, prevValue + change)
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-4xl font-bold">
      ${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
    </div>
  )
}

