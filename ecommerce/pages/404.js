import Link from "next/Link";

const error = () => {
  return (
    <div className="container">
      <p> Error, page nor found</p>

      <Link href="/">
        <a> Click here for homepage</a>
      </Link>
    </div>
  );
};

export default error;
