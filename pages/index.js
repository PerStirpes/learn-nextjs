import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>About Page</button>
    </Link>
    <p>Hello Next.js</p>
    Click{' '}
    <Link href="/about">
      <a>here</a>
    </Link>{' '}
    to read more
  </div>
);

export default Index;
//
// import Link from 'next/link';
//
// export default () => (
//   <div>
//     Click{' '}
//     <Link href="/about">
//       <a>here</a>
//     </Link>{' '}
//     to read more
//   </div>
// );
