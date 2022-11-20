import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/samuelnd.png',
      name: 'Samuel Nunes',
      role: 'Student',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: ' jane.design/doctorcare'},           
    ],
    publishedAt: new Date('2022-11-17 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: ' jane.design/doctorcare'},           
    ],
    publishedAt: new Date('2022-11-15 19:00:00')
  },
]

export function App() {

  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
      </main>

    </div>
    </>
  )
}

