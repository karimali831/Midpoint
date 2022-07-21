import { Stream } from "@mui/icons-material";
import { PageName } from "../enum/PageName";
import { IRoute } from "../interface/Routes";
import { RainwayApp } from "./rainway";

// add test to test all route URLs match filenames in /pages 
export const Routes: IRoute[] = [
    {
        name: PageName.Rainway,
        icon: Stream,
        component: RainwayApp,
        memberOnly: false,
        url: "/rainway"
    },
]