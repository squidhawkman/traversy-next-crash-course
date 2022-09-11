import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    const x = 2;
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>Yes. All the web dev news.</p>
            {/* styling from within the component, might want to do this if you had conditional styles */}
            {/* <style jsx>
                {`
                .title {
                    color: ${x > 3 ? 'blue' : 'red'};
                }
                `}
            </style> */}
    </div>
  )
}

export default Header