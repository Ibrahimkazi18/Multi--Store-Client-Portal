"use client"

import PopularContent from "@/components/popular-content"
import { Products } from "@/types-db"
import { useParams } from "next/navigation"

interface SuggestedListProps {
    products : Products[]
}

const SuggestedList = ({products} : SuggestedListProps) => {

  const {productId} = useParams()

  return (
    <>
        <h2 className="text-3xl text-neutral-600 font-semibold">
            Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-20 md:gap-x-4 md:gap-y-24 my-8 py-6 md:pt-16">
            {products.filter(item => item.id !== productId).map(item => (
                <PopularContent data={item} key={item.id}/>
            ))}
        </div>
    </>
  )
}

export default SuggestedList