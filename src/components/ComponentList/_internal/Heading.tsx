'use client';
import { UIParams } from '@/types/dnd';
import React, { FC } from 'react';
import { DragWrapper } from '../../ReactDnd/DragWrapper';

type Props = UIParams;

export const Heading: FC<Props> = ({ ...dragWrapperProps }) => {
  return (
    <DragWrapper {...dragWrapperProps}>
      <h2>タイトルを入力してください</h2>
    </DragWrapper>
  );
};
