function updateTodosUI(list){
  $("#todo-list").html("")
  if(list.length == 0) {
    $("#todo-list").append(`
      <div class="empty-todo">There are no Todos left</div>
    `)
  }else{
    list.forEach((value,index) => {
      $("#todo-list").append(`
          <div class="todo-item" onclick="deleteTodo('${value._id}',this)">
            ${value.todo}
          </div>
      `)
    })
  }

}

function getTodos(){
  $.ajax({
    type: 'GET',
    url: '/todos',
    success: function(response){
      updateTodosUI(response.data)
      $("#add-todo").val("")
    }
  })
}

window.onload = () => {
  getTodos()
}
