import react from 'react';
import ReactDOM, { render } from 'react-dom';

export default function Foot() {
    return (
        <footer className="footer bg-dark navbar navbar-expand navbar-dark" style={{
        position: "fixed",bottom: '0',
        width: '100%',
        height: '60px',
        'line-height': '60px'
        }}>
            <div className="container">
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    );   
}
