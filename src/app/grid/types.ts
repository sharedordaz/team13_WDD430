export type ArtItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  artCategory: string;
};

export type Artist = {
  name: string;
  picture: string;
  personalStories: string;
  artItems: ArtItem[]
}
