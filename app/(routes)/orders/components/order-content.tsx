"use client"

import { Orders } from "@/types-db"
import OrderItem from "./order-item"

interface OrderContentProps {
    orders : Orders[]
}

const OrderContent = ({ orders } : OrderContentProps) => {

  if(orders.length === 0) {
    return (
        <div className="w-full border rounded-lg border-gray-50 p-4 flex flex-col  items-center justify-center gap-4 mt-4">
            No Orders Found
        </div>
    )
  }

  return (
    <div className="w-full rounded-lg p-4 border-gray-50 flex flex-col  items-center justify-start gap-4 mt-4">
        {orders.map((order) => (
            <OrderItem order={order} key={order.id}/>
        ))}
    </div>
  )
}

export default OrderContent