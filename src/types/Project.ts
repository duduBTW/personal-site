export interface IStepItem {
  type: "image" | "iframe" | "video" | "folder";
  src: string;
}
export interface IStep {
  title: string;
  desc: string;
  stepItem: IStepItem[];
}

export interface IProject {
  title?: string;
  miniature: string;
  id: string;
  type: "dev" | "overlay";
  steps?: IStep[];
}
