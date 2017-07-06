export function addTodo(id, task) {
   return {
       type: 'ADD_TODO',
       task,
       id,
       completed: false
   };
}

export function toggleTodo(id) {
   return {
       type: 'TOGGLE_TODO',
       id
   };
}

export function deleteTodo(id) {
   return {
       type: 'DELETE_TODO',
       id
   };
}
