import { useGetAllPostQuery, useStorePostMutation } from "@/store/api/postApi";
import { useMemo } from "react";
import { Button, ListGroup } from "react-bootstrap";

const PostScreen = () => {
  const {
    data: posts = [],
    isFetching: isPostsFetching,
    refetch: refetchGetAllPost,
  } = useGetAllPostQuery();

  const [storePost, { isLoading: isStorePostLoading }] = useStorePostMutation();

  const listPosts = useMemo(() => {
    const result = [...posts];
    result.splice(5, posts.length);

    return result;
  }, [posts]);

  return (
    <div>
      <div>
        <Button variant="primary" className="mb-3" onClick={refetchGetAllPost}>
          Refetch
        </Button>
        <Button
          variant="primary"
          className="mb-3 ms-2"
          disabled={isStorePostLoading}
          onClick={() => {
            storePost({
              id: 1,
              title: "Hello World",
              body: "Heyyy",
              userId: 1,
            });
          }}
        >
          Store
        </Button>
      </div>
      {isPostsFetching && <p>Memuat post...</p>}
      {!isPostsFetching && (
        <ListGroup>
          {listPosts.map((post) => {
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
