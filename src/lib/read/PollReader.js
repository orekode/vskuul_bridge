import {
    useQuery,
} from '@tanstack/react-query';
import { safeGet } from '../utils';



export const GoGetter = async ({
    url='https://jsonplaceholder.typicode.com/todos/1', 
    dataPath, 
    alternative,
}) => {
    const response = await fetch(url);
    const data = await response.json()
    return safeGet(data, dataPath, alternative ?? data);
}

export const PollReader = ({
    key="",
    url='https://jsonplaceholder.typicode.com/users', 
    dataPath, 
    alternative,
}) => useQuery({ queryKey: [key], queryFn: async () => await GoGetter({url, dataPath, alternative}) })