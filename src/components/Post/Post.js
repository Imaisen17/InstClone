import React, {Component} from "react";
import './Post.css'
import {Avatar} from "@mui/material";
import post_image from '../../images/post.jpg'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => { //API backend
        let data = [
            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123123",
                "description": "Tetsttsts"
            },

            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123123",
                "description": "Tetsttsts"
            },

            {
                "username": "ASD",
                "commentId": "1234",
                "timeStamp": "123123",
                "description": "Tetsttsts"
            }
        ];
        this.setState({commentList: data})

    }

    render() {
        return (
            <div className={"post_container"}>
                {/*Header*/}
                <div className={"post_header"}>
                    <Avatar className={"post_image"} src={this.props.profileImage}></Avatar>
                    <div className={"post_username"}>{this.props.username}</div>
                </div>
                {/*Image*/}
                <div>
                    <img src={this.props.postImage} width={"615px"}/>
                </div>
                {/*Analytics*/}
                <div>
                    <div style={{"marginLeft": "10px"}}>
                        <img src={love} className={"post_reactimage"}/>
                        <img src={comment} className={"post_reactimage"}/>
                        <img src={share} className={"post_reactimage"}/>
                    </div>
                    <div style={{"fontWeight": "bold", "marginLeft": "20px"}}>{this.props.likes} likes</div>
                </div>
                {/*Comment section*/}
                <div>
                    {
                        this.state.commentList.map((item, index)=>(
                            <div className={"post_comment"}>{item.username}: {item.description}</div>
                        ))
                    }
                    <input className={"post_comment_box"} text={"text"} placeholder={"Add a comment"}/>

                </div>
            </div>
        );
    }
}

export default Post;