export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
}

const posts: Post[] = [];

export function getAllPosts(): Omit<Post, "content">[] {
  return posts.map(({ slug, title, date, excerpt, readTime }) => ({
    slug,
    title,
    date,
    excerpt,
    readTime,
  }));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
