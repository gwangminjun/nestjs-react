import React from "react";
import logoTriangle from '../static/img/Switch-triangle.png';

export default function SideMenu(){
    return (
        <div className="bg-cyan-50 h-full">
            <div className="bg-cyan-600	 flex justify-start content-center decoration-white">
                <img className="w-24 h-24" src={logoTriangle}/>
                <div className="">Switch Project</div>
            </div>
            <div>

            </div>
        </div>
    );
}