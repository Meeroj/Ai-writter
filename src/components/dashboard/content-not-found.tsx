import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import { AlertCircle } from 'lucide-react';

export default function ContentNotFound() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Content not found!</AlertTitle>
      <AlertDescription>Please, provide a valid ID</AlertDescription>
    </Alert>
  );
}
