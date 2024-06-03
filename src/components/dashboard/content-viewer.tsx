import { Card, CardContent, CardFooter } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ClipboardIcon, ShareIcon } from '@heroicons/react/16/solid';
import toast from 'react-hot-toast';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { TGeneratedContent } from '@/shared/types/generated-content.ts';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip.tsx';

type ContentViewerProps = {
  generatedContent: TGeneratedContent;
  onSave: (generatedContent: TGeneratedContent) => void;
};

enum Mode {
  View,
  Edit,
}

export default function ContentViewer({
  generatedContent,
  onSave,
}: ContentViewerProps) {
  const [editedContent, setEditedContent] = useState<string>(
    generatedContent.content
  );
  const [mode, setMode] = useState<Mode>(Mode.View);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedContent.content);
      toast.success('Successfully copied to clipboard');
    } catch (e) {
      console.error('[Error] Failed to copy to clipboard', e);
      toast.error('Error occurred while copying to clipboard');
    }
  };

  const handleShare = async () => {
    try {
      const { origin } = window.location;
      await navigator.clipboard.writeText(
        `${origin}/share/${generatedContent.id}`
      );
      toast.success('Share link successfully copied to clipboard');
    } catch (e) {
      console.error('[Error] Failed to copy to clipboard', e);
      toast.error('Error occurred while copying to clipboard');
    }
  };

  const handleEdit = () => {
    setMode(Mode.Edit);
  };

  const handleContentChange = (value?: string) => {
    setEditedContent(value || '');
  };

  const handleCancel = () => {
    setMode(Mode.View);
    setEditedContent(generatedContent.content);
  };

  const handleSave = () => {
    onSave({ ...generatedContent, content: editedContent });
    setMode(Mode.View);
  };

  return mode === Mode.View ? (
    <Card className="mt-4">
      <CardContent className="p-4 md:p-6 lg:p-8">
        <MDEditor.Markdown
          source={editedContent}
          style={{ whiteSpace: 'pre-wrap' }}
        />
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" onClick={handleEdit}>
                <Pencil className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" onClick={handleShare}>
                <ShareIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" onClick={handleCopy}>
                <ClipboardIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  ) : (
    <div>
      <MDEditor
        height={400}
        className="mt-4"
        value={editedContent}
        onChange={handleContentChange}
      />
      <div className="mt-4 flex gap-2">
        <Button onClick={handleSave}>Save</Button>
        <Button variant="destructive" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
