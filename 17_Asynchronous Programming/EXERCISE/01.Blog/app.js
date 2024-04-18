function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog/';
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const selectPost = document.getElementById('posts');
    const viewPostButton = document.getElementById('btnViewPost');
    const postTitle = document.getElementById("post-title");
    const postBodyParagraph = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    loadPostsButton.addEventListener('click', loadAllPosts);
    viewPostButton.addEventListener('click', loadPostWithComments);

    let allPosts = {};
    let allComments = {};

    function loadAllPosts(e) {
        e.preventDefault();

        fetch(baseUrl + 'posts')
            .then(res => {
                return res.json();
            })
            .then(data => {
                allPosts = data;
                loadPostsAsOptions(allPosts);
            })
            .catch(err => console.log(err));
    }

    function loadPostWithComments(e) {
        e.preventDefault();

        fetch(baseUrl + 'comments')
            .then(res => res.json())
            .then(data => {
                postBodyParagraph.innerText = "";
                postTitle.innerText = "";

                commentsList.innerHTML = "";
                const postId = selectPost.value;
                postBodyParagraph.textContent = allPosts[postId].body;

                postTitle.textContent = allPosts[postId].title;

                const filteredComments = Object.values(data)
                    .filter(value => value.postId === postId);

                for (const comment of filteredComments) {
                    const li = document.createElement('li');
                    li.textContent = comment.text;
                    li.id = comment.id;
                    commentsList.appendChild(li);
                }
            })
            .catch(err => console.log(err));

    }

    function loadPostsAsOptions(allPosts) {
        selectPost.innerHTML = "";

        for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement('option');

            option.value = postId;
            option.innerText = postObj['title'];
            selectPost.appendChild(option);
        }
    }
}

attachEvents();