import { ProductCard } from '@/components/product-card'

const products = [
  {
    id: 1,
    name: "SlickPhone",
    description: "The most advanced smartphone with cutting-edge technology.",
    price: 999,
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 2,
    name: "SlickWatch",
    description: "A stylish smartwatch with health and fitness tracking features.",
    price: 299,
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    id: 3,
    name: "SlickPods",
    description: "Wireless earbuds with crystal-clear sound and long battery life.",
    price: 199,
    image: "/placeholder.svg?height=300&width=300"
  }
]

export function ProductSection() {
  return (
    <section id="products" className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Our Products</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

