import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // TODO: Fetch all blog post slugs from CMS or data source
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} | Blog Lannkin`,
    description: `Lisez notre article sur ${title}. Conseils et expertise en marketing digital par Lannkin.`,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
