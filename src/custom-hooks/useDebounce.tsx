import { useEffect, useState } from 'react';

const useDebounce = (value:string, delay:number) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeId);
        }
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;