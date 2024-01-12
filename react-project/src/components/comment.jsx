import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';
import { Avatar } from './avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return (
        <article className={styles.comment}>
            <Avatar HasBorder={false}
                src="https://pbs.twimg.com/profile_images/1711578194770374656/kd36052j_400x400.jpg"
                alt="User Profile"
                onError={(e) => { e.target.src = '/default-profile-image.jpg'; }}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Gustavo Jesus</strong>
                            <time dateTime="2024-01-07 23:41:00">Agora</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário" aria-label="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </article>
    );
}
