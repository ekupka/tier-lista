import { ItemProps } from "@/types";
import { ReactNode, useContext, useRef } from "react";
import { TierListContext } from "@/context";
import { useDrag, useDrop } from "react-dnd";
import "@/styles/Row.css";

type RowComponentProps = {
    index?: number;
    id: string;
    thumbnail: ReactNode;
    children?: ReactNode[];
};

export const Row = ({ thumbnail, id, index, children }: RowComponentProps) => {
    const { tierList, moveItem, moveRow } = useContext(TierListContext);
    const rowRef = useRef<HTMLDivElement>(null);

    const [{ opacity }, dragRow] = useDrag(
        () => ({
            type: "row",
            item: { id },
            collect: (monitor) => {
                return {
                    opacity: monitor.isDragging() ? 0.5 : 1,
                };
            },
        }),
        []
    );

    const [, dropItem] = useDrop<ItemProps>(() => ({
        accept: "item",
        drop: (item) => {
            moveItem(item.id, id);
        },
    }));

    const [, dropRow] = useDrop<{ id: string }>(
        () => ({
            accept: "row",
            drop: (item) => {
                const dragIndex = tierList.rows.findIndex((row) => row.thumbnail.text === item.id);
                console.log(`dropping row ${item.id}[${dragIndex}] into row ${id} [${index}]`);

                if (!index && index !== 0) return;

                moveRow(dragIndex, index);
            },
        }),
        [tierList]
    );

    dragRow(dropRow(rowRef));

    return (
        <div className="row" key={id} ref={rowRef} style={{ opacity }}>
            <div className="row-header">{thumbnail}</div>
            <div className="row-body" ref={dropItem}>
                {children}
            </div>
        </div>
    );
};
