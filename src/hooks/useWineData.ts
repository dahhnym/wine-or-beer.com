import useSWR from "swr";
import { fetcher } from '../utils/fetchers';
import { WINE_API_ENDPOINT } from "../constants";

export const useWineData = (path: string) => {
    return useSWR(`${WINE_API_ENDPOINT}${path}`, fetcher);
}
