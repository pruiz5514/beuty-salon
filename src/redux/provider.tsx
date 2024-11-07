"use client"
import { store } from './store'
import {Provider} from 'react-redux'

interface Props {children: React.ReactNode}

export function Providers ({children}:Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}