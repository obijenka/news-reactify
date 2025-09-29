import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <p  style={{marginTop: "20px"}}>Привет, любимка! Люблю тебя</p>
      </div>
    </>
  );
}
