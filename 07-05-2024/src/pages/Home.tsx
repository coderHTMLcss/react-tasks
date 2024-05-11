import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to="/about">To About</Link>
            <Link to="/contacts">To Contacts</Link>
            <Link to="/team">To Team</Link>
        </>
    )
};

export default Home;