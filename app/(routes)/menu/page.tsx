import getCategories from "@/actions/get-categories";
import Box from "@/components/box";
import Container from "@/components/container";
import FilterContainer from "@/components/filter-container";
import CategoryFilter from "./components/category-filters";
import getSizes from "@/actions/get-sizes";
import SizeFilter from "./components/size-filters";
import getKitchens from "@/actions/get-kitchens";
import KitchenFilter from "./components/kitchen-filters";
import getCuisines from "@/actions/get-cuisines";
import CuisinesFilter from "./components/cuisine-filters";
import getProducts from "@/actions/get-products";
import PageContent from "./components/page-content";

export const revalidate = 0

interface MenuPageProps {
    searchParams : {
        size ?: string,
        isFeatured ?: boolean;
        cuisine ?: string;
        category ?: string;
        kitchen ?: string;
    }
}

const MenuPage = async ({searchParams} : MenuPageProps) => {

  const categories = await getCategories()
  const sizes = await getSizes()
  const kitchens = await getKitchens()
  const cuisines = await getCuisines()
  const products = await getProducts({
    size : searchParams?.size,
    isFeatured : searchParams?.isFeatured,
    category : searchParams?.category,
    cuisine : searchParams?.cuisine,
    kitchen : searchParams?.kitchen,
  })

  return (
    <Container className="px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-2">
            <div className="hidden md:block col-span-2 border-r border-gray-100 top-24">
                <FilterContainer>
                    <CategoryFilter categories={categories} />
                    <SizeFilter sizes={sizes} />
                    <KitchenFilter kitchens={kitchens}/>
                    <CuisinesFilter cuisines={cuisines}/>
                </FilterContainer>
            </div>

            <Box className="col-span-12 md:col-span-10 flex-col items-start justify-start w-full">
                <PageContent products={products} />
            </Box>
        </div>
    </Container>
  )
}

export default MenuPage