import { ThumbnailProps } from "@/types";

export const Thumbnail = ({ text, color, image }: ThumbnailProps) => {
    return (
        <div
            key={text}
            style={{
                backgroundColor: color ? color : "white",
                color: "white",
                backgroundImage: image ? "unset" : `url(${image})`,
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
