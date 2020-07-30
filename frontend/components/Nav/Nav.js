import Link from '../Link';
import './nav.css';

const Nav = () => {
  const menuItems = [
    { path: '/', name: 'What we do' },
    { path: '', name: 'Who we are' },
    { path: '', name: 'Contact Us' },
    { path: '', name: 'Hire Us', custom: true },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item, key) => (
          <li
            key={key}
            className={item.custom ? 'btn btn-small custom-item-menu' : ''}
          >
            <Link href={item.path}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
