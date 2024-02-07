import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function GithubProfile() {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const username = useLocation().pathname.split(":")[1];
  console.log(useParams());
  console.log(useNavigate());

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(
        (data) => {
          setProfile(data);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          setHasError(true);
        },
      );
    // .catch((error) => {
    //   console.log(error)
    //   setIsLoading(false)
    //   setHasError(true)
    // })
    // const getUser = async () => {
    //   try {
    //     const response = await fetch(`https://api.github.com/users/${username}`)
    //     const data = await response.json();
    //     setProfile(data)
    //     setIsLoading(false)
    //   } catch (error) {
    //     console.log(error)
    //     setIsLoading(false)
    //     setHasError(true)
    //   }
    // }
    // getUser()
  }, [username]);

  if (hasError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <h1>GithubProfile for {profile.name}</h1>;
}

// GithubProfile.propTypes = {
//   username: PropTypes.string
// }
