export interface ISearchModal {
  searchModal: boolean;
  setSearchModal: (searchModal: boolean) => void;
}

export interface ISocialProps {
  source: {
    [x: string]: string;
  };
  className: string;
}

export interface IPaginationProps {
  section?: string;
  currentPage: number;
  totalPages: number;
}
