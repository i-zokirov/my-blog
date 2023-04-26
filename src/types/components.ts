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
