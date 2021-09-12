import React from "react";
import { Post } from "../../../models/post";
import NewsfeedCard from "../components/NewsfeedCard";

interface PostList {
  posts: Post[];
  onDelete(index: number): void;
  onOpen(): void;
  titleHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  authorHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  contentBodyHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const NewsfeedScreen: React.FC<PostList> = ({ posts, onDelete, onOpen, titleHandler, authorHandler, contentBodyHandler}) => {
  
  React.useEffect(() => {
    //console.log(posts);

    return;
  }, [posts])

  return posts.length > 0 ? (
    <>
      <ul>
        {posts.map((post, index) => {
          return <li key={index}>
            <NewsfeedCard 
              post={post} 
              onDelete={onDelete} 
              index={index} 
              onOpen={onOpen} 
              titleHandler={titleHandler}
              authorHandler={authorHandler}
              contentBodyHandler={contentBodyHandler}
            />
          </li>
        })}
      </ul>
    </>
  ) : <><h1>No posts yet</h1></>;
}

export default NewsfeedScreen;