import React from 'react'
import './signstyle.css'

export const SignInDesktop = () => {
    return (
        <div className="frame">
            <div className="group">
                <div className="text-wrapper">Sign today</div>
                <p className="do-you-already-have">
                    <span className="span">Do you already have account? </span>{' '}
                    <span className="text-wrapper-2">Login</span>
                </p>
                <p className="div">Select how do you want to sign in</p>
                <div className="atom-outlined-button">
                    <div className="text-button">Sign with Google</div>
                </div>
                <div className="atom-primary-button">
                    <div className="text-button-2">Sign with email</div>
                </div>
                <div className="group-2">
                    <img className="vector" src="img/vector-10.svg" />
                    <img className="img" src="img/vector-11.svg" />
                    <div className="text-wrapper-3">or</div>
                </div>
                <div className="atom-outlined-button-2">
                    <div className="text-button">Continue with Facebook</div>
                </div>
            </div>
        </div>
    )
}
