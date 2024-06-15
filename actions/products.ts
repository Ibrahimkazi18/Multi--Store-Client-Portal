import { Products } from "@/types-db";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`


const filterProducts = async (products : Products[]) => {

    const formattedproducts = products.filter((item) => item.isFeatured )

    return formattedproducts
};

export default filterProducts