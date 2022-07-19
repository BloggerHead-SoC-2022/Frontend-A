import Button from 'react-bootstrap/Button';
import './card.css';
function CreatePost() {
  return (
    <div class="navbar navbar-dark c" aria-label="Dark offcanvas navbar">
    <div class="container-fluid">
      <p class="navbar-brand ">Personal Blogs</p>
      <Button  variant="flat" size="xl">
         Create New Post
       </Button>
      
  </div>
 </div>
  );
}

export default CreatePost;