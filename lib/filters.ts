import {parseIntIfExists} from "./utils";

export type Filters = {
    FromDate?: string;
    ToDate?: string;
    CatId?: string;
    CityId?: string;
    Page?: number;
    PageSize?: number;
    Keyword?: string;
};

export function parseSearchParams(params: { [key: string]: any }): Filters
{
    return {
        FromDate: params.FromDate,
        ToDate: params.ToDate,
        CatId: params.CatId,
        CityId: params.CityId,
        Page: parseIntIfExists(params.Page),
        PageSize: parseIntIfExists(params.PageSize),
        Keyword: params.Keyword,
    };
}