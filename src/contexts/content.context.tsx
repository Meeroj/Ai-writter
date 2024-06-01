import { TContentCreateRequestParam } from '@/shared/types/content-create-request-param.ts';
import { createContext, FC, ReactNode, useContext, useState } from 'react';
import { generateArticle } from '@/utils/openai.ts';
import toast from 'react-hot-toast';
import { TGeneratedContent } from '@/shared/types/generated-content.ts';
import { useLocalStorage } from 'react-use';
import {
  TPromptHistory,
  TPromptLink,
} from '@/shared/types/prompt-history.type.ts';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

interface IContentContext {
  generatingContent: boolean;
  setGeneratingContent: (value: boolean) => void;
  generateContent: (
    params: TContentCreateRequestParam
  ) => Promise<TGeneratedContent | null>;
  getPromptHistory: () => TPromptHistory[];
  getContentById: (id: string) => TGeneratedContent;
  updateById: (id: string, generatedContent: TGeneratedContent) => void;
}

export const ContentContext = createContext<IContentContext | null>(null);

const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('Content context must be used within a ContentProvider');
  }
  return context;
};

interface IProps {
  children: ReactNode;
}

const ContentContextProvider: FC<IProps> = ({ children }) => {
  const [generatingContent, setGeneratingContent] = useState(false);
  const [contentItems, setContentItems] = useLocalStorage<TGeneratedContent[]>(
    'contentItems',
    []
  );
  const generateContent = async (params: TContentCreateRequestParam) => {
    let generatedContent: TGeneratedContent | null = null;
    setGeneratingContent(true);
    const { title, description } = params;
    try {
      const content = await generateArticle(title, description);
      if (content) {
        generatedContent = {
          id: uuidv4(),
          title,
          description,
          content,
          createdAt: new Date(),
        };
        setContentItems([generatedContent, ...(contentItems || [])]);
      }
    } catch (error) {
      console.error('[Error] Failed to generate article', error);
      toast.error('Error occurred while generating content');
    } finally {
      setGeneratingContent(false);
    }
    return generatedContent;
  };

  const getPromptHistory = (): TPromptHistory[] => {
    if (!contentItems) {
      return [];
    }
    const groupedItems = contentItems.reduce(
      (prev: { [date: string]: TPromptLink[] }, next) => {
        const date = dayjs(next.createdAt).format('MMM DD, YYYY');
        if (!prev[date]) {
          prev[date] = [];
        }
        prev[date].push({
          title: next.title,
          url: `/dashboard/content/${next.id}`,
        });
        return prev;
      },
      {}
    );
    return Object.keys(groupedItems)
      .sort((a, b) => dayjs(b).diff(a))
      .map((date) => ({
        date,
        links: groupedItems[date],
      }));
  };

  const getContentById = (id: string) => {
    const generatedContent = contentItems?.find((item) => item.id === id);
    if (!generatedContent) {
      throw new Error('Content not found');
    }
    return generatedContent;
  };

  const updateById = (id: string, generatedContent: TGeneratedContent) => {
    const updatedContentItems = contentItems?.map((item) => {
      if (item.id === id) {
        return generatedContent;
      }
      return item;
    });
    setContentItems(updatedContentItems || []);
  };

  return (
    <ContentContext.Provider
      value={{
        generatingContent,
        setGeneratingContent,
        generateContent,
        getPromptHistory,
        getContentById,
        updateById,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentContextProvider, useContentContext };
