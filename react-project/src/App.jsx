import { Header } from './components/header';
import { Post } from './components/post';
import { SideBar } from './components/sidebar';

import styles from './app.module.css'
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1711578194770374656/kd36052j_400x400.jpg',
      name: 'Gustavo Jesus',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 ' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
    },
      {type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-01-08 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1650561613718515712/WuC1gjHs_400x400.jpg',
      name: 'Roberto Freitas',
      role: 'UI'
    },
    content: [
      {type: 'paragraph', content: 'Oiiii' },
      {type: 'paragraph', content: 'Gente, acabei de fazer um vídeo muito massa'
    },
      {type: 'link', content: 'https://youtube.com' },
    ],
    publishedAt: new Date('2024-01-01 10:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
      {posts.map(post => {
        return(
<Post
        key={post.id}
        author={post.author}
        content={post.content}
        publishedAt={post.publishedAt}
         />
        ) 
      })}
        </main>
      </div>
    </div>
  );
}
