'use client'

import { motion } from 'framer-motion'

interface MarketCardProps {
  title: string
  description: string
  odds: string
}

const MarketCard = ({ title, description, odds }: MarketCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">{odds}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          >
            Trade
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default MarketCard

