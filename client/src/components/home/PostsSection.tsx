import React, { ReactElement } from 'react';

const PostsSection = (): ReactElement => (
    <div id='posts-section'>
        <div className='post'>
            <div className='post-head'>
                <div className='post-author'>Cindy Ebirim</div>
                <div className='post-timestamp'>25 minutes ago</div>
            </div>
            <div className='post-body'>
                We the students of Anchor University have pleaded with our superiors to allow the usage of phones. What
                else can we do?Multiple letters have been written, they need to realize that we need our smart phones to
                keep up with our acadamics. Goddamit.
            </div>
            <div className='post-tags'>#phone-usage #protest</div>
        </div>
        <div className='post'>
            <div className='post-head'>
                <div className='post-author'>DaGhost</div>
                <div className='post-timestamp'>3 hours ago</div>
            </div>

            <div className='post-body'>
                Anyone else thinks anchor caf needs to upgrade their food quality? most times its below standard and
                just dissapppointing, the staffs are sluggish to attend to you most of the times... does anyone else
                feel the same way or is it just me?
            </div>
            <div className='post-tags'>#food #anchor caf #jolly caf</div>
        </div>
    </div>
);

export default PostsSection;
