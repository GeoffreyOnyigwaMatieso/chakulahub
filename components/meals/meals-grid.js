import MealItem from './meal-item';
import classes from './meals-grid.module.css';


export default function MealsGrid({meals}){
    //Flatten the meals array 
    const flatMeals = meals.flat();

    console.log(meals)
    return <ul className = {classes.meals}>
        {flatMeals.map(meal => <li key={meal.id}>
            <MealItem  {...meal}/>
        </li>)}
    </ul>
}