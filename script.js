let blogs = [];

document.getElementById('blogForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const status = document.getElementById('status').value;

  blogs.push({ title, content, status });
  document.getElementById('blogForm').reset();
  displayBlogs();
});

function displayBlogs() {
  const list = document.getElementById('blogList');
  list.innerHTML = '';
  blogs.forEach((blog, i) => {
    list.innerHTML += `<li><b>${blog.title}</b> (${blog.status})<br>${blog.content}<br>
      <button onclick="deleteBlog(${i})">Delete</button></li>`;
  });
}

function deleteBlog(i) {
  blogs.splice(i, 1);
  displayBlogs();
}
