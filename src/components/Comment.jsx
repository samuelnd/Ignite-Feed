import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
    return(
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/samuelnd.png"  />

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                               <strong>Samuel Nunes</strong> 
                                <time title= "15 de novembro de 2022" dateTime="2022-11-15 12:51">Cerca de 1hr atrás</time>

                            </div>

                            <button title="Deletar comentário">
                                <Trash size={24}/>
                            </button>
                        </header>

                        <p>{content}</p>
                    </div>

                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>

                    </footer>
                </div>
            </div>
        </>
    )
}