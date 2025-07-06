import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className='subscription'>
            <div className="plan">
                <h2>Basic Plan</h2>
                <div className="price">
                    <h1>500$</h1>
                    <p>500$ per month will Charge 6000$/ year</p>
                </div>
                <ul>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                </ul>
                <button>Choose Plan</button>
            </div>
            <div className="plan -primary">
                <h2>Standard Plan</h2>
                <div className="price">
                    <h1>24$</h1>
                    <p>24$ per month will Charge 280$/ year</p>
                </div>
                <ul>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                </ul>
                <button>Choose Plan</button>
            </div>
            <div className="plan">
                <h2>Unlimited Plan</h2>
                <div className="price">
                    <h1>96$</h1>
                    <p>96$ Once will Charge 96$/ year</p>
                </div>
                <ul>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                    <li><CircleCheckBig /> <span>Big Brown Fox</span></li>
                </ul>
                <button>Choose Plan</button>
            </div>
        </div>
    )
}

export default page