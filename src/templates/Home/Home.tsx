import { useRouter } from "next/dist/client/router";
import Dev from "organisms/Dev";
import Header from "organisms/Header";
import Projects from "organisms/Projects";
import React, { ReactElement } from "react";
import { FullPage, Slide } from "react-full-page";
import { IProject } from "types/Project";

interface Props {
  projects: IProject[];
}

export default function HomeTemplate({ projects }: Props): ReactElement {
  const { query } = useRouter();

  return (
    <FullPage initialSlide={query?.initialSlide ?? 0}>
      <Slide>
        <Header />
      </Slide>
      <Slide>
        <Projects projects={projects} />
      </Slide>
      {/* <Slide>
        <Dev />
      </Slide> */}
    </FullPage>
  );
}
