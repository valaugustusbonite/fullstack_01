import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";
import { Post } from "../../../models/post";
import { StyledNewsfeedCard } from "../styles/NewsfeedCard.style";

interface NewsfeedCardProps {
  post: Post;
  onDelete?(index: number): void;
  index?: number;
  onOpen?(post: Post): void;
  titleHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  authorHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  contentBodyHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const NewsfeedCard: React.FC<NewsfeedCardProps> = ({ post, onDelete, index, onOpen, titleHandler, authorHandler, contentBodyHandler }) => {
  const [editing, setEditing] = React.useState(false);
  
  return editing ? 
  (
  <>
  <EditForm 
    post={post}
    titleHandler={titleHandler}
    authorHandler={authorHandler}
    contentBodyHandler={contentBodyHandler}
  /></>
  )  : (
    <>
      <StyledNewsfeedCard>
        <h1>{post.title}</h1>
        <h5>by: {post.author}</h5>
        <p>{post.content}</p>
        <Button onClick={() => setEditing(!editing)}>Edit</Button>
        <Button onClick={() => onDelete!(index!)}>Delete</Button>
      </StyledNewsfeedCard>
    </>
  );
}

const EditForm: React.FC<NewsfeedCardProps> = ({ post, titleHandler, authorHandler, contentBodyHandler, }) => (
  <>
    <StyledNewsfeedCard>
      <Input placeholder="Title" onChange={titleHandler} value={post?.title ?? ''} />
      <Input placeholder="Author" onChange={authorHandler} value={post?.author ?? ''} />
      <Textarea placeholder="What are your thoughts?" onChange={contentBodyHandler} value={post?.author ?? ''} />
      {/* <Button onClick={() => setEditing(!editing)}>Edit</Button>
      <Button onClick={() => onDelete!(index!)}>Delete</Button> */}
    </StyledNewsfeedCard>
    
  </>
)

export default NewsfeedCard;