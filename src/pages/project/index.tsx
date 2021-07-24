import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import ProjectsTemplate from "templates/Projects/Projects";
import { IProject } from "types/Project";
import { getData } from "./[projectid]";

interface Props {
  projects: IProject[];
}

export default function ProjectsPage({ projects }: Props): JSX.Element {
  return (
    <>
      <NextSeo
        title="Projetos"
        description="Dudubtw, desenvolvedor frontend projetos."
        twitter={{
          handle: "@dudubtway",
          site: "@dudubtway",
          cardType: "summary_large_image",
        }}
      />
      <ProjectsTemplate projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps<any, any> = async (props) => {
  const data: IProject[] = await getData();

  return {
    props: {
      projects: data,
    },
  };
};
