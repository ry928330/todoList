"build": "webpack",
"build": "babel src -d lib",
{
   "presets": [
     "es2015",
     "react",
     "stage-0"
   ],
   "plugins": []
 }
 <Footer filter = { visibilityFilter } onFilterChange = { nextFilter => onFilterChange(nextFilter)}/>
 <TodoList todos = {visibleTodos} onTodoClick = { onTodoClick }/>

 <AddTodo onAddClick = { onAddClick }/>

 <Completed todos = {visibleTodos} onTodoClick = { onTodoClick }/>

