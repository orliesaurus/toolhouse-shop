import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden bg-zinc-900 text-white">
      <CardHeader className="p-0">
        <Image src={product.image} alt={product.name} width={300} height={300} className="w-full object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2 text-2xl">{product.name}</CardTitle>
        <p className="mb-4 text-gray-400">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-white text-black hover:bg-gray-200">
          Purchase Now
        </Button>
      </CardFooter>
    </Card>
  )
}

