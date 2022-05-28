import { css } from '@emotion/css'

type Props = {
    children: string | JSX.Element
}

function CardComponent({ children }: Props) {

    const articleStyle = css`
    padding: 3rem;
    width: 4rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5887FF;
    transform:  skewX(-10deg)
    ;
    transition: all 0.3s ease-in-out;
    cursor: default;
    &:hover {
        background: #A682FF;
        box-shadow: 0 0 5px #A682FF;
        transition: all 0.3s ease-in-out;
    }
    `

    return(
        <article className={articleStyle}>
            {children}
        </article>
    )
    
}

export default CardComponent;