'use client'
import { motion, AnimatePresence } from 'framer-motion'
import './TopNotificationBanner.css'
import { useState } from 'react'

export const TopNotificationBanner = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="top-notification-banner"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="banner-content">
              <span className="banner-title">🚀 새로운 알림 메시지입니다</span>
              <button className="hide-btn" onClick={() => setVisible(false)}>
                닫기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!visible && (
        <motion.button
          className="reopen-btn"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setVisible(true)}
        >
          🔔 알림 보기
        </motion.button>
      )}
    </>
  )
}
