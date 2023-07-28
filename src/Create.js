import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Fardeen");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const setBodyHandler = (e) => {
    setBody(e.target.value);
  };
  const setAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const blog = {
      title,
      body,
      author,
    };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      // console.log("new blog added");
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={setTitleHandler}
        />
        <label htmlFor="body">Blog Body</label>
        <textarea
          id="body"
          required
          value={body}
          onChange={setBodyHandler}
        ></textarea>
        <label htmlFor="author">Blog author</label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={setAuthorHandler}
        >
          <option value="Fardeen">Fardeen</option>
          <option value="Ahamed">Ahamed</option>
          <option value="deen">Deen</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
