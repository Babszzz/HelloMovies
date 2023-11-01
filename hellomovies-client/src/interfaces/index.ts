export interface ISearchbarProps {
  placeholder?: string;
  id?: string;
  value?: any;
  name?: string;
  onBlur?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  width?: any;
  icon?: React.ReactElement;
  error?: any;
  touched?: any;
  input: any[];
  output: React.Dispatch<React.SetStateAction<[]>>;
  loading?: boolean;
  showIcon?: boolean;
  handleFilter: <T>(item: T, searchQuery: string) => boolean;
}

export interface ISingleMovieProps {
  singleContent: any;
  goBack: () => void;
}

export interface IMainPageProps {
  showSingleMovie: (item: ISingleMovieObject) => void;
}

export interface ISingleMovieObject {
  title: string;
  genre: string[];
  time: string;
  imdb: string;
  year: string;
  imgSrc: string;
  desc: string;
  director: string;
  actors: string[];
}

export interface IButtonProps {
  title: string;
  icon?: React.ReactNode;
  onClick: () => void;
}
