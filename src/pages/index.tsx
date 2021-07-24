import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import HomeTemplate from "templates/Home";
import { IProject } from "types/Project";
import { getData } from "./project/[projectid]";

interface Props {
  projects: IProject[];
}

export default function Home({ projects }: Props): JSX.Element {
  return (
    <>
      <NextSeo
        title="DuduBTW"
        description="Desenvolvedor frontend."
        twitter={{
          handle: "@dudubtway",
          site: "@dudubtway",
          cardType: "summary_large_image",
        }}
      />
      <HomeTemplate projects={projects} />
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
