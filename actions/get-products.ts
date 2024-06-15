import { Products } from "@/types-db";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`


interface Query {
    size?: string;
    isFeatured?: boolean;
    cuisine?: string;
    category?: string;
    kitchen?: string;
    description?: string;
}

const getProducts = async (query : Query) : Promise<Products[]> => {

    const url = qs.stringifyUrl({
        url : URL,
        query : {
            size : query.size,
            isFeatured : query.isFeatured,
            cuisine : query.cuisine,
            category : query.category,
            kitchen : query.kitchen,
            description : query.description,
        }
    })

    const res = await fetch(url)

    return res.json()
};

export default getProducts