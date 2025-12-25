import {getFormatter, getLocale} from "next-intl/server";
import {News} from "@/types/news";
import {parseUTCDate} from "@/lib/utils";
import {Filters} from "@/lib/filters";

export async function getNews(filters?: Filters)
{
    try
    {
        const params = new URLSearchParams();
        if (filters)
            for (const [key, value] of Object.entries(filters))
                if (value !== undefined && value !== null)
                    params.set(key, value.toString());

        const queryString = params.toString();
        const locale = await getLocale();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/get-all-newes?lang=${locale}${queryString ? `&${queryString}` : ""}`, {
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
        // console.log('Fetched news', result.data.newes)

        const formatter = await getFormatter();
        const news = result.data.newes || [];

        return {
            news: news.map(e => parseNews(e, formatter)) as News[],
            error: undefined,
            page: result.page,
            pageSize: result.pageSize,
            totalCount: result.totalCount,
            totalPages: result.totalPages,
        }

    } catch (error)
    {
        console.error("Error during available news fetch: ", error.message);
        return {error: error.message};
    }
}

export async function getNewsById(id: string)
{
    try
    {
        const locale = await getLocale();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/get-newes-by-id?lang=${locale}&Id=${id}`, {
            method: "GET",
            headers: {
                Accept: "*/*",
                "X-App-Version": "web"
            }
        });

        if (response.status === 404)
            return {error: 'News not found.'};

        if (!response.ok)
        {
            const errorMessage = await response.json();
            return {error: errorMessage.message};
        }

        const fetchedData = (await response.json()).data;
        // console.log('Fetched news', fetchedData)

        const formatter = await getFormatter();

        return {news: parseNews(fetchedData, formatter), error: undefined}
    } catch (error)
    {
        console.error("Error during news by id fetch: ", error.message);
        return {error: error.message};
    }
}

function parseNews(news: any, formatter: any): News
{
    return {
        ...news,
        dateTime: formatter.dateTime(parseUTCDate(news.dateTime), 'standard'),
        imgUrls: news.imagePathes,
    } as News
}