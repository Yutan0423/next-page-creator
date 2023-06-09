// PageComponent.tsx
import { dummyCards } from '@/constants/dummy';
import { UIParams } from '@/types/dnd';
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { uuid } from 'uuidv4';
import { ArticleCard } from '../ComponentList/_internal/ArticleCard';
import { Button } from '../ComponentList/_internal/Button';
import { Heading } from '../ComponentList/_internal/Heading';
import { TextInput } from '../ComponentList/_internal/TextInput';

type ComponentType = {
  id: string;
  type: string;
  left: number;
  top: number;
};

export const PagePreview = () => {
  const [components, setComponents] = useState<ComponentType[]>([]);
  const articleCardProps = {
    thumbnailUrl: dummyCards[0].thumbnailUrl,
    category: dummyCards[0].category,
    title: dummyCards[0].title,
    createdAt: dummyCards[0].createdAt,
  };

  const [{ isOver }, drop] = useDrop<UIParams, void, { isOver: boolean }>(() => ({
    accept: ['button', 'textInput', 'heading', 'articleCard'],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (!offset) return;

      const dropTargetElement = document.elementFromPoint(offset.x, offset.y);
      if (!dropTargetElement) return;

      const dropTargetRects = dropTargetElement.getBoundingClientRect();
      const left = offset.x - dropTargetRects.left;
      const top = offset.y - dropTargetRects.top;
      const type = item.type;

      // 新規コンポーネントの作成
      if (item.origin === 'componentList') {
        const id = uuid();
        setComponents((prev) => [...prev, { id, type, left, top }]);
      }
      // 既存コンポーネントの移動
      else if (item.origin === 'pageComponent') {
        setComponents((prev) =>
          prev.map((component) =>
            component.id === item.id ? { ...component, left, top } : component,
          ),
        );
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const backgroundColor = isOver ? 'bg-green-200' : 'bg-gray-200';

  return (
    <div
      ref={drop}
      className={`w-4/5 h-screen border border-sky-200 rounded relative ${backgroundColor}`}
    >
      {components.map((component) => {
        let item;
        switch (component.type) {
          case 'button':
            item = <Button id={component.id} origin={'pageComponent'} type={component.type} />;
            break;
          case 'textInput':
            item = <TextInput id={component.id} origin={'pageComponent'} type={component.type} />;
            break;
          case 'heading':
            item = <Heading id={component.id} origin={'pageComponent'} type={component.type} />;
            break;
          case 'articleCard':
            item = (
              <ArticleCard
                id={component.id}
                origin={'pageComponent'}
                type={component.type}
                contentId={'112'}
                {...articleCardProps}
              />
            );
          default:
            break;
        }
        return (
          <>
            <div
              key={component.id}
              style={{
                position: 'absolute',
                left: component.left,
                top: component.top,
              }}
            >
              {item}
            </div>
          </>
        );
      })}
    </div>
  );
};
