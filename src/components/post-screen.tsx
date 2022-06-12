import { useGetAllPostQuery, useStorePostMutation } from "@/store/api/postApi";
import userApi from "@/store/api/userApi";
import { MutationActionCreatorResult } from "@reduxjs/toolkit/dist/query/core/buildInitiate";
import { useRef } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

const PostScreen = () => {
  const {
    data: posts = [],
    isFetching: isPostsFetching,
    refetch: refetchGetAllPost,
  } = useGetAllPostQuery({
    param: {
      limit: 7,
    },
  });

  const mutationRef = useRef<MutationActionCreatorResult<any> | null>(null);

  const [storePost, { isLoading: isStorePostLoading }] = useStorePostMutation();

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button variant="primary" className="mb-3" onClick={refetchGetAllPost}>
          Refetch
        </Button>
        <Button
          variant={isStorePostLoading ? "danger" : "primary"}
          className="mb-3 ms-2"
          disabled={isPostsFetching}
          onClick={() => {
            if (isStorePostLoading) {
              mutationRef.current?.abort();
              mutationRef.current = null;
              return;
            }

            mutationRef.current = storePost({
              id: 1,
              title: "Hello World",
              body: "Heyyy",
              userId: 1,
            });
          }}
        >
          {isStorePostLoading ? "Cancel" : "Store"}
        </Button>
        <Button
          variant="primary"
          className="mb-3 ms-2"
          onClick={() => {
            dispatch(
              userApi.util.invalidateTags([
                {
                  type: "User",
                  id: "LIST",
                },
              ])
            );
          }}
        >
          Refetch Users
        </Button>
      </div>
      {isPostsFetching && <p>Memuat post...</p>}
      {!isPostsFetching && (
        <ListGroup>
          {posts.map((post) => {
            return (
              <ListGroup.Item key={post.id}>
                <h4>{post.title}</h4>
                <small>{post.body}</small>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
};

export default PostScreen;
