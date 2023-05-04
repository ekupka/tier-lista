import { createContext } from "react";
import { TierListObject } from "./types";
import { defaultTierList } from "./constants";

type TierListContextProps = {
  tierList: TierListObject;
  moveItem: (itemId: string, rowId: string) => void;
};

const TierListContext = createContext<TierListContextProps>({
  tierList: defaultTierList as TierListObject,
  moveItem: () => {},
});

export default TierListContext;
