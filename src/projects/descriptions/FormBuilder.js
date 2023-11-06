import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import IconAuth0 from '../../components/icons/IconAuth0';
import IconPrisma from '../../components/icons/IconPrisma';
import IconExpress from '../../components/icons/IconExpress';
import IconMui from '../../components/icons/IconMui';
import TechStackList from '../TechStackList';
import IconPostgres from '../../components/icons/IconPostgres';
import IconNpm from '../../components/icons/IconNpm';
import IconTs from '../../components/icons/IconTs';
import IconReact from '../../components/icons/IconReact';

function FormBuilder() {
  const tools = [
    {
      title: "npm",
      subtitle: "Node Package Manager",
      icon: <IconNpm />,
    },
    {
      title: "Material UI",
      subtitle: "React Component Library",
      icon: <IconMui />,
    },
    {
      title: "React.js",
      subtitle: "Frontend Framework",
      icon: <IconReact />,
    },
    {
      title: "TypeScript",
      subtitle: "Typed JavaScript Superset",
      icon: <IconTs />,
    }
  ]
  return (
    <div>
        <Typography variant="h6">
          Problem Background and Project Description
        </Typography>
        <Typography variant="body1">
          The form builder project was a byproduct of the{' '} 
          <a className="underline italic" href="/projects/individual-pursuits">Individual Pursuits project</a>{' '} 
          and its requirements. The Individual Pursuits project required a form builder to be built to allow team 
          coordinators to create forms for the support workers to complete. Our initial design of the Individual Pursuits project used a npm package which allowed
          for fast prototyping, but was not ideal for the long term. The npm package was not customizable enough for our needs and 
          did not match the components used in the rest of the application. Once the Individual Pursuits application was working, it was decided to create an
          open-source form builder, which could be maintained seperate from the original application and imported into the Individual Pursuits project.
        </Typography>
        <Typography variant="body1" className="mt-4">
          The form builder was to contain components for text/number inputs, dropdowns, checkboxes, and radio buttons and more. The code architecture was to be
          simplistic and scalable to allow for easy addition of new components. The form builder was to be built using React.js and TypeScript, and was to contain
          MaterialUI components to match the rest of the application.
        </Typography>
        <Divider className="my-4" />
        <Typography variant="h6">
          Development Phase
        </Typography>
        <Typography variant="body1">
          The development team was comprised of myself, along with another student from my program I had worked with 
          previously on school projects and had a valuable skillset for the project. 
        </Typography>
        <Grid container spacing={2} className="mt-4">
          <Grid item xs={12} md={5}>
            <TechStackList tools={tools} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" className="mt-4">
              NPM was used for deployment of the project to allow for easy importing into other projects, specifically the Individual Pursuits project.
            </Typography>
            <Typography variant="body1" className="mt-4">
              React.js and MaterialUI were used to match the rest of the application and to allow for easy customization of the components, as well as the large community support.
            </Typography>
            <Typography variant="body1" className="mt-4">
              TypeScript was used to allow for type checking and to allow for easier debugging, as well as maintainability.
            </Typography>
          </Grid>
        </Grid>
        <Divider className="my-4" />
        <Typography variant="h6">
          Project Status
        </Typography>
        <Typography variant="body1">
          The form builder is currently deployed as an npm package and is being used in the Individual Pursuits project. 
          The form builder is currently being maintained by myself and Seiya Terada and can be installed using npm. 
        </Typography>
    </div>
  )
}

export default FormBuilder;