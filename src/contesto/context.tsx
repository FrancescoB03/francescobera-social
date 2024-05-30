import {createContext, useContext} from 'react';
import { Post } from '../types/types';

export type TContesto = {
    data: Post[] | undefined
    setData: (args: Post[]) => void
}

export const Contesto = createContext<TContesto | undefined>(undefined)