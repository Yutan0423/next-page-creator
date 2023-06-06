import { UIParams } from '@/types/dnd';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { DragWrapper } from '../../ReactDnd/DragWrapper';
import { Spacer } from '../../Util/Spacer';

type Props = UIParams & {
  contentId: string;
  thumbnailUrl: string;
  category: string;
  title: string;
  createdAt: string;
};

export const ArticleCard: React.FC<Props> = ({
  contentId,
  thumbnailUrl,
  category,
  title,
  createdAt,
  ...dragWrapperProps
}) => {
  const createdAtDate = new Date(createdAt);
  const formattedDate = format(createdAtDate, 'yyyy/MM/dd');

  return (
    <DragWrapper {...dragWrapperProps}>
      <Link href={`/articles/${contentId}`}>
        <div className="bg-white shadow-md rounded-lg p-4 w-full md:flex">
          <div className="w-full md:w-[210px] relative mb-4 md:mb-0">
            <Image
              src={thumbnailUrl}
              alt={title}
              width={210}
              height={140}
              className="rounded-lg w-full md:w-[210px] md:h-[140px]"
            />
          </div>
          <Spacer size={8} />
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <Spacer size={4} />
            <div className="flex justify-left items-center">
              <span className="text-sm text-gray-500">{category}</span>
              <Spacer size={4} />
              <span className="text-sm text-gray-500">{formattedDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </DragWrapper>
  );
};
