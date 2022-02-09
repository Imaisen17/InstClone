import React, {Component} from "react";
import './LoginPage.css'
import {Grid} from "@mui/material";
import inst_image from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png'

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={"loginpage_main"}>
                            <div>
                               <img src={inst_image} width={454} />
                            </div>
                            <div>
                                <div className={"loginpage_rightcomponent"}>
                                    <img className={"loginpage_logo"} src={insta_logo}/>
                                    <div className={"loginpage_signin"}>
                                        <input className={"loginpage_text"} type={"text"} placeholder={"Phone number, username, or email"}/>
                                        <input className={"loginpage_text"} type={"password"} placeholder={"Password"}/>
                                        <button className={"login_button"}>Log in</button>

                                        <div className={"login_ordiv"}>
                                            <div className={"login_devidor"}></div>
                                            <div className={"login_or"}>OR</div>
                                            <div className={"login_devidor"}></div>
                                        </div>
                                        <div className={"login_fb"}><img src={fb} width={"15px"} style={{"marginRight":"5px"}}/>Login with Facebook</div>
                                        <div className={"login_forgot"}>Forgot password</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default LoginPage;