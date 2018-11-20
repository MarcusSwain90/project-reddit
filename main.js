// an array of post objects
var posts = []
var comments = []

$('#submit').click(function() {
  addPost();
  $('#name').val("");
  $('#message').val("");
})

$('#comment').click(function(){
  addComment();
  $('.comment-user').val("");
  $('.comment-message').val("");
})


// add a new post object
var addPost = function() {
  var nameInput = $('#name').val();
  var userInput = $('#message').val();
  var post = {
    name: nameInput,
    message: userInput
  }
  posts.push(post);
  // invoke a function that will convert each post object in the posts array to
  // HTML and append it to the .posts div
  renderPosts();
};

var addComment = function() {
  var commenterName = $('.comment-user').val();
  var commentMessage = $('.comment-message').val();

  var comment = {
    commenter: commenterName,
    message: commentMessage
  }
  comments.push(comment);

  renderComments();
}





var renderPosts = function() {
  const html = posts.map(function(post) {
    return "<div>" + "<h4>" + post.message + "</h4>" + "\n" + "<h4>" + "Posted by: " + post.name + "</h4>" + "\n" + "<input class='comment-message' placeholder='comment'><input class='comment-user' placeholder='user'><button id='comment'onclick='addComment()'>Submit</button>" + "</div>";
  }).join('');
  $('.posts').html(html)

};

var renderComments = function() {
    const commentHtml = comments.map(function(comment) {
    return "<div>" + "<p>" + comment.commenter + "</p>" + "\n" + "<ul>" + comment.message + "</ul>" + "</div>";
    });
  $('.comments').html(commentHtml);

}
