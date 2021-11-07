import { useEffect, useState } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import ListOfMemes from "../components/ListOfMemes";
import { getInfoUser as getInfoUserService } from "../services/auth";

const Banner = styled.section`
  width: 100%;
  text-align: center;
  min-height: 400px;
  background-image: url(https://images.pexels.com/photos/4791990/pexels-photo-4791990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Memes = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 3rem auto;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 2rem auto;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.font.sizeHeading};
`;

function Profile(props) {
  const username = props.match.params.username;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getInfoUser();
  }, [username]);

  const getInfoUser = async () => {
    const data = await getInfoUserService(username);
    setUserData(data);
  };

  console.log(userData);

  if (!userData) return <span>Loading...</span>;

  return (
    <Layout>
      <Banner>
        <Img
          src={
            userData.avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt={userData.username}
        />
        <h1>{userData.username}</h1>
        <p>{userData._id}</p>
      </Banner>

      <Memes>
        <Title>Memes</Title>

        <ListOfMemes
          memes={[
            { id: 0, url: "https://i.imgflip.com/1e7ql7.jpg", name: "Example" },
          ]}
        />
      </Memes>
    </Layout>
  );
}

export default Profile;
