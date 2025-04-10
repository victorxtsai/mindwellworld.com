import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero'
import Features from '../components/Features'
import Subscriptions from '../components/Subscriptions';
import { useEffect } from 'react';

export default function Home() {

  // use this to navigate to right sections from other screens
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100) // short delay ensures layout is ready
      }
    }
  }, [])

  return (
    <div className="bg-gradient-to-br from-[#2F52E0] via-[#000000] to-[#000000]">
      <Header />
      <Hero / >
      <Features / >
      <Subscriptions />
      <Footer />        
    </div>
  )
}
