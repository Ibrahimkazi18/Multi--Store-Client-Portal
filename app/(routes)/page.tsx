import getProducts from "@/actions/get-products"
import filterProducts from "@/actions/products"
import Container from "@/components/container"
import PopularContent from "@/components/popular-content"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { UserButton } from "@clerk/nextjs"
import { FileHeart, Salad, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 0

const HomePage = async () => {

  const products = await getProducts({ isFeatured : true })
  const featuredProducts = await filterProducts(products)
  // console.log(products)

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Hungry?
            </p>

            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Just Come To <span className="py-4 block">Foodied & Order</span>
            </h2>

            <p className="text-base text-center md:text-left text-neutral-500 my-5">
              Welcome to Foodied, where fresh, delicious meals from diverse cuisines are delivered to your door. Enjoy gourmet dining at home!
            </p>

            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero">Order Now</Button>
              </Link>
              <Link href={"/"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full" variant={"outline"}>Explore More</Button>
              </Link>
            </div>
          </div>

          <div>
            <div className="w-full relative h-[560px] flex items-center justify-center">
              <Image 
                src="/img/Food.png"
                alt="Hero Image"
                className="object-contain w-full h-full absolute"
                fill
              />
            </div>
          </div>
        </section>

        {/* popular section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {
            featuredProducts?.slice(0,4).map(item => (
              <PopularContent key={item.id} data={item} />
            ))
          }
        </section>

        {/* why choose us */}
        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="font—bold tracking—wider uppercase text-neutral-700 my-4 text-5xl md:text-5xl">
            Why Choose Us ?
          </h2>

          <p className="text-base text-center w-full md:w-[560px] text-neutral-500 my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ratione doloremque, esse suscipit nobis sint.{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                <Salad className="w-8 h-8 text-hero" />
                <CardTitle className="text-neutral-600">
                  Serve Healthy Food
                </CardTitle>
                <CardDescription className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  laudantium sunt
                </CardDescription>
              </Card>

              <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                <FileHeart className="w-8 h-8 text-hero" />
                <CardTitle className="text-neutral-600">Best Quality</CardTitle>
                <CardDescription className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  laudantium sunt
                </CardDescription>
              </Card>

              <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
                <Truck className="w-8 h-8 text-hero" />
                <CardTitle className="text-neutral-600">Fast Delivery</CardTitle>
                <CardDescription className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                  laudantium sunt
                </CardDescription>
              </Card>
          </div>
        </section>

        {/* our chef sections */}
        <section className=" my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Our Special Chefs
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            commodi repellendus quod tempore reiciendis mollitia perferendis{" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef1.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30">
              <Image
                src="/img/chef3.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef2.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>
          </div>
        </section>

      </Container>
    </>
  )
}

export default HomePage