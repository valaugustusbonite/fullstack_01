import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import React from "react";
import { Post } from "../../../models/post";
import CreatePostModal from "../components/CreatePostModal";
import NewsfeedScreen from "./NewsfeedScreen";

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [post, setPost] = React.useState<Post>({
    title: "",
    content: "",
    author: ""
  });
 
  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => setPost({...post, title: e.target.value});
  const handleAuthor: React.ChangeEventHandler<HTMLInputElement> = (e) => setPost({...post, author: e.target.value});
  const handleContentBody: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => setPost({...post, content: e.target.value});

  const onSubmit = () => {
    setPosts([...posts, post]);
  }

  const deletePost = (index: number): void => {
    let newList = posts.filter((post: Post) => posts.indexOf(post) !== index);
    setPosts(newList);
  }

  React.useEffect(() => {
    const data = localStorage.getItem('posts');
    
    if(data) {
      setPosts(JSON.parse(data));
    }

    return;
  }, [])

  React.useEffect(() => {


    localStorage.setItem('posts', JSON.stringify(posts));

  }, [posts]);

  return (
    <>
      <div>
        {/* <h1>Welcome to Weddit! :D</h1> */}
        <Button onClick={onOpen}>Write a post!</Button>
        <CreatePostModal
          titleHandler={handleTitle}
          authorHandler={handleAuthor}
          contentBodyHandler={handleContentBody}
          onSubmit={onSubmit}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          post={post}
        />
        <NewsfeedScreen
          posts={posts}
          onDelete={deletePost}
          onOpen={onOpen}
          titleHandler={handleTitle}
          authorHandler={handleAuthor}
          contentBodyHandler={handleContentBody}
        />
      </div>
    </>
  );
}

export default Home;