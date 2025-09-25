import { useState } from "react";
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "../components/SortableItem";
import NavBar from "../components/NavBar";

// Dummy widget data
const initialWidgets = [
  { id: "height", title: "Height", value: "6'0\"" },
  { id: "weight", title: "Weight", value: "170 lbs" },
  { id: "ftp", title: "FTP", value: "250" },
  { id: "lastActivity", title: "Last Activity", value: "5 mi Run" },
  { id: "trainingStatus", title: "Training Status", value: "Productive" },
  { id: "steps", title: "Steps", value: "10,342" },
  { id: "heartRate", title: "Heart Rate", value: "72 bpm" },
  { id: "sleepRec", title: "Sleep Recommendation", value: "8 hrs" },
  { id: "sleepScore", title: "Sleep Score", value: "85%" },
  { id: "floors", title: "Floors", value: "12" },
];

export default function Profile() {
  const [widgets, setWidgets] = useState(initialWidgets);
  const [visibleWidgets, setVisibleWidgets] = useState(initialWidgets.map((w) => w.id));

  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = widgets.findIndex((w) => w.id === active.id);
      const newIndex = widgets.findIndex((w) => w.id === over.id);
      setWidgets((items) => arrayMove(items, oldIndex, newIndex));
    }
  }

  function toggleWidget(id) {
    setVisibleWidgets((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  }

  return (
    <>
      <NavBar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Profile Page</h1>

        {/* Widget Toggles */}
        <div className="mb-4 flex flex-wrap gap-2">
          {widgets.map((w) => (
            <label key={w.id} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={visibleWidgets.includes(w.id)}
                onChange={() => toggleWidget(w.id)}
              />
              {w.title}
            </label>
          ))}
        </div>

        {/* Widgets Grid */}
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={widgets.map((w) => w.id)} strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {widgets
                .filter((w) => visibleWidgets.includes(w.id))
                .map((w) => (
                  <SortableItem key={w.id} id={w.id}>
                    <div className="bg-white p-4 rounded-xl shadow flex flex-col items-center justify-center">
                      <h2 className="font-semibold mb-2">{w.title}</h2>
                      <p className="text-xl font-bold">{w.value}</p>
                    </div>
                  </SortableItem>
                ))}
            </div>
          </SortableContext>
        </DndContext>
      </main>
    </>
  );
}
