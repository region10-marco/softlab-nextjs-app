'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const posts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      author: 'John Anderson',
      date: 'Jan 15, 2024',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'UI/UX Design Best Practices',
      excerpt: 'Learn the essential principles of creating beautiful and user-friendly interfaces.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      author: 'Sarah Williams',
      date: 'Jan 12, 2024',
      category: 'Design',
    },
    {
      id: 3,
      title: 'Mobile App Development Guide',
      excerpt: 'A comprehensive guide to building successful mobile applications from scratch.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      author: 'Michael Chen',
      date: 'Jan 10, 2024',
      category: 'Development',
    },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="section-subtitle">
            Insights, tips, and stories from our team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}> 
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gradient-primary text-white text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-primary-500" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-primary-500" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                      <span>Read More</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-primary">
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
