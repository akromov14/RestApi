import React from 'react'

const Dashboard = (props) => {

    const handleLogout = () => {
        props.history.push('/login')
    }

    return (
        <div>
            Welcome User<br/><br/>
            <input type="button" value="Logout" onClick={handleLogout} />
        </div>
    )
}

export default Dashboard;
