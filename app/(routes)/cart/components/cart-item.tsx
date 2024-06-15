"use client"

import Box from "@/components/box"
import { Button } from "@/components/ui/button"
import useCart from "@/hooks/use-carts"
import { cn } from "@/lib/utils"
import { Products } from "@/types-db"
import { Trash } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CartItemProps {
    item : Products
}

const CartItem = ({item} : CartItemProps) => {

  const [qty, setQty] = useState(item.qty ?? 1)

  const cart = useCart()

  const handleQty = (num : number) => {
    setQty(num)
    cart.updateItemQuantity(item.id, num)
  }

  return (
    <Box className="flex items-center gap-4 border border-gray-200 p-3 rounded-lg">
        <div className="aspect-square w-24 min-w-24 h-24 min-h-24 rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
            <Image 
                src={item.images[0].url}
                fill
                alt={item.id}
                className="w-full h-full object-contain"
            />
        </div>

        <div>
            <h2 className="w-full min-w-60 whitespace-nowrap truncate font-semibold text-2xl text-neutral-700">
                {item.name}
            </h2>

            <div className="flex w-full items-center max-w-44 justify-center gap-2 flex-wrap mt-4">
                {item.cuisine && (
                    <div className="rounded-md bg-purple-500/20 px-2 py-[2px] text-[8px] font-bold capitalize">
                        {item.cuisine}
                    </div>
                )}

                {item.category && (
                    <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[8px] font-bold capitalize">
                        {item.category}
                    </div>
                )}

                {item.kitchen && (
                    <div className={`rounded-md ${item.kitchen === "Non-Vegetarian" ? "bg-red-500/20" : "bg-emerald-500/20"} px-2 py-[2px] text-[8px] font-bold capitalize`}>
                        {item.kitchen}
                    </div>
                )}

                {item.size && (
                    <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[8px] font-bold capitalize">
                        {item.size}
                    </div>
                )}
            </div>
        </div>

        <Box>
            <div className="flex items-center gap-2">
                {
                    [1,2,3,4,5].map(num => (
                        <div key={num} className={cn("w-8 h-8 cursor-pointer rounded-full flex justify-center items-center border border-hero", qty === num ? "bg-hero shadow-md text-white" : "bg-transparent shadow-none")} onClick={() => handleQty(num)}>
                            {num}
                        </div>
                    ))
                }
            </div>
        </Box>

        <Box className="flex items-center justify-center h-full">
            <h2 className="text-xl font-semibold text-black">₹{item.price * item.qty}</h2>
        </Box>

        <div onClick={() => cart.removeItem(item.id)} className="w-auto m-auto">
            <Trash className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-red-500"/>
        </div>
    </Box>
  )
}

export default CartItem