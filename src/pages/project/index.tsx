import { GetStaticProps } from "next";
import ProjectsTemplate from "templates/Projects/Projects";
import { IProject } from "types/Project";
import { getData } from "./[projectid]";

interface Props {
  projects: IProject[];
}

export default function ProjectsPage({ projects }: Props): JSX.Element {
  return <ProjectsTemplate projects={projects} />;
}

// export const getStaticProps: GetStaticProps<any, any> = async (props) => {
//   const data: IProject[] = await getData();

//   return {
//     props: {
//       projects: data,
//     },
//   };
// };
export const getServerSideProps = async (props) => {
  const data: IProject[] = await getData();

  return {
    props: {
      projects: data,
    },
  };
};
