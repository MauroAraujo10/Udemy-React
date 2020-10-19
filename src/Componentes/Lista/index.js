import React, { Component } from 'react';
import { FaUserAlt, FaHeart, FaRegComment } from "react-icons/fa";

class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    id: 1,
                    username: 'Maurin',
                    curtidas: 123,
                    comentarios: 1500
                },
                {
                    id: 2,
                    username: 'Iemini',
                    curtidas: 12,
                    comentarios: 1750
                },
                {
                    id: 3,
                    username: 'Zé',
                    curtidas: 615,
                    comentarios: 7750
                }
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.feed.map((user) => {
                    return (
                        <div id={user.id} style={{marginLeft: "10px"}}>
                            <h4>
                                <FaUserAlt size={16} />
                                <span style={{marginLeft: "10px"}}>
                                    {user.username}
                                </span>
                            </h4>
                            <h6>
                                <FaHeart size={16} color="#F00"/>
                                <span>
                                    {user.curtidas}
                                </span>
                                
                                <FaRegComment size={16} color="#00F" style={{marginLeft: "10px"}}/>
                                <span>
                                    { user.comentarios}
                                </span>
                            </h6>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }

}

export default Lista;