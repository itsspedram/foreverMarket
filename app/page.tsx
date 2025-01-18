'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import MarketCard from './components/MarketCard'
import Modal from './components/Modal'
import { Search, TrendingUp, DollarSign } from 'lucide-react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const featuredMarkets = [
    { id: 1, title: "US Presidential Election 2024", description: "Who will win the US Presidential Election in 2024?", odds: "3.5:1" },
    { id: 2, title: "Bitcoin Price EOY", description: "Will Bitcoin reach $100,000 by the end of 2023?", odds: "5:1" },
    { id: 3, title: "Oscar Best Picture", description: "Which film will win the Oscar for Best Picture in 2024?", odds: "2:1" },
    { id: 4, title: "SpaceX Mars Mission", description: "Will SpaceX successfully land humans on Mars by 2030?", odds: "10:1" },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Bet on the World's Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Predict outcomes, trade markets, and earn rewards
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-lg hover:shadow-blue-500/50 text-lg font-semibold"
          >
            Explore Markets
          </motion.button>
        </div>
      </section>

      {/* Featured Markets */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMarkets.map((market) => (
              <MarketCard key={market.id} {...market} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="flex flex-wrap justify-center items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/3 text-center px-4 mb-8 md:mb-0"
            >
              <Search size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Explore Markets</h3>
              <p className="text-gray-400">Browse through a wide range of prediction markets on various topics.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/3 text-center px-4 mb-8 md:mb-0"
            >
              <TrendingUp size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Make Predictions</h3>
              <p className="text-gray-400">Analyze the data and place your bets on the outcomes you believe in.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-1/3 text-center px-4"
            >
              <DollarSign size={48} className="mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-400">Win rewards for accurate predictions and climb the leaderboard.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Explore Markets">
        <p className="mb-4">Here you can explore all available prediction markets and place your bets.</p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search markets..."
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link href="/markets" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(false)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
            >
              View All Markets
            </motion.button>
          </Link>
        </div>
      </Modal>
    </div>
  )
}

