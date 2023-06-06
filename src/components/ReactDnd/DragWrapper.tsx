import { UIParams } from '@/types/dnd';
import { FC, ReactNode } from 'react';
import { useDrag } from 'react-dnd';

type Props = UIParams & {
  children: ReactNode;
};

export const DragWrapper: FC<Props> = ({ id, origin, type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    item: { id, origin, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`flex ${isDragging ? 'opacity-50' : 'opacity-100'} ${
        origin === 'componentList' ? 'scale-50' : 'scale-100'
      }`}
    >
      {children}
    </div>
  );
};
