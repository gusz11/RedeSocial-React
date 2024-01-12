import styles from './avatar.module.css';

export function Avatar({ HasBorder = true, src }){
    return(
        <img className={HasBorder ? styles.avatarWithBorder : styles.avatar} src={src}></img>
    );
    
}