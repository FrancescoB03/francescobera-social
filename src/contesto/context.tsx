import {createContext, useContext} from 'react';
import { Root } from '../types/types';

export type TContesto = {
    data: Root | undefined
    setData: (args: Root) => void
}

export const Contesto = createContext<TContesto | null>(null)