import getOrder from "@/actions/get-orders"
import Box from "@/components/box"
import Container from "@/components/container"
import { auth } from "@clerk/nextjs/server"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import OrderContent from "./components/order-content"

export const revalidate = 0

const OrdersPage = async () => {

  const orders = await getOrder()
  const { userId } = auth()

  const formattedOrders = orders.filter((item) => item.userId === userId)

  return (
    <Container className="px-4 md:px-12 my-12 bg-white py-12 min-h-[80vh]">
        <Box className="text-neutral-700 text-sm items-center">
            <Link href={"/"} className="flex items-center gap-2">
                <Home className="w-4 h-4"/>
                Main Page
            </Link>

            <ChevronRight className="w-5 h-5 text-muted-foreground"/>
            <Link href={"/menu"} className="flex items-center gap-2">
                Products
            </Link>

            <ChevronRight className="w-5 h-5 text-muted-foreground"/>
            <Link href={"/orders"} className="flex items-center gap-2">
                Orders
            </Link>
        </Box>

        <h2 className="text-3xl text-neutral-700 font-semibold my-4">My Orders</h2>

        <OrderContent orders={formattedOrders} />
    </Container>
  )
}

export default OrdersPage