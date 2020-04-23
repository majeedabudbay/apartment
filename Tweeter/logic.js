const Tweeter = function(){

    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    
    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = function(){
        return posts
    }

    const addPost = function(text){
        postIdCounter++
        comments = []

        const newPost = {
            text,
            id: "p"+postIdCounter,
            comments
        }

        posts.push(newPost)
    }

    const removePost = function(postID){
        let counter = 0
        for(post of posts){   
            if(post.id === postID){    
                posts.splice(counter,1)
             }
             counter++
        }
    }

    const addComment = function(text, postID){
        let counter = 0
        for(post of posts){
              
            if(post.id === postID){
                commentIdCounter++
                const comment = {
                    id: "c" + commentIdCounter,
                    text
                }    
                post.comments.push(comment)
             }
             counter++
        }
    }

    const removeComment = function(postID, commentID){
        let counterId = 0
        for(post of posts){   
            if(post.id === postID){
                let counterComment = 0    
                for(comment of post.comments){
                    if(comment.id === commentID){
                        post.comments.splice(counterComment, 1)
                    }
                    counterComment++
                }
                
             }
             counterId++
        }
    }

    return{
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

// const tweeter = Tweeter()

// console.log(tweeter.getPosts())
// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// // tweeter.removePost("p3")
// // console.log(tweeter.getPosts())

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}
