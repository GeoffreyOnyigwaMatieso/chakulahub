import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';


const MealsPage = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className = {classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun </p>
        <p className={classes.cta}>
          <Link href="/meals/share"></Link>
            Share your favorite Recipe
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}/>
      </main>
    </div>
  )
}

export default MealsPage
