import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const customLink = ({href,children}) => {
  const router = useRouter();

  let className = children.props.className || '';

  className = router.pathname === href ? `${className} selected` : '';
  
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
export default customLink;