import styled from "styled-components";
import ImgSlider from "../../components/imageSlider";
import NewDisneyPlus from "../../components/newDisneyPlus";
import Originals from "../../components/originals";
import Recommended from "../../components/recommended";
import Trending from "../../components/trending";
import Viewers from "../../components/viewers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../../utils/firebase";
import { setMovies } from "../../utils/fetures/movie/movieSlice";
import { selectUserName } from "../../utils/fetures/user/userSlice";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const [recommends, setRcommends] = useState(["dsa"]);
  const [newDisneys, setNewDisneys] = useState(["dsa"]);
  const [originals, setOriginals] = useState(["dsa"]);
  const [trending, setTrending] = useState(["dsa"]);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
    const userCollectionRef = collection(db, "movies");
    const getMovies = async () => {
      const data = await getDocs(userCollectionRef);
      setRcommends(
        data.docs.map((doc) => {
          setTest(true);
          return doc.data().type === "recommend"
            ? { ...doc.data(), id: doc.id }
            : { id: "" };
        })
      );
      setOriginals(
        data.docs.map((doc) => {
          setTest(true);
          return doc.data().type === "original"
            ? { ...doc.data(), id: doc.id }
            : { id: "" };
        })
      );
      setNewDisneys(
        data.docs.map((doc) => {
          setTest(true);
          return doc.data().type === "new"
            ? { ...doc.data(), id: doc.id }
            : { id: "" };
        })
      );
      setTrending(
        data.docs.map((doc) => {
          setTest(true);
          return doc.data().type === "trending"
            ? { ...doc.data(), id: doc.id }
            : { id: "" };
        })
      );
    };
    getMovies();
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName, test]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewDisneyPlus />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
