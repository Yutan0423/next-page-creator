'use client';
import { dummyCards } from '@/constants/dummy';
import React from 'react';
import { ArticleCard } from './ArticleCard';
import { Button } from './Button';
import { Heading } from './Heading';
import { TextInput } from './TextInput';
import { Spacer } from './Util/Spacer';

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
      <Button id={'sample1'} origin={'componentList'} />
      <Spacer size={2} />
      <TextInput id={'sample2'} origin={'componentList'} />
      <Spacer size={2} />
      <Heading id={'sample3'} origin={'componentList'} />
      <Spacer size={2} />
      <ArticleCard
        id={'sample3'}
        origin={'componentList'}
        contentId={'111'}
        {...articleCardProps}
      />
    </div>
  );
};
