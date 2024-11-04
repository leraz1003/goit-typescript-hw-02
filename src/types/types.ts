export type Url = {
  small: string;
  regular: string;
};

export type User = {
  name: string;
};

export interface Article {
  id: string;
  urls: Url;
  likes: number;
  alt_description: string;
  user: User;
}

export type ModalImage = {
  regularUrl: string;
  alt_description: string;
  likes: number;
  userName: string;
};
