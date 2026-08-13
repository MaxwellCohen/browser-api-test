import {use} from 'react'
import {browser} from 'react-dom'
import { Counter } from './Counter'


export function WithoutUseClient() {
    console.log('WithoutUseClient rendered')
    use(browser())
    console.log('WithoutUseClient rendered after browser')
    return <Counter />
}