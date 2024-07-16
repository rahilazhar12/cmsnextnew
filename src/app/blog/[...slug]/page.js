import Blogdetails from "./Blogdetailpage";

// Function to fetch the slugs that you want to generate static pages for
export async function generateStaticParams() {
  const response = await fetch('https://www.admin786.pnytrainings.com/api/featuredposts');
  const posts = await response.json();

  return posts.featured_posts.map(post => ({
    slug: [post.category_slug, post.url_slug] // Adjust the property according to your API response
  }));
}

// Fetching metadata for each blog post
export default async function Blogdetailsnew({ params }) {
  const [categorySlug, urlSlug] = params.slug;

  const metadata = await fetch(`https://www.admin786.pnytrainings.com/api/featuredposts/${urlSlug}`)
    .then(response => response.json())
    .then(data => ({
      metatitle: data.post_detail.meta_title,
      metadescription: data.post_detail.meta_description,
      canonicalUrl: `https://pnytrainings.com/blog/${data.post_detail?.category_slug}/${data.post_detail?.url_slug}`
    }))
    .catch(error => {
      console.error("Error fetching metadata:", error);
      return {
        metatitle: '',
        metadescription: '',
        canonicalUrl: ''
      };
    });

  return (
    <>
      <title>{metadata.metatitle}</title>
      <meta name="description" content={metadata.metadescription} />
      {metadata.canonicalUrl && (
        <link rel="canonical" href={metadata.canonicalUrl} />
      )}
      <Blogdetails params={urlSlug} />
    </>
  );
}
