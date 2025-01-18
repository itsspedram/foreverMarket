'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import MarketCard from '../components/MarketCard'

const mockMarkets = [
  { id: 1, title: "US Presidential Election 2024", description: "Who will win the US Presidential Election in 2024?", odds: "3.5:1" },
  { id: 2, title: "Bitcoin Price EOY", description: "Will Bitcoin reach $100,000 by the end of 2023?", odds: "5:1" },
  { id: 3, title: "Oscar Best Picture", description: "Which film will win the Oscar for Best Picture in 2024?", odds: "2:1" },
  { id: 4, title: "SpaceX Mars Mission", description: "Will SpaceX successfully land humans on Mars by 2030?", odds: "10:1" },
  { id: 5, title: "AI Breakthrough", description: "Will AGI be achieved by a major tech company before 2025?", odds: "20:1" },
  { id: 6, title: "Climate Change Policy", description: "Will the US implement a carbon tax by 2024?", odds: "4:1" },
]

export default function Markets() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMarkets = mockMarkets.filter(market =>
    market.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Prediction Markets</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search markets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMarkets.map((market) => (
          <motion.div key={market.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <MarketCard {...market} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

