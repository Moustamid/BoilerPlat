import Link from 'next/link';

const Temperary = () => {
  return (
    <div>
      <div className="container">
        <img className="Next" src="/next.svg" />
        {/* Google btn  Start */}
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <Link href="/auth/google/" as="/auth/google/">
              <a>
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
              </a>
            </Link>
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        {/* Google btn ends */}
      </div>
    </div>
  );
};

export default Temperary;
