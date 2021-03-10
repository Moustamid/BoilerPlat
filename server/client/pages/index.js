import '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <img className="Next" src="/next.svg" />
      <h1>Welcom to the Nextjs client of my boilerplate</h1>

      <div class="google-btn">
        <div class="google-icon-wrapper">
          <Link href="/auth/google/" as="/auth/google/">
            <a>
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </a>
          </Link>
        </div>
        <p class="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </div>
  );
}
