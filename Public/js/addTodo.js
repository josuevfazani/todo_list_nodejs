$("#add-submit").click(() => {
  let todo = $("#add-todo").val()
  $.ajax({
    type: 'POST',
    url: '/todos',
    data: {
      'todo': todo
    },
    success: function(msg){
        getTodos()
    }
});
})

$("#add-todo").on("keyup", function(event) {
    if (event.key === "Enter") {
      $("#add-submit").trigger("click")
    }
});
