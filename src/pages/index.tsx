import { GetStaticProps } from "next";
import HomeTemplate from "templates/Home";
import { IProject } from "types/Project";
import { getData } from "./project/[projectid]";

interface Props {
  projects: IProject[];
}

export default function Home({ projects }: Props): JSX.Element {
  return <HomeTemplate projects={projects} />;
}

export const getStaticProps: GetStaticProps<any, any> = async (props) => {
  return {
    props: {
      projects: [],
    },
  };
};
// export const getStaticProps: GetStaticProps<any, any> = async (props) => {
//   const data: IProject[] = await getData();

//   return {
//     props: {
//       projects: data,
//     },
//   };
// };
