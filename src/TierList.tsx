import { useContext } from "react";
import { Row } from "./Row";
import { Thumbnail } from "./Thumbnail";

import "./App.css";
import { Item } from "./Item";
import TierListContext from "./context";

export const TierList = () => {
    const { tierList } = useContext(TierListContext);

    return (
        <>
            <div className="row-container">
                {tierList.rows.map((row) => {
                    return (
                        <Row
                            key={row.thumbnail.text}
                            id={row.thumbnail.text}
                            thumbnail={<Thumbnail {...row.thumbnail} />}
                        >
                            {row.items.map((item) => {
                                return (
                                    <Item
                                        key={item.thumbnail.text}
                                        id={item.thumbnail.text}
                                        thumbnail={item.thumbnail}
                                    />
                                );
                            })}
                        </Row>
                    );
                })}
            </div>
            <div className="row-container">
                <Row key="bench" id="bench" thumbnail={<></>}>
                    {tierList.bench.map((item) => {
                        return <Item key={item.thumbnail.text} id={item.thumbnail.text} thumbnail={item.thumbnail} />;
                    })}
                </Row>
            </div>
        </>
    );
};
export { TierListContext };
