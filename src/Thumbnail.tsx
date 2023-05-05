import { ThumbnailProps } from "./types";

export const Thumbnail = ({ text, bg }: ThumbnailProps) => {
    const isColor = (color: string) => {
        return color.startsWith("#");
    };

    return (
        <div
            key={text}
            style={{
                backgroundColor: isColor(bg) ? bg : "white",
                color: "white",
                backgroundImage: isColor(bg) ? "unset" : `url(${bg})`,
                backgroundSize: "cover",
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
