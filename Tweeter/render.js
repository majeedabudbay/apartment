const Renderer = function(){

    const renderPosts = function(posts){
        $("#posts").empty()

        for(post of posts){
            const newPost = $(`<div class = "post" data-id =${post.id}>${post.text}</div>`)
        
            $(newPost).append(`<span class="delete">X</span>`) 
            for(comment of post.comments){
                $(newPost).append(`<div> <span class="delete-comment">X</span>
                <span class="comments" data-id = ${comment.id} >  ${comment.text} </span> </div>`)
            
            }
            $(newPost).append(`<input type="text" placeholder="Add a comment!" class = "add-comment" id = "input">
            <div class = "post-comment" id = "post">Post Comment</div>`)
            
            $("#posts").append(newPost)    
        }

        
    }

    return{
        renderPosts
    }
}