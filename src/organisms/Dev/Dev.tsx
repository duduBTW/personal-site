import Step from "molecules/Step";
import React, { useState } from "react";
import { IStep } from "types/Step";

export default function Dev() {
  const [current, setCurrent] = useState(0);
  const steps: IStep[] = [
    {
      title: "Prototyping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url: "https://placewaifu.com/image/1920/1080",
    },
    {
      title: "Developing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url: "https://pbs.twimg.com/media/DcfSZ7DVwAMrni_.jpg",
    },
    {
      title: "Publishing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      url: "https://mocah.org/uploads/posts/1030838-illustration-anime-anime-girls-blue-eyes-red-eyes-twintails-Hifumi-Takimoto-New-Game-purple-eyes-Aoba-Suzukaze-Shinoda-Hajime-Iijima-Yun-mangaka.png",
    },
  ];

  return (
    <Step
      setNextStep={() => setCurrent((s) => s + 1)}
      current={current}
      step={steps[current]}
    />
  );
}
