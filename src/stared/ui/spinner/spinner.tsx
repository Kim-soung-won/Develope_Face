"use client"
import { motion } from "framer-motion"

interface LoadingCircleSpinnerProps {
  size?: number
  color?: string
  isLoading?: boolean
}

export function LoadingCircleSpinner({
  size = 40,
  color = "#fff",
  isLoading = true
}: LoadingCircleSpinnerProps) {
  if (!isLoading) return null

  const borderWidth = Math.max(2, size / 10)

  return (
    <div className="container">
      <motion.div
        className="spinner"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${borderWidth}px`,
          borderStyle: "solid",
          borderColor: "#000",
          borderTopColor: color,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          gap: 10px;
        }
        .spinner {
          will-change: transform;
        }
      `}</style>
    </div>
  )
}

export default LoadingCircleSpinner
