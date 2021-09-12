import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/react";
import React from "react";
import { Post } from "../../../models/post";

interface FormProps {
  titleHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  authorHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  contentBodyHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  post: Post;
}

const CreatePostForm: React.FC<FormProps> = ({
  titleHandler,
  authorHandler,
  contentBodyHandler,
  post
}) => {


  React.useEffect(() => {
    if (post) {
      console.log(post.title);
      console.log('triggered');
    }

    console.log(post?.title);
    console.log('triggered');
  },[]);

  return (
    <>
      <Stack spacing={3}>
        <Input placeholder="Title" onChange={titleHandler}  value={post?.title ?? ''}/>
        <Input placeholder="Author" onChange={authorHandler} value={post?.author ?? ''}/>
        <Textarea placeholder="What are your thoughts?" onChange={contentBodyHandler} value={post?.author ?? ''}/>
      </Stack>
    </>
  );
}

export default CreatePostForm;