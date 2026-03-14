import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { BodyPart, Stretch } from '../types';
import { getStretchesForBodyPart, bodyPartLabels, bodyPartEmojis } from '../data/stretches';

interface SortableItemProps {
  stretch: Stretch;
  index: number;
  canRemove: boolean;
  onRemove: () => void;
}

function SortableItem({ stretch, index, canRemove, onRemove }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: stretch.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 touch-none"
    >
      {/* Drag handle */}
      <button
        {...attributes}
        {...listeners}
        className="flex-shrink-0 cursor-grab active:cursor-grabbing p-1 text-slate-300 dark:text-slate-600 hover:text-slate-500 dark:hover:text-slate-400"
        aria-label="Drag to reorder"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="9" cy="6" r="1.5" /><circle cx="15" cy="6" r="1.5" />
          <circle cx="9" cy="12" r="1.5" /><circle cx="15" cy="12" r="1.5" />
          <circle cx="9" cy="18" r="1.5" /><circle cx="15" cy="18" r="1.5" />
        </svg>
      </button>

      {/* Index */}
      <span className="text-xs font-bold text-slate-400 w-5 text-center flex-shrink-0">{index + 1}</span>

      {/* Image */}
      <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
        <img
          src={stretch.imageUrl}
          alt={stretch.name}
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* Name */}
      <span className="flex-1 text-sm font-medium text-slate-800 dark:text-white leading-tight">
        {stretch.name}
      </span>

      {/* Remove */}
      <button
        onClick={onRemove}
        disabled={!canRemove}
        className="w-7 h-7 rounded-md text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-20 flex items-center justify-center transition-colors flex-shrink-0"
        aria-label="Remove"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

interface Props {
  stretches: Stretch[];
  bodyPart: BodyPart;
  holdSeconds: number;
  onConfirm: (stretches: Stretch[]) => void;
  onBack: () => void;
}

export function SessionPreview({ stretches: initial, bodyPart, holdSeconds, onConfirm, onBack }: Props) {
  const [selected, setSelected] = useState<Stretch[]>(initial);

  const all = getStretchesForBodyPart(bodyPart);
  const bank = all.filter((s) => !selected.find((sel) => sel.id === s.id));

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSelected((items) => {
        const oldIndex = items.findIndex((s) => s.id === active.id);
        const newIndex = items.findIndex((s) => s.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const remove = (id: string) => {
    if (selected.length <= 1) return;
    setSelected(selected.filter((s) => s.id !== id));
  };

  const add = (stretch: Stretch) => {
    if (selected.length >= 10) return;
    setSelected([...selected, stretch]);
  };

  const totalTime = selected.length * holdSeconds;
  const totalMin = Math.floor(totalTime / 60);
  const totalSec = totalTime % 60;

  return (
    <div className="flex-1 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Go back"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Preview Session</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <span>{bodyPartEmojis[bodyPart]}</span>
            {bodyPartLabels[bodyPart]} &middot; {selected.length} exercises &middot;{' '}
            {totalMin > 0 ? `${totalMin}m ` : ''}{totalSec > 0 ? `${totalSec}s` : totalMin > 0 ? '' : '0s'}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-6 pb-4">
        {/* Sortable selected list */}
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={selected.map((s) => s.id)} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-2">
              {selected.map((stretch, i) => (
                <SortableItem
                  key={stretch.id}
                  stretch={stretch}
                  index={i}
                  canRemove={selected.length > 1}
                  onRemove={() => remove(stretch.id)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {/* Bank */}
        {bank.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
              Add from bank{' '}
              {selected.length >= 10 && (
                <span className="normal-case font-normal">(max 10 reached)</span>
              )}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {bank.map((stretch) => (
                <button
                  key={stretch.id}
                  onClick={() => add(stretch)}
                  disabled={selected.length >= 10}
                  className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-800 border border-dashed border-slate-200 dark:border-slate-600 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 disabled:opacity-40 disabled:pointer-events-none transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
                    <img
                      src={stretch.imageUrl}
                      alt={stretch.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <span className="flex-1 text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight line-clamp-2">
                    {stretch.name}
                  </span>
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Start button */}
      <div className="pt-4">
        <button
          onClick={() => onConfirm(selected)}
          className="w-full py-4 bg-primary-500 hover:bg-primary-600 active:scale-95 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all"
        >
          Start Session
        </button>
      </div>
    </div>
  );
}
