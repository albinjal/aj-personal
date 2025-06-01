import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBlogPost, blogPosts } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = async () => {
    const url = window.location.href;
    const title = post.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        // You could show a toast notification here
        alert('Link copied to clipboard!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  // Simple markdown-to-HTML conversion (basic implementation)
  const renderMarkdown = (content: string) => {
    let html = content
      // Headers
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')

      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

      // Lists
      .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
      .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4">$2</li>')

      // Code blocks
      .replace(/```[\s\S]*?```/g, '<pre class="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto"><code class="text-sm">$&</code></pre>')
      .replace(/```/g, '')

      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>')

      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>')

      // Paragraphs
      .split('\n\n')
      .map(paragraph => {
        paragraph = paragraph.trim();
        if (paragraph.startsWith('<h') || paragraph.startsWith('<li') || paragraph.startsWith('<pre') || paragraph.startsWith('<ul') || paragraph.startsWith('<ol')) {
          return paragraph;
        }
        if (paragraph.length > 0) {
          return `<p class="mb-4 leading-relaxed text-gray-700">${paragraph}</p>`;
        }
        return '';
      })
      .join('\n');

    // Fix list grouping
    html = html.replace(/(<li class="ml-4">.*?<\/li>)\n/g, '$1')
             .replace(/(<li class="ml-4">.*?<\/li>)/g, '<ul class="list-disc ml-6 mb-4">$1</ul>')
             .replace(/<\/ul>\n<ul class="list-disc ml-6 mb-4">/g, '');

    return html;
  };

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Post metadata */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>

          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readingTime} min read</span>
          </div>

          <div className="flex items-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {post.category}
            </span>
          </div>

          {post.featured && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Share button */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
          <Button variant="outline" onClick={sharePost} size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Article content */}
      <article className="prose prose-lg max-w-none">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </article>

      {/* Article footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Enjoyed this post?
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with me on LinkedIn for more insights on AI, quantitative trading, and mathematics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <a
                  href="https://linkedin.com/in/albinjaldevik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.slug}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formatDate(relatedPost.publishedAt)}</span>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {relatedPost.title}
                  </Link>
                </h4>

                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {relatedPost.excerpt}
                </p>

                <Button variant="outline" size="sm" asChild>
                  <Link to={`/blog/${relatedPost.slug}`}>
                    Read More
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
