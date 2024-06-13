import style from './HomePage.module.css';

export default function HomePage() {
    return (
            <div className={style.container}>
        <h1 className={style.title}>
          Welcome to the Contact Book{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    );
}