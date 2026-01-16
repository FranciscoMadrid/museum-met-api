export interface ImageRow {
  direction: 'left' | 'right'
  src: string [];
}

export interface NavDetail {
  name: string;
  url: string;
}

export interface NavStructure {
  nav: NavDetail[];
}