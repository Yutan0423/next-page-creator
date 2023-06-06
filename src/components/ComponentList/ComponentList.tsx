'use client';
import { dummyCards } from '@/constants/dummy';
import React from 'react';
import { ArticleCard } from './_internal/ArticleCard';
import { Button } from './_internal/Button';
import { Heading } from './_internal/Heading';
import { TextInput } from './_internal/TextInput';
import { Spacer } from '../Util/Spacer';

export const ComponentList = () => {
  const articleCardProps = {
    thumbnailUrl: dummyCards[0].thumbnailUrl,
    category: dummyCards[0].category,
    title: dummyCards[0].title,
    createdAt: dummyCards[0].createdAt,
  };

  return (
    <div className="w-1/5">
      <h2 className="text-2xl font-bold mb-4">Components</h2>
      <Button id={'sample1'} origin={'componentList'} type={'button'} />
      <Spacer size={2} />
      <TextInput id={'sample2'} origin={'componentList'} type={'textinput'} />
      <Spacer size={2} />
      <Heading id={'sample3'} origin={'componentList'} type={'heading'} />
      <Spacer size={2} />
      <ArticleCard
        id={'sample3'}
        origin={'componentList'}
        type={'articleCard'}
        contentId={'111'}
        {...articleCardProps}
      />
    </div>
  );
};
