import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import path from "path";

const Blog = ({ allBlogs }) => {
  const [blogs, setBlogs] = useState(allBlogs);

  useEffect(() => {
    // This ensures all blogs are loaded when the component mounts
    setBlogs(allBlogs);
  }, [allBlogs]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => (
          <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
            </Link>
            <p className={styles.blogItemp}>
              {blogitem.content.substr(0, 140)}...
            </p>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <button className={styles.btn}>Read More</button>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const blogDataDir = path.join(process.cwd(), "blogdata");
  const files = fs.readdirSync(blogDataDir);
  const allBlogs = [];

  for (const file of files) {
    const filePath = path.join(blogDataDir, file);
    const fileData = fs.readFileSync(filePath, "utf8");
    allBlogs.push(JSON.parse(fileData));
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;
