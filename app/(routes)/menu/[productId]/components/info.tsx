"use client"

import { Button } from "@/components/ui/button"
import useCart from "@/hooks/use-carts"
import { cn } from "@/lib/utils"
import { Products } from "@/types-db"
import { CookingPot, ShoppingCart, Soup, SquareActivity, Utensils } from "lucide-react"
import { useState } from "react"

interface InfoProps {
    product : Products
}

const Info = ({product} : InfoProps) => {

  const [qty, setQty] = useState(1)

  const handleQty = (num : number) => {
    setQty(num)
    cart.updateItemQuantity(product.id, num)
  }

  const cart = useCart()
  const addToCart = (data : Products) => {
    cart.addItem({...data, qty:1})
  }

  return (
    <div>
        <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>

        <div className="mt-3 flex items-end justify-between">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab ex corporis vel magnam saepe.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sunt tempore ea, asperiores quasi possimus.
            </p>
        </div>

        <div className="w-full flex items-center justify-start gap-2 flex-wrap px-2 mt-8">
            {product.cuisine && (
                <div className="rounded-md bg-purple-500/20 px-3 py-2 text-base font-semibold flex items-center gap-2">
                    <CookingPot className="w-5 h-5"/>
                    {product.cuisine}
                </div>
            )}

            {product.category && (
                <div className="rounded-md bg-blue-500/20 px-3 py-2 text-base font-semibold flex items-center gap-2">
                    <Soup className="w-5 h-5"/>
                    {product.category}
                </div>
            )}

            {product.kitchen && (
                <div className={`rounded-md ${product.kitchen === "Non-Vegetarian" ? "bg-red-500/20" : "bg-emerald-500/20"} px-3 py-2 text-base font-semibold flex items-center gap-2`}>
                    <Utensils className="w-5 h-5"/>
                    {product.kitchen}
                </div>
            )}

            {product.size && (
                <div className="rounded-md bg-yellow-500/20 px-3 py-2 text-base font-semibold flex items-center gap-2">
                    <SquareActivity className="w-5 h-5"/>
                    {product.size}
                </div>
            )}
        </div>

        <div className="w-full grid grid-cols-4 my-12">
            <div className="col-span-1 space-y-8">
                <p className="text-lg font-semibold text-neutral-700">Price</p>
                <p className="text-lg font-semibold text-neutral-700">Serves</p>
            </div>

            <div className="col-span-3 space-y-8">
                <p className="text-xl font-bold text-black">₹{product.price}</p>
                <div className="flex items-center gap-2">
                    {
                        [1,2,3,4,5].map(num => (
                            <div key={num} className={cn("w-8 h-8 cursor-pointer rounded-full flex justify-center items-center border border-hero", qty === num ? "bg-hero shadow-md text-white" : "bg-transparent shadow-none")} onClick={() => handleQty(num)}>
                                {num}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <Button onClick={() => addToCart(product)} className="w-full py-6 text-xl font-semibold hover:bg-hero hover:text-white flex items-center justify-center gap-3">
            Add to Cart 
            <ShoppingCart className="w-4 h-4" />
        </Button>
    </div>
  )
}

export default Info