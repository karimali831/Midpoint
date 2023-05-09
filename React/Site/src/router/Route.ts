import { ReactElement } from 'react'
import { Page } from '../enum/Page'

export interface IRoute {
    page: Page
    displayOnMenu: boolean
    memberOnly: boolean
    component: React.ComponentType<any>
    menuName?: string
    icon?: ReactElement
    headerShown?: boolean
    order: number
    path: string
    url: string
}
