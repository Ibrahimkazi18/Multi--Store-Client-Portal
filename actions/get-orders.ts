import { Orders } from "@/types-db";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`


const getOrder = async () : Promise<Orders[]> => {

    const res = await fetch(URL)

    return res.json()
};

export default getOrder