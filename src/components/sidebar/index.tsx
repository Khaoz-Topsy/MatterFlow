import React from 'react';

interface IProps {
    guid: string;
}

export const Sidebar = (props: IProps) => {
    const onClick = () => {
        document.querySelector(".sidebar")?.classList.toggle("open");
        document.querySelector(".sidebar-toggle")?.classList.toggle("open");
    }
    return (
        <>
            <img className="sidebar-toggle" style={{ width: '50px' }} src="assets/img/menu.webp" onClick={onClick} alt="menu" />
            <div className="sidebar">
                <div className="content">
                    <div className="sidebar-header">
                        <p>Current Seed<br /><span style={{ fontWeight: 'bold' }}>{props.guid}</span></p>
                        <hr />
                        {/* <input value={props.guid} /> */}
                        <small>This key is unique to you, it changes the way the website is loaded for you. This page is most likely unique to you</small>
                    </div>
                    {/* <div className="sidebar-body">
                        <ul>
                            <li>Home</li>
                            <li>Test</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    );
}