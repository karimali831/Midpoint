import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { PageName } from "../enum/PageName"

export interface IRoute {
    name: PageName
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
    component: React.ComponentType<any>
    memberOnly: boolean
    url: string
    hideMenu?: boolean
}