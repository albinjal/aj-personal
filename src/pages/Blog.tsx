import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getAllCategories, getAllTags } from "@/lib/blog-data";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = getAllCategories();
  const tags = getAllTags();

  // Filter posts based on current filters
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesTag && matchesSearch;
  });

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedTag("");
    setSearchQuery("");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const PostCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Post metadata */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="mr-4">{formatDate(post.publishedAt)}</span>
          <Clock className="h-4 w-4 mr-1" />
          <span className="mr-4">{post.readingTime} min read</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {post.category}
          </span>
          {post.featured && (
            <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title and excerpt */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className="inline-flex items-center px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-md transition-colors"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </button>
          ))}
        </div>

        {/* Read more button */}
        <Button variant="outline" asChild>
          <Link to={`/blog/${post.slug}`}>
            Read More
          </Link>
        </Button>
      </div>
    </article>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Insights and thoughts on AI, mathematics, quantitative trading, and career development
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-12">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Tag Filter */}
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={clearFilters}
              className="w-full"
              disabled={!selectedCategory && !selectedTag && !searchQuery}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Active filters display */}
        {(selectedCategory || selectedTag || searchQuery) && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-700">Active filters:</span>

              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("")}
                    className="ml-2 hover:text-blue-600"
                  >
                    ×
                  </button>
                </span>
              )}

              {selectedTag && (
                <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  Tag: {selectedTag}
                  <button
                    onClick={() => setSelectedTag("")}
                    className="ml-2 hover:text-green-600"
                  >
                    ×
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-2 hover:text-purple-600"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mb-8">
        <p className="text-gray-600">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
        </p>
      </div>

      {/* Blog posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or clearing the filters to see all posts.
            </p>
            <Button onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        </div>
      )}

      {/* Subscribe section */}
      <section className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Interested in reading more? Connect with me on LinkedIn to stay updated on new posts
          about AI, quantitative trading, and mathematical insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </div>
  );
};

export default Blog;
