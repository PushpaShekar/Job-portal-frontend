import { useAuth } from "../context/AuthContext"
export default function Home() {
    const { user } = useAuth() 
    console.log('home', user)
    return (
        <div>
            <h2>Home Component</h2>
            { user && user.isLoggedIn ? (<p> User loggedin </p>) : (<p> Welcome {user.account && user.account.username} </p>)}
        </div>
    )
} 

// import { useAuth } from "../context/AuthContext";

// export default function Home() {
//     const { user } = useAuth();
//     console.log('home', user);

//     return (
//         <div>
//             <h2>Home Component</h2>
//             {user && user.isLoggedIn ? (
//                 <p>Welcome {user.account && user.account.username}</p>
//             ) : (
//                 <p>User not logged in</p>
//             )}
//         </div>
//     );
// }
