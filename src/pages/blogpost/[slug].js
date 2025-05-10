import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogPost.module.css";
import * as fs from "fs";
import path from "path";

//1. Find the file
//2 .Display the file
const slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);

  // Destructure slug from router.query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        {blog && blog.content ? (
          <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
        ) : (
          <p>Loading or no content available.</p>
        )}
      </main>
    </div>
  );
};
export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`);
  allb = allb.map((item) => {
    return { params: { slug: item.split(".")[0] } };
    //or { params: { slug: item.replace(".json", "") } } both are correct
  });
  console.log(allb);
  return {
    paths: allb,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  console.log("Generating page for:", slug);

  try {
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

    return {
      props: { myBlog: JSON.parse(myBlog) },
    };
  } catch (err) {
    console.error("Error reading blog:", err.message);
    return {
      notFound: true,
    };
  }
}

export default slug;
