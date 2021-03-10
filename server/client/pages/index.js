import '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcom to the Nextjs client of my boilerplate</h1>
      <button>
        <Link href="/auth/google/" as="/auth/google/">
          <a>Visit /team</a>
        </Link>
      </button>
    </div>
  );
}

/*

NOTE: http://localhost:5000/auth/google , will not work in production : 

- Solution : 

*/
