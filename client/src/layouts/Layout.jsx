import { Link } from 'react-router-dom';
import "./Layout.css";

export default function Layout(props) {
	const { currentUser, handleLogout, children } = props;
	return (
		<div>
			<header>
				<h1>RUNLAB</h1>
				{currentUser ? (
          <>
            <p className="current-user">{currentUser.username}</p>
						<button className="button-login" onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link to='/login'>Login</Link>
				)}
				{/* <hr /> */}
        {
          currentUser && 
          <>
            <Link to='/'></Link>
            <Link to='/'></Link>
          </>
        }
			</header>
			{children}
		</div>
	);
}