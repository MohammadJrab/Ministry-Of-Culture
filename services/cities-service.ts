import {getLocale} from "next-intl/server";
import {City} from "@/types/city";

export async function getCities()
{
    try
    {
        const locale = await getLocale();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city/get-all-cities?lang=${locale}`, {
            method: "GET",
            headers: {
                Accept: "*/*",
                "X-App-Version": "web"
            }
        });

        if (!response.ok)
        {
            const errorMessage = await response.json();
            return {error: errorMessage.message};
        }

        const result = await response.json();
        // console.log('Fetched cities', result)

        return {cities: result.data as City[], error: undefined}
    } catch (error)
    {
        console.error("Error during cities fetch: ", error.message);
        return {error: error.message};
    }
}