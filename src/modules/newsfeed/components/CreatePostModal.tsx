import { 
  Input, 
  Stack, 
  Textarea, 
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  Button,
  useDisclosure,
  ButtonGroup
} from "@chakra-ui/react";
import React from "react";
import { Post } from "../../../models/post";
import CreatePostForm from "./CreatePostForm";

interface FuncProps {
  titleHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  authorHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  contentBodyHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  onSubmit(): void;
  isOpen: boolean;
  onOpen(post: Post): void;
  onClose(): void;
  post: Post;
}

const CreatePostModal: React.FC<FuncProps> = ({
  titleHandler,
  authorHandler,
  contentBodyHandler,
  onSubmit,
  isOpen,
  onClose,
  post,
}) => {
  //const postContainer = React.useRef(post);
  

  const onFormSubmit = () => {
    onSubmit();
    onClose();
  };


  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Container>
            <CreatePostForm 
              titleHandler={titleHandler}
              authorHandler={authorHandler}
              contentBodyHandler={contentBodyHandler}
              post={post}
            />
          </Container>
          </ModalBody>

          <ModalFooter>
          <ButtonGroup variant="outline" spacing="6">
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="blue" onClick={onFormSubmit}>Save</Button>
          </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreatePostModal;