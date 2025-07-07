const bars = document.querySelector(".bars");
const navbar = document.querySelector(".nav-bar");
bars.onclick = () => {
  const navBar = document.querySelector(".nav-items");
  navBar.classList.toggle("active");
};

window.onscroll = () => {
    this.scrollY > 1000 ? navbar.classList.add("stickyx") : navbar.classList.remove("stickyx");
  };

  // In-memory storage for comments, using post IDs as keys
// const commentsData = {
//     1: [], // Comments for post 1
//     2: [], // Comments for post 2
//     // Add more posts as needed
// };

// // Function to post a comment for a specific post
// function postComment(inputId, listId, postId) {
//     const commentInput = document.getElementById(inputId);
//     const commentText = commentInput.value.trim();

//     if (commentText) {
//         // Add comment to the appropriate post's comments array
//         commentsData[postId].push(commentText);
        
//         // Clear the input field
//         commentInput.value = "";
        
//         // Render comments below the post
//         renderComments(listId, commentsData[postId]);
//     }
// }

// // Function to render comments for a specific post
// function renderComments(listId, comments) {
//     const commentsList = document.getElementById(listId);
    
//     // Clear existing comments
//     commentsList.innerHTML = "";

//     // Render each comment
//     comments.forEach(comment => {
//         const commentElement = document.createElement("div");
//         commentElement.classList.add("comment");
//         commentElement.textContent = comment;
//         commentsList.appendChild(commentElement);
//     });
// }

// // Function to handle posting comments for individual posts
// function postComment(inputId, listId) {
//     const commentInput = document.getElementById(inputId);
//     const commentsList = document.getElementById(listId);
//     const commentText = commentInput.value.trim();

//     if (commentText) {
//         // Create a new comment element
//         const commentElement = document.createElement("div");
//         commentElement.classList.add("comment");
//         commentElement.textContent = commentText;
        
//         // Append the comment to the specific comments list
//         commentsList.appendChild(commentElement);
        
//         // Clear the input field
//         commentInput.value = "";
//     }
// }

// In-memory storage for comments, using post IDs as keys
const commentsData = {};

// Function to initialize all comment sections
function initCommentSections() {
    // Select all comment buttons for each post
    const commentButtons = document.querySelectorAll('.comment-btn');

    commentButtons.forEach(button => {
        button.addEventListener('click', function () {
            const postId = this.closest('.blog-post').getAttribute('data-post-id');
            const commentInput = this.closest('.comment-form').querySelector('.comment-input');
            const commentsList = this.closest('.post-comments').querySelector('.comments-list');
            postComment(postId, commentInput, commentsList);
        });
    });
}

// Function to handle posting comments
function postComment(postId, commentInput, commentsList) {
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Ensure an array exists for the post ID in commentsData
        if (!commentsData[postId]) {
            commentsData[postId] = [];
        }

        // Add comment to the appropriate post's comments array
        commentsData[postId].push(commentText);

        // Clear the input field
        commentInput.value = '';

        // Render comments below the post
        renderComments(postId, commentsList);
    }
}

// Function to render comments for a specific post
function renderComments(postId, commentsList) {
    // Clear existing comments
    commentsList.innerHTML = '';

    // Render each comment for the given postId
    commentsData[postId].forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.textContent = comment;
        commentsList.appendChild(commentElement);
    });
}

// Initialize comment sections on page load
document.addEventListener('DOMContentLoaded', initCommentSections);


//codeeeee
document.querySelectorAll('.comment-input').forEach(input => {
    input.addEventListener('keyup', function(event) {
      // Check if the Enter key was pressed
      if (event.key === 'Enter') {
        const commentText = input.value.trim();
        const postId = input.getAttribute('data-post-id');
        
        if (commentText) {
          // Create a new comment element
          const commentElement = document.createElement('div');
          commentElement.className = 'comment';
          commentElement.textContent = commentText;

          // Add the new comment to the top of the comments section
          const commentsSection = document.getElementById('comments-' + postId);
          commentsSection.insertBefore(commentElement, commentsSection.firstChild);

          // Clear the input field
          input.value = '';
        }
      }
    });
  });