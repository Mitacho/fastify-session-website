import { api } from "./api";
import "./App.css";

async function login() {
  try {
    const { data } = await api.post("/login", {
      username: "admin",
    });

    console.log(data);
  } catch (error: any) {
    console.error(error.data);
  }
}

async function me() {
  try {
    const { data } = await api.get("/me");

    console.log(data);
  } catch (error: any) {
    console.error(error.data);
  }
}

async function logout() {
  try {
    const { data } = await api.post("/logout");

    console.log(data);
  } catch (error: any) {
    console.error(error.data);
  }
}

function App() {
  return (
    <div className="app">
      <button onClick={login}>login</button>
      <button onClick={me}>me</button>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default App;
