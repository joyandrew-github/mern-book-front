import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaUser, FaTag, FaHeart, FaComment, FaShare, FaSearch } from 'react-icons/fa';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState({});
  const [expandedPost, setExpandedPost] = useState(null);

  const categories = [
    'All',
    'Book Reviews',
    'Author Interviews',
    'Reading Tips',
    'Literary News',
    'Writing Guides'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Must-Read Books of 2024",
      excerpt: "Discover the most captivating reads that have taken the literary world by storm this year. From gripping thrillers to heartwarming literary fiction...",
      content: "Our carefully curated list includes Sally Rooney's latest masterpiece, the groundbreaking sci-fi novel by Andy Weir, and the Pulitzer Prize-winning historical fiction that's captivating readers worldwide. These books represent the finest in contemporary literature, offering diverse perspectives and unforgettable storytelling...",
      author: "Emma Wilson",
      date: "March 15, 2024",
      category: "Book Reviews",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 156,
      comments: 24
    },
    {
      id: 2,
      title: "Interview with Bestselling Author James Patterson",
      excerpt: "An exclusive interview where James Patterson shares his writing process, upcoming projects, and advice for aspiring authors...",
      content: "In this candid conversation, Patterson reveals the secrets behind his prolific writing career, discusses his collaboration process, and shares insights about the future of publishing. He also announces his upcoming thriller series and educational initiatives...",
      author: "Michael Brooks",
      date: "March 12, 2024",
      category: "Author Interviews",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 243,
      comments: 32
    },
    {
      id: 3,
      title: "The Rise of Digital Reading: E-books vs Traditional Books",
      excerpt: "Exploring the ongoing debate between digital and physical books, and how readers are adapting to new reading formats...",
      content: "As technology evolves, the way we consume literature is changing. This article delves into the benefits and drawbacks of both formats, backed by recent research and reader surveys. We explore accessibility, reading comprehension, and the environmental impact of different reading methods...",
      author: "Sarah Chen",
      date: "March 10, 2024",
      category: "Reading Tips",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 189,
      comments: 45
    },
    {
      id: 4,
      title: "Booker Prize 2024: Shortlist Announced",
      excerpt: "Breaking down this year's Booker Prize shortlist and analyzing the themes that dominate contemporary literature...",
      content: "The prestigious Booker Prize has announced its shortlist for 2024, featuring six remarkable works that challenge conventional storytelling. From experimental fiction to powerful cultural narratives, this year's selection showcases the evolution of modern literature...",
      author: "David Martinez",
      date: "March 8, 2024",
      category: "Literary News",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 167,
      comments: 28
    },
    {
      id: 5,
      title: "Crafting Compelling Characters: A Writer's Guide",
      excerpt: "Essential tips and techniques for creating memorable characters that resonate with readers...",
      content: "Character development is at the heart of great storytelling. This comprehensive guide covers character arc creation, dialogue writing, and methods for making your characters feel authentic and three-dimensional. Including examples from classic and contemporary literature...",
      author: "Rachel Thompson",
      date: "March 5, 2024",
      category: "Writing Guides",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 298,
      comments: 56
    },
    {
      id: 6,
      title: "Children's Literature: Trends and Impact",
      excerpt: "Analyzing current trends in children's books and their role in early education and development...",
      content: "Modern children's literature is breaking new ground in representation, educational value, and entertainment. This article examines how contemporary children's books are addressing important social issues while maintaining the magic that captivates young readers...",
      author: "Lisa Wong",
      date: "March 3, 2024",
      category: "Book Reviews",
      image: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 175,
      comments: 38
    },
    {
      id: 7,
      title: "The Art of Book Photography",
      excerpt: "Tips and techniques for capturing stunning bookstagram photos and building your literary social media presence...",
      content: "Learn how to create captivating book photography for your social media. This guide covers lighting techniques, composition tips, prop styling, and post-processing methods to make your book photos stand out in the digital space...",
      author: "Alex Turner",
      date: "March 1, 2024",
      category: "Reading Tips",
      image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 221,
      comments: 42
    },
    {
      id: 8,
      title: "Independent Bookstores: A Renaissance",
      excerpt: "Exploring the revival of independent bookstores and their vital role in literary communities...",
      content: "Despite digital competition, independent bookstores are experiencing a remarkable renaissance. This article explores how these literary havens are reinventing themselves through community events, curated selections, and unique customer experiences...",
      author: "James Wilson",
      date: "February 28, 2024",
      category: "Literary News",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 143,
      comments: 29
    },
    {
      id: 9,
      title: "Science Fiction: Predicting Tomorrow",
      excerpt: "How science fiction literature has influenced and predicted technological advancements...",
      content: "From Jules Verne to modern sci-fi authors, literature has often predicted future technologies. This analysis looks at historical examples and current sci-fi trends that might forecast our technological future...",
      author: "Nina Patel",
      date: "February 25, 2024",
      category: "Book Reviews",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      likes: 267,
      comments: 48
    }
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory.toLowerCase() === 'all' || 
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">BookHive Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the latest in literature, author interviews, book reviews, and reading tips.
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Post Content */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <FaTag />
                  <span>{post.category}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">
                  {expandedPost === post.id ? post.content : post.excerpt}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className="text-blue-600 hover:underline mb-4"
                >
                  {expandedPost === post.id ? 'Show Less' : 'Read More'}
                </button>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Interaction Buttons */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-1 ${
                      likedPosts[post.id] ? 'text-red-500' : 'text-gray-500'
                    }`}
                  >
                    <FaHeart />
                    <span>{post.likes + (likedPosts[post.id] ? 1 : 0)}</span>
                  </motion.button>

                  <button className="flex items-center gap-1 text-gray-500">
                    <FaComment />
                    <span>{post.comments}</span>
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500"
                  >
                    <FaShare />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* No Results Message */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">
            No blog posts found matching your criteria.
          </p>
        </motion.div>
      )}

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-16 bg-blue-50 rounded-xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-gray-600 mb-6">
          Get the latest blog posts and literary news delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog; 