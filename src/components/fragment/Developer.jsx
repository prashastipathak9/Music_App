import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developers</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>JMPP</h3>
                        <p>Web developer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>Computer Science and Engineering Students at GEHU, Bhimtal.</p>
                    <p>Graduating in 2023 and looking for a responsible position to gain practical knowledge</p>
                    <p>We love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever we want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com"} title={""}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com"}  title={""}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com"}  title={""}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com"}  title={""}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={""}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;