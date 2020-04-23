const tweeter = Tweeter()
const renderer = Renderer()

$("#post").on("click", function(){
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())
})


$(document).on('click','.delete',function(){
    tweeter.removePost($("#container").find("#posts").find(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
})


$(document).on('click','.post-comment',function(){
    console.log($(this).closest(".post").find(".add-comment").val())
    tweeter.addComment($(this).closest(".post").find(".add-comment").val(), $(this).closest(".post").data().id)
    $("#container").find("#posts").find(".post").find(".comments").val("")
    renderer.renderPosts(tweeter.getPosts())
})

$(document).on('click','.delete-comment',function(){
    tweeter.removeComment($(this).closest(".post").data().id, $(this).closest(".post").find(".comments").data().id)
    renderer.renderPosts(tweeter.getPosts())
})


renderer.renderPosts(tweeter.getPosts())
