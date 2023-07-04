'use client'

import styles from '../page.module.css'
import { usePathname } from 'next/navigation';

export default async function DashboardPage({posts}: any) {

  const pathName = usePathname();
  console.log(pathName);

  return (
    <main className={styles.main}>
      <div>Dashboard</div>
      <div>{posts?.userId}</div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ullam qui, provident sequi odit aliquam repudiandae inventore nemo excepturi officiis distinctio, molestias hic veritatis facilis? Exercitationem quia hic praesentium sed!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eius aperiam assumenda ducimus necessitatibus exercitationem consequuntur iure dolore doloremque, doloribus molestiae dolores reiciendis optio corrupti voluptas veritatis, suscipit perferendis. Dolores.</p>
    </main>
  )
}