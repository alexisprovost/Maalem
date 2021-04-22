import React from 'react';

export default function Foot() {
    return (
        <footer className="footer bg-dark navbar navbar-expand navbar-dark" style={{
        "z-index":"2",
        position: "fixed",bottom: '0',
        width: '100%',
        height: '60px',
        'lineHeight': '60px'
        }}>
            <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    );   
}
