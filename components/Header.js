import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About me</a>
    </Link>
    <Link href="/portfolio">
      <a style={linkStyle}>Portfolio</a>
    </Link>
    <Link href="/blog">
      <a style={linkStyle}>blog</a>
    </Link>
  </div>
);

export default Header;
