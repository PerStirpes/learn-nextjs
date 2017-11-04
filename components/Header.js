import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <nav>
  <div>
    <Link href="/">
      <button style={linkStyle}>Home</button>
    </Link>
  </div>

  <div>
 
    <Link href={{ pathname: '/about', query: { name: 'MBC' } }}>
      <a style={linkStyle}>About me</a>
    </Link>
  </div>
 
 <div>
  <Link href="/portfolio">
      <a style={linkStyle}>Portfolio</a>
    </Link>
   
   <Link href="/blog">
      <a style={linkStyle}>blog</a>
    </Link>
  </div>
</nav>
);

export default Header;
