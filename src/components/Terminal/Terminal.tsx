import React, { ReactNode } from 'react'
import "./style.css"

interface TerminalProps {
    element: ReactNode;
}

export default function Terminal({element}: TerminalProps) {
    return (
        <div className='terminal-container'>
            <div className="terminal-top">
                <div style={{color:"white"}}>Terminal</div>
                <div>Output</div>
                <div>Problems</div>
                <div>Debug Console</div>
            </div>
            <div className="terminal-body">
                {element}           
            </div>
        </div>
    )
}
