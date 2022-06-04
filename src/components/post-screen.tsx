import { useGetAllPostQuery } from "@/store/api/postApi";
import { useMemo } from "react";
import { Button, ListGroup } from "react-bootstrap";

const PostScreen = () => {
  const {
    data: posts = [],
    isFetching: isPostsFetching,
    refetch: refetchGetAllPost,
  } = useGetAllPostQuery();

  const listPosts = useMemo(() => {
    const result = [...posts];
    result.splice(5, posts.length);

    return result;
  }, [posts]);

  return (
    <div>
      <Button variant="primary" className="mb-3" onClick={refetchGetAllPost}>
        Refetch
      </Button>
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
