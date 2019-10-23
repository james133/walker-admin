import React from 'react'
import styled from "styled-components"
import ScrollToTopMount from "../../components/ScrollToTopMount"
// global common style
import { ClearFix } from "../../components/common-style"

const ProfileBox = styled(ClearFix)`
    position:relative;
`;
class UserProfile extends React.Component {
    render() {
        return (
            <ProfileBox>
                <ScrollToTopMount />
                <h3 className="long-content">个人资料</h3>
                <h3 className="long-content">个人资料</h3>
                <h3 className="long-content">个人资料</h3>
                <h3 className="long-content">个人资料</h3>
                <h3 className="long-content">个人资料</h3>
            </ProfileBox>
        )
    }
}

export default UserProfile
