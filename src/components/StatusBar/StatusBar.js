import React, {Component} from "react";
import './StatusBar.css'
import {Avatar} from "@mui/material";
import statusimg from '../../images/pp2.png'
import uploadImage from '../../images/statusadd.png'

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: []
        }
    }
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "Imaisen17",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "111",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "yty",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "23122231333",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "233",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "3211",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "uyt",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "iiii",
                "imageURL": "../../images/pp2.png"
            },
            {
                "username": "32123",
                "imageURL": "../../images/pp2.png"
            }
        ]
        this.setState({statusList: data})
    }

    render() {
        return (
            <div>
                <div className={"statusbar_container"}>
                    <img className={"statusbar_upload"} src={uploadImage} width={"55px"} height={"55px"}/>
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className={"status"}>
                                <Avatar className={"statusbar_status"} src={statusimg}></Avatar>
                                <div className={"statusbar_text"}>{item.username}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default StatusBar;