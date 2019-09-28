import { withRouter } from "next/router";

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = props => {
  const { children, router, href, className } = props;
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${router.pathname === href && "active"}`}
    >
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
