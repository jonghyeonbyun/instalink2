import styled from "styled-components";
import Typical from "react-typical";
import Luna from "assets/luna.png";
import Dimigo from "assets/dimigo.png";

const Text = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  z-index: 100;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  margin: 0;

  flex-direction: column;
  font-family: "Nanum Gothic Coding", monospace;
  letter-spacing: 1px;
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap");
  @media only screen and (max-width: 600px) {
    font-size: 26px;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 17px;
  font-weight: 300;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const LinkBox = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  width: 50vw;
  text-align: center;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.25);
  //box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  &:hover {
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
`;
const ImgBox1 = styled.div`
  background-image: url(${Luna});
  height: 50px;
  width: 50px;
  margin: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0;

  @media only screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;
const ImgBox2 = styled.div`
  background-image: url(${Dimigo});
  height: 50px;
  width: 50px;
  margin: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 0;

  @media only screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;
const ImgSec = styled.div`
  width: 50%;
  justify-content: center;

  display: flex;
`;
const Margin = styled.div`
  height: 20px;
`;

const Header = () => (
  <Text>
    <Typical
      steps={[
        "Hello?",
        1000,
        "I am Chaerong",
        1000,
        "I am",
        500,
        "I am a Designer",
        1000,
      ]}
      loop={Infinity}
      wrapper="p"
    />
    <Margin />
    <Link href="https://www.instagram.com/ii_chaerong2/" target="_blank">
      <LinkBox>Instagram</LinkBox>
    </Link>
    <Link href="https://asked.kr/aachaerong" target="_blank">
      <LinkBox>Asked</LinkBox>
    </Link>{" "}
    <Link href="https://blog.naver.com/co6042" target="_blank">
      <LinkBox>Blog</LinkBox>
    </Link>
    <Link
      href="https://www.facebook.com/profile.php?id=100015725411095"
      target="_blank"
    >
      <LinkBox>Facebook</LinkBox>
    </Link>
    <Link href="https://github.com/chaerong" target="_blank">
      <LinkBox>Github</LinkBox>
    </Link>
    <ImgSec>
      <ImgBox1 />
      <ImgBox2 />
    </ImgSec>
  </Text>
);

export default Header;
