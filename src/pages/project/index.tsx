import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { OpenGraphImages } from "next-seo/lib/types";
import ProjectsTemplate from "templates/Projects/Projects";
import { IProject } from "types/Project";
import { getData } from "./[projectid]";

interface Props {
  projects: IProject[];
  imagesOG: OpenGraphImages[];
}

export default function ProjectsPage({
  projects,
  imagesOG,
}: Props): JSX.Element {
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
        openGraph={{
          title: `Projetos`,
          description: `Dudubtw, desenvolvedor frontend projetos`,
          site_name: "DuduBTW",
          images: imagesOG,
        }}
      />
      <ProjectsTemplate projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps<any, any> = async (props) => {
  const data: IProject[] = await getData();

  const imagesOG: OpenGraphImages[] = data.map(
    (item): OpenGraphImages => ({ url: item.miniature })
  );

  return {
    props: {
      projects: data,
      imagesOG,
    },
  };
};
