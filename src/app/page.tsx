import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProductSection } from '@/components/product-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <Header />
      <Hero />
      <ProductSection />
      <Footer />
    </main>
  )
}

