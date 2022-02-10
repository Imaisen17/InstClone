import React, {Component} from "react";
import './MainPage.css'
import Post from "../Post/Post";
import uploadImage from '../../images/upload1.png'

class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            postArray:[]
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost=()=>{ //API
        let data=[
            {
               "postId":"123",
                "username":"username",
                "postImageURL":"https://st2.depositphotos.com/1258191/6689/i/600/depositphotos_66890813-stock-photo-online-shopping-website.jpg",
                "timeStamp":"123132",
                "likes":"1234",
            },
            {
                "postId":"123",
                "username":"username",
                "postImageURL":"https://st2.depositphotos.com/1258191/6689/i/600/depositphotos_66890813-stock-photo-online-shopping-website.jpg",
                "timeStamp":"123132",
                "likes":"1234",
            },
            {
                "postId":"123",
                "username":"username",
                "postImageURL":"https://st2.depositphotos.com/1258191/6689/i/600/depositphotos_66890813-stock-photo-online-shopping-website.jpg",
                "timeStamp":"123132",
                "likes":"1234",
            },
            {
                "postId":"123",
                "username":"username",
                "postImageURL":"https://st2.depositphotos.com/1258191/6689/i/600/depositphotos_66890813-stock-photo-online-shopping-website.jpg",
                "timeStamp":"123132",
                "likes":"1234",
            }
        ]
        this.setState({postArray: data})
    }

    render() {
        return(
            <div>
                <div style={{"textAlign":"center", "margin":"10px"}}>
                    <img className={"mainpage_uploadicon"} src={uploadImage}/>
                </div>
                {
                   this.state.postArray.map((item, index)=>(
                        <Post id ={item.postId} username={item.username} postImage={item.postImageURL} likes={item.likes} />
                    ))
                }
            </div>
        );
    }
}

export default MainPage ;