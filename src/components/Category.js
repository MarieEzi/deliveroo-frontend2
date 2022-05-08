const Category = ({category}) => {
    return (
<section>
         <h2>{category.name}</h2>
         {category.meals.map((meal,num)=>{
           return (
           <article key={meal.id}>
             <h3>{meal.title}</h3>
             <p>{meal.description}</p>
             <p>{meal.price} €</p>
             {meal.popular && <p className="popular">Populaire</p>}
             <img src={meal.picture} alt="" />
           </article>
           );
         })};  
         </section>
    ); 
};

export default Category;