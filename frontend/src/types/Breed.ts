export interface Breed {
  id: string;
  name: string;
  origin: string;
  description: string;
  temperament?: string;
  life_span?: string;
  weight?: {
    imperial: string;
    metric: string;
  };
  reference_image_id?: string;
  image?: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
}

export interface BreedApiResponse {
  breeds: Breed[];
}

export interface UploadFormProps {
  onUploadSuccess: (breeds: Breed[]) => void;
  onError: (message: string) => void;
}

export interface BreedResultsProps {
  breeds: Breed[];
  loading: boolean;
  error: string | null;
}

