import { Chip, useTheme } from "@mui/material";
import IconNextjs from "./icons/IconNext";
import IconMui from "./icons/IconMui";
import IconReact from "./icons/IconReact";
import IconJs from "./icons/IconJs";
import IconDocker from "./icons/IconDocker";
import IconExpress from "./icons/IconExpress";
import IconTs from "./icons/IconTs";
import IconRedis from "./icons/IconRedis";
import IconNginx from "./icons/IconNginx";
import IconMongodb from "./icons/IconMongodb";
import IconPython from "./icons/IconPython";
import IconFirebase from "./icons/IconFirebase";
import IconPypi from "./icons/IconPypi";
import IconReadthedocs from "./icons/IconReadthedocs";
import IconPandas from "./icons/IconPandas";
import IconScikitlearn from "./icons/IconScikitlearn";
import IconNumpy from "./icons/IconNumpy";
import IconSelenium from "./icons/IconSelenium";
import IconAuth0 from "./icons/IconAuth0";
import IconPrisma from "./icons/IconPrisma";
import IconPostgres from "./icons/IconPostgres";
import IconSpring from "./icons/IconSpring";
import IconJava from "./icons/IconJava";
import IconNpm from "./icons/IconNpm";
import IconDigitalOcean from "./icons/IconDigitalOcean";

export const IconDictionary = {
    "Next.js": {
        color: "white",
        icon: <IconNextjs />,
    },
    MUI: {
        color: "blue",
        icon: <IconMui />,
    },
    React: {
        color: "blue",
        icon: <IconReact />,
    },
    JavaScript: {
        color: "yellow",
        icon: <IconJs />,
    },
    Docker: {
        color: "blue",
        icon: <IconDocker />,
    },
    "Express.js": {
        color: "",
        icon: <IconExpress />,
    },
    TypeScript: {
        color: "",
        icon: <IconTs />,
    },
    Redis: {
        color: "",
        icon: <IconRedis />,
    },
    Nginx: {
        color: "",
        icon: <IconNginx />,
    },
    MongoDB: {
        color: "",
        icon: <IconMongodb />,
    },
    Python: {
        color: "",
        icon: <IconPython />,
    },
    Firebase: {
        color: "",
        icon: <IconFirebase />,
    },
    PyPi: {
        color: "",
        icon: <IconPypi />,
    },
    ReadTheDocs: {
        color: "",
        icon: <IconReadthedocs />,
    },
    Pandas: {
        color: "",
        icon: <IconPandas />,
    },
    "Scikit-Learn": {
        color: "",
        icon: <IconScikitlearn />,
    },
    NumPy: {
        color: "",
        icon: <IconNumpy />,
    },
    Selenium: {
        color: "",
        icon: <IconSelenium />,
    },
    Auth0: {
        color: "",
        icon: <IconAuth0 />,
    },
    Prisma: {
        color: "",
        icon: <IconPrisma />,
    },
    PostgreSQL: {
        color: "",
        icon: <IconPostgres />,
    },
    Spring: {
        color: "",
        icon: <IconSpring />,
    },
    Java: {
        color: "",
        icon: <IconJava />,
    },
    npm: {
        color: "",
        icon: <IconNpm />,
    },
    DigitalOcean: {
        color: "",
        icon: <IconDigitalOcean />,
    },
};

export const Icons = Object.keys(IconDictionary).map((key) => ({
    name: key,
    icon: IconDictionary[key].icon,
}));

export default function GetChip(TechName: string, key: number) {
    let icon = IconDictionary[TechName] ? IconDictionary[TechName].icon : null;

    return <Chip key={key} sx={{ paddingLeft: "5px" }} className="mt-2 mr-2" icon={icon} label={TechName} />;
}
