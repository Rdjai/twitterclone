import React from 'react'
import Navbar from './Navbaar'

const MainContent = () => {
    return (
        <div className='MainContent'>
            <Navbar />
            <div className="column-item">
                <h3>Column One</h3>
                <p>
                    This is the content for the first column. Flexbox makes it easy to align and
                    distribute items in a row.
                </p>
                <p>
                    This paragraph ensures there's enough content to demonstrate vertical
                    scrolling if the height is constrained. You'll see a scrollbar appear on the
                    right side of this column if the content exceeds its `max-height`.
                </p>
                <p>More content here to push the limits!</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>Final line of content.</p>
            </div>
        </div>
    )
}

export default MainContent
