import {Link} from "react-router-dom";

export default function Signup() {

    const onSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">
                        Sign up for free
                    </h1>
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirmation"/>
                    <button className="btn btn-block">Sign Up</button>

                    <p className="message">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
