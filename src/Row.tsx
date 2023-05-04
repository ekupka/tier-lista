import { ReactNode, useContext } from "react";
import "./Row.css";
import { useDrop } from "react-dnd";
import { ItemProps } from "./types";
import TierListContext from "./context";

type RowProps = {
    id: string;
    thumbnail: ReactNode;
    children?: ReactNode[];
};

export const Row = ({ thumbnail, id, children }: RowProps) => {
    const { moveItem } = useContext(TierListContext);

    const [, drop] = useDrop<ItemProps>(() => ({
        accept: "item",
        drop: (item) => {
            moveItem(item.id, id);
        },
    }));

    return (
        <div className="row" key={id}>
            <div className="row-header">{thumbnail}</div>
            <div className="row-body" ref={drop}>
                {children}
            </div>
        </div>
    );
};
