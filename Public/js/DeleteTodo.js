function deleteTodo(id,el){
  el.style.display="none"
  $.ajax({
    type: 'DELETE',
    // make sure you respect the same origin policy with this url:
    // http://en.wikipedia.org/wiki/Same_origin_policy
    url: '/todos/'+id,
    success: function(msg){
        getTodos()
    }
});
}
