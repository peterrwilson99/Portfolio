import { Chip, useTheme } from "@mui/material"
import IconNextjs from "./icons/IconNext"
import IconMui from "./icons/IconMui"
import IconReact from "./icons/IconReact"
import IconJs from "./icons/IconJs"
import IconDocker from "./icons/IconDocker"
import IconExpress from "./icons/IconExpress"
import IconTs from "./icons/IconTs"
import IconRedis from "./icons/IconRedis"
import IconNginx from "./icons/IconNginx"
import IconMongodb from "./icons/IconMongodb"
import IconPython from "./icons/IconPython"
import IconFirebase from "./icons/IconFirebase"
import IconPypi from "./icons/IconPypi"
import IconReadthedocs from "./icons/IconReadthedocs"
import IconPandas from "./icons/IconPandas"

const Chips = {
    'Next.js': {
        color: "white",
        icon: <IconNextjs />,
    },
    'MUI': {
        color: "blue",
        icon: <IconMui />,
    },
    'React': {
        color: "blue",
        icon: <IconReact />,
    },
    'JavaScript': {
        color: "yellow",
        icon: <IconJs />,
    },
    'Docker': {
        color: "blue",
        icon: <IconDocker />,
    },
    'Express.js': {
        color: "",
        icon: <IconExpress />,
    },
    'TypeScript': {
        color: "",
        icon: <IconTs />,
    },
    'Redis': {
        color: "",
        icon: <IconRedis />,
    },
    'Nginx': {
        color: "",
        icon: <IconNginx />,
    },
    'MongoDB': {
        color: "",
        icon: <IconMongodb />,
    },
    'Python': {
        color: "",
        icon: <IconPython />,
    },
    'Firebase': {
        color: "",
        icon: <IconFirebase />,
    },
    'PyPi': {
        color: "",
        icon: <IconPypi />,
    },
    'ReadTheDocs': {
        color: "",
        icon: <IconReadthedocs />,
    },
    'Pandas': {
        color: "",
        icon: <IconPandas />,
    },
}

export default function GetChip(TechName){
    let color = null
    let icon = null
    if(Chips[TechName]){
        color = Chips[TechName].color
        icon = Chips[TechName].icon
    }
    return(
        <Chip sx={{ paddingLeft: '5px' }} color="secondary" className="mt-2 mr-2" icon={icon} label={TechName} />
    )
}