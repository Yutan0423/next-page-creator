'use client';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { ComponentList } from '@/components/ComponentList/ComponentList';
import { PagePreview } from '@/components/PagePreview/PageComponent';

const DndPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-4 p-4">
        <ComponentList />
        <PagePreview />
      </div>
    </DndProvider>
  );
};

export default DndPage;
