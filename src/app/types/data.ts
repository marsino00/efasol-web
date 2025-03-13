export type HeroData = {
  fields: {
    heroImage: ContentfulImage;
    heroTitulo: string;
    heroDesc: string;
  };
  sys: {
    id: string;
  };
};
export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}
