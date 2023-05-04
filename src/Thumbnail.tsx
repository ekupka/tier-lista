import { ThumbnailProps } from "./types";

export const Thumbnail = ({ text, color }: ThumbnailProps) => {
  return (
    <div
      key={text}
      style={{
        backgroundColor: color ? color : "white",
        color: color ? "white" : "black",
        borderRadius: "0.5rem",
        height: "5rem",
        width: "5rem",
      }}
      className="header-thumbnail"
    >
      <p>{text}</p>
    </div>
  );
};
