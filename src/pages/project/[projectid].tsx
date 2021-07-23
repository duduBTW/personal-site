import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Project from "templates/Project";
import { IProject, IStep, IStepItem } from "types/Project";
import fs from "fs";
import path from "path";

interface Props {
  project: IProject;
}

export default function ProjectItemPage({ project }: Props) {
  return <Project project={project} />;
}

interface ProjectUrlParams extends Record<string, string | string[]> {
  projectid: string;
}

// export const getStaticProps: GetStaticProps<any, ProjectUrlParams> = async (
//   props
// ) => {
//   if (!props.params) return { notFound: true };
//   const data: IProject[] = await getData();

//   let project = data.find((p) => p.id === props.params?.projectid);

//   project?.steps?.map((steps, stepsI) =>
//     steps.stepItem.map((step) => {
//       if (step.type !== "folder") return;

//       const dir = path.resolve("./public/port", step.src);
//       const filenames = fs.readdirSync(dir);
//       const images = filenames.map((name) => `/port/${step.src}/${name}`);

//       //@ts-ignore
//       project!.steps[stepsI].stepItem = images.map(
//         (img): IStepItem => ({
//           type: "image",
//           src: img,
//         })
//       );
//     })
//   );

//   project?.steps?.map((i) => console.log(i));

//   return {
//     props: {
//       project,
//     },
//   };
// };
export const getServerSideProps = async (props) => {
  if (!props.params) return { notFound: true };
  const data: IProject[] = await getData();

  let project = data.find((p) => p.id === props.params?.projectid);

  project?.steps?.map((steps, stepsI) =>
    steps.stepItem.map((step) => {
      if (step.type !== "folder") return;

      const dir = path.resolve("./public/port", step.src);
      const filenames = fs.readdirSync(dir);
      const images = filenames.map((name) => `/port/${step.src}/${name}`);

      //@ts-ignore
      project!.steps[stepsI].stepItem = images.map(
        (img): IStepItem => ({
          type: "image",
          src: img,
        })
      );
    })
  );

  project?.steps?.map((i) => console.log(i));

  return {
    props: {
      project,
    },
  };
};

// export const getStaticPaths: GetStaticPaths<any> = async (ctx) => {
//   const data: IProject[] = await getData();

//   const paths = data.map(({ id }) => ({ params: { projectid: id } }));
//   console.log(`paths`, paths);

//   return { paths, fallback: true };
// };

export const getData = async (): Promise<IProject[]> => {
  const response = await fetch(
    `${process.env.BASE_URL || "http://localhost:3000"}/data.json`
  );
  return await response.json();
};
