import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TierList } from "./TierList";
import TierListProvider from "./provider";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <TierListProvider>
        <TierList />
      </TierListProvider>
    </DndProvider>
  );
}

export default App;
