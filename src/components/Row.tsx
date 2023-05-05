import { ItemProps } from "@/types/types";
import { ReactNode, useContext } from "react";
import { TierListContext } from "@/context";
import { useDrag, useDrop } from "react-dnd";
import "@/styles/Row.css";

type RowProps = {
    id: string;
    thumbnail: ReactNode;
    children?: ReactNode[];
};

export const Row = ({ thumbnail, id, children }: RowProps) => {
    const { moveItem } = useContext(TierListContext);
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: "row",
            item: { id },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
            }),
        }),
        []
    );

    const [, drop] = useDrop<ItemProps>(() => ({
        accept: "item",
        drop: (item) => {
            moveItem(item.id, id);
        },
    }));

    return (
        <div className="row" key={id} ref={dragRef} style={{ opacity }}>
            <div className="row-header">{thumbnail}</div>
            <div className="row-body" ref={drop}>
                {children}
            </div>
        </div>
    );
};
