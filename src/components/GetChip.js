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
import IconScikitlearn from "./icons/IconScikitlearn"
import IconNumpy from "./icons/IconNumpy"
import IconSelenium from "./icons/IconSelenium"

export const IconDictionary = {
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
    'Scikit-Learn': {
        color: "",
        icon: <IconScikitlearn />,
    },
    'NumPy': {
        color: "",
        icon: <IconNumpy />,
    },
    'Selenium': {
        color: "",
        icon: <IconSelenium />,
    }
}


export const Icons = Object.keys(IconDictionary).map((key) => ({
    "name": key,
    "icon": IconDictionary[key].icon,
}));

export default function GetChip(TechName){
    let icon = IconDictionary[TechName] ? IconDictionary[TechName].icon : null
    
    return(
        <Chip sx={{ paddingLeft: '5px' }}  className="mt-2 mr-2" icon={icon} label={TechName} />
    )
}