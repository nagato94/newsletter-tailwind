import ArticlesList from "./components/ArticlesList/ArticlesList";
import Header from "./components/Header/Header";
import { useState } from "react";
import Form from "./components/Form/Form";
const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <>
      <Header user={user} />
      {hasUser && <ArticlesList />}
      {hasUser || <Form onSubmit={setUser} />}
    </>
  );
};

export default App;
