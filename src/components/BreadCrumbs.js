import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const { pathname } = useLocation();
    const pathNames = pathname.split('/').filter(item => item);
    let breadCrumbPath = '';

    return (
        <div className='flex w-9/12 m-auto mt-8 breadCrumbs'>
            {pathNames.length > 0 && <Link to='/' className="linkColor">Home</Link>}
            {
                pathNames?.map((item, index) => {
                    breadCrumbPath += `/${item}`;
                    return (
                        index === pathNames.length - 1
                        ? <span key={item + index}>/ {item}</span>
                        : <span key={item + index}>/<Link to={breadCrumbPath} className="linkColor">{item}</Link></span>
                    )
                })
            }
        </div>
    )
}

export default BreadCrumbs;