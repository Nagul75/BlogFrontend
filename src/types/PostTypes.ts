export interface TruncatedPost {
  id: string;
  title: string;
  content: string;
  date_published: string;
}

export interface CompletePost {
  authorId: string;
  content: string;
  createdAt: string;
  id: string;
  publishedAt: string;
  scoreCount: string;
  slug: string;
  status: string;
  title: string;
  updatedAt: string;
}
