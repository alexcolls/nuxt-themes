declare module 'prismjs';
declare module 'dompurify';

interface Window {
  YT: any;
  onYouTubeIframeAPIReady: () => void;
}

type MultiType = string | number | boolean | object | null | undefined;

type ISO639 = 'en' | 'es' | 'fr' | 'it' | 'pt' | 'ch';

type Color = 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' |    
  'indigo' | 'purple' | 'pink' | 'gray' | 'white' | 'black' | 'transparent';

type AppColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning';

type LightModes = 'light' | 'dark' | 'system';

interface YMD {
  year: string;
  month: string;
  day: string;
}

interface LangOption {
  value: ISO639;
  label: string;
  icon: string;
}

type LangOptions = LangOption[];

interface TimeInfo {
  updatedAt?: string;
  createdAt?: string;
}

interface DocumentType extends TimeInfo {
  id: string;
  name: string;
  prompt: string;
  processPageByPage: boolean;
  samples: DocumentSample[];
}

type DocumentTypes = DocumentType[];

interface DocumentDownloaded {
  size: number;
  type: string;
}

interface DocumentUploaded extends TimeInfo {
  id: string;
  name: string;
  extension: string;
  numberPages: number;
  isValidExtension: boolean;
  rootDirectory: string;
  previousPathString: string;
  isValidExtensionFile: boolean;
  rootDirectoryPath: string;
}

interface DocumentSample extends TimeInfo {
  id?: string;
  document: DocumentUploaded;
  response: string;
}

type ResultStatus = "DONE" | "ERROR" | "PROCESSING";

interface ResultPage {
  page: number;
  response: string | JSON;
  tokens: number; /* int */
  executionTime: number; /* milliseconds */
  extension: string;
  status: ResultStatus
}

interface AiResponse extends TimeInfo {
  id: string;
  prompt: string;
  engine: string;
  status: ResultStatus;
  document: DocumentUploaded;
  resultPage: ResultPage[];
  totalTokens: number; /* int */
  samples: DocumentSample[];
}

type DocTypeChat = AiResponse[];

interface ChatPages {
  [docTypeId: string]: number; /* Current page index */
}
