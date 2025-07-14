export interface ICategory {
    id: string;
    name: string;
    slug: string;
    thumbnail: { url: string };
}

export interface IArticle {
    id: string;
    documentId: string;
    content: string;
    title: string;
    slug: string;
    coverImage: { url: string };
    category: ICategory;
}
