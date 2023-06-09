import { ItemProps } from "@/types";
import { Thumbnail } from "@/components/Thumbnail";
import { useDrag } from "react-dnd";

export const Item = ({ id, thumbnail }: ItemProps) => {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: "item",
            item: { id },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
            }),
        }),
        []
    );

    return (
        <div ref={dragRef} style={{ opacity }}>
            <Thumbnail {...thumbnail} />
        </div>
    );
};
