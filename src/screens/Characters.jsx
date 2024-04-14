// import { useState, useEffect } from "react";
// import { getCharacters } from "../services/characters.js";
// import Character from "../components/Character.jsx";
// import "./Characters.css"

// function Characters() {
//   const [characters, setCharacters] = useState([]);

//   async function fetchCharacters() {
//     const allCharacters = await getCharacters();
//     setCharacters(allCharacters);
//   }

//   useEffect(() => {
//     fetchCharacters();
//   }, []);

//   return (
//     <div className="characters">
//       <h1 className="title">CHARACTERS</h1>
//       <div className="characters-container">
//         {characters.map((character) => (
//           <Character character={character} key={character._id} />
//         ))}
//       </div>
//       <img className="title-img" src="images/NEXUS-TITLE.png"/>
//     </div>
//   );
// }

// export default Characters;

import { useState, useEffect } from "react";
import { getProject, deleteProject } from "../../Services/project.js";
import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
import { getUserProfile } from "../../Services/userProfile";



function ProjectDetails() {
  const [project, setProject] = useState({});
    let { projectId } = useParams();
    let navigate = useNavigate();
  
    const fetchProject = async () => {
      const oneProject = await getProject(projectId);
      setProject(oneProject);
    };
  
    useEffect(() => {
      fetchProject();
    }, [projectId]);
  
    const handleDelete = async (id) => {
      await deleteProject(projectId);
      navigate("/feed");
    };
   return (
  <div className="my-project-options">
              <Link to={`/projects/${projectId}/edit`}>
                
                <button className="edit-the-project">EDIT</button>
              </Link>
              <button className="delete-the-project" onClick={handleDelete}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }


  function UserProfile({ myProfile }) {
    const [profile, setProfile] = useState(null);
    
    const { profileId } = useParams();
    
      useEffect(() => {
        const fetchProfile = async () => {
          try {
            const userProfile = await getUserProfile(profileId);
    setProfile(userProfile);
    return user.id === myProfile.id;
            });
    
     fetchProfile();
      }, [profileId, myProfile])
    const myOptions = (
        <>
          <Link className="settings-link" to={`/editprofile/${profile.id}`}>
            Edit Profile
          </Link>
          <Link className="settings-link" to="/signout">
            Sign Out
          </Link>
        </>
      );
    return (
    <div className="user-settings">
                      {profile.id === myProfile.id && (
     <div className="dropdown-content">{myOptions}</div>
     )}
                          </div>
     export default ProjectDetails;