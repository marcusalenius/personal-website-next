import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { readFileSync } from "fs";

import Video from "../Media/Video";

type Props = {
  markdown: string;
};

function PostBody({ markdown }: Props) {
  const content = readFileSync(`markdown/${markdown}`, "utf-8");
  const markdownComponents = {
    video(props: any) {
      const { node, src, ...rest } = props;
      return <Video src={`videos/${src}`} id={src.split(".")[0]} {...rest} />;
    },
    img(props: any) {
      const { node, src, ...rest } = props;
      return <img src={`images/${src}`} id={src.split(".")[0]} {...rest} />;
    },
    a(props: any) {
      const { node, ...rest } = props;
      return <a {...rest} target="_blank" />;
    },
  };

  return (
    <div className="post-body">
      <Markdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
        {content}
      </Markdown>
    </div>
  );
}

export default PostBody;
