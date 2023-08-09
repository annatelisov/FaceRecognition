import React from 'react';


const Navigation = ({onRouteChange, isSignedin}) => {
        if(isSignedin){
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end', margin: '32px', fontSize: '20px'}}>
                    <p onClick={() => onRouteChange('signout')} className="link pointer">Sign out</p>
                </nav>
            );
        }
        else{
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end', margin: '32px', fontSize: '20px'}}>
                    <p onClick={() => onRouteChange('register')} className="link pointer" style={{ marginRight: '16px'}}>Register</p>
                    <p onClick={() => onRouteChange('signin')} className="link pointer">Sign in</p>
                </nav>
            );
        }
}

export default Navigation;