export type ArtItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  artCategory: string;
};

export type Artist = {
  id: number;
  name: string;
  picture: string;
  personalStories: string;
  artItems: ArtItem[]
}

export type Sort = undefined | string
