import { useCallback, useEffect, useState } from "react";
import { Axios, type AxiosResponse } from "../config/http";

export default function useQuery<T>(url: string, lazy= false) {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<String>();
    const [loading, setLoading] = useState(false);

    const handleSuccess = async () => {
        const res: AxiosResponse<T> = await Axios.get(url);
        setData(res.data);
    };

    const handleError = async (error: unknown) => {
        if (error instanceof Error) setError(error.message);
    };

    const runQuery = useCallback(() => {
        setLoading(true);
        try {
            handleSuccess();
        } catch (error) {
            handleError(error);
        }
    }, [url]);

    useEffect(() => {
        if (!lazy) runQuery();
    }, [runQuery]);

    return {data,error,loading,refetch:runQuery}
}
