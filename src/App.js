import React from "react";
import Layout from "./components/layout";

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img src="https://avatars.githubusercontent.com/u/106115194?v=4" alt="Avatar of user"/>
          <h1>André Oliveira</h1>
          <h3>Username:</h3>
          <span>Andre-coder365</span>
          <div>
            <div>
            <h4>Followers</h4>
            <span>5</span>
            </div>
            <div>
            <h4>Starreds</h4>
            <span>5</span>
            </div>
            <div>
            <h4>Followings</h4>
            <span>5</span>
            </div>            
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
