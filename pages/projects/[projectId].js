import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import ImageGallery from "../../src/components/ImageGallery";
import { getSimilarProjects, projects } from "../../src/projects/projects";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import SimilarProjects from "../../src/components/SimilarProjects";
import Head from "next/head";

function ProjectView({ project, similarProjects }) {
  const { id, name, date, preview, description, images, website, github, tags } =
    project;
  const formattedDescription = description
    .split("\n")
    .map((paragraph, index) => (
      <Typography variant="body1" className="text-lg" gutterBottom key={index}>
        {paragraph}
      </Typography>
    ));
  // choose 3 random projects to suggest
  console.log(similarProjects);

  return (
    <main className="pt-12">
      <Head>
        <title>{name} - Peter Wilson</title>
      </Head>
      <Container maxWidth="md">
        <ImageGallery images={images} className="my-4" />
        <Typography variant="h3" component="h2">
          {name}
        </Typography>
        <div className="flex flex-row justify-between w-full mb-4">
          <div className="align-center flex flex-col justify-center">
            <Typography variant="subtitle2">{date}</Typography>
          </div>
          <div className="text-right">
            {github ? (
              <Button
                variant="outlined"
                endIcon={<GitHubIcon />}
                onClick={() => window.open(github)}
              >
                View GitHub
              </Button>
            ) : (
              <></>
            )}
            {website ? (
              <Button
                className="ml-2"
                variant="outlined"
                endIcon={<LanguageIcon />}
                onClick={() => window.open(website)}
              >
                View Website
              </Button>
            ) : (
              <></>
            )}
          </div>
        </div>
        {formattedDescription}
      </Container>
      <Container maxWidth="lg">
        <Divider className="mt-24"/>
        <SimilarProjects projects={similarProjects} />
      </Container>
    </main>
  );
}

// Helper function to convert name to slug
const nameToSlug = (name) => {
  return name.toLowerCase().split(" ").join("-");
};

// Helper function to convert slug to name
const slugToName = (slug) => {
  return slug.split("-").join(" ");
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { projectId: nameToSlug(project.name) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projectName = slugToName(params.projectId);
  const project = projects.find(
    (project) => project.name.toLowerCase() === projectName
  );
  const similarProjects = getSimilarProjects(project);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return { props: { project, similarProjects } };
}

export default ProjectView;
