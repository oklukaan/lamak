import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"



const geData = async () =>{
  const res = await fetch(
    `http:localhost:3000/api/view`,
    {
      cache: "no-store",
    }

  );
  if (res.status === 404) {
    // Handle 404 response
    console.error("Resource not found");
    return null; // or some default value
  }
  return res.json();
}


const MenuPosts = async ({ withImage }) => {
  const res =  await geData();
  return (

    <div className={styles.items}>
      {res.mostView.map(e=>(
        <Link key={e.catSlug} href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          {e.catSlug}
          <span className={`${styles.category} ${styles[e.catSlug]}`}>{e.title}</span>
          <h3 className={styles.postTitle}>
            {e.desc}
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>{e.userEmail}</span>
            <span className={styles.date}> - {e.createdAt}</span>
          </div>
        </div>
      </Link>
    
      ))}
      
    </div>
  );
};

export default MenuPosts;
