// import Nav from "react-bootstrap/Nav";
import { useToggleLink } from "../../hooks/useToggleLink";
import { Link } from "react-scroll";
const PageLinks = ({ href, text, itemClass, id }) => {
  const { state, ToggleActiveLink } = useToggleLink();
  // const onUpdateActiveLink = (e) => {
  //   setActiveLink(e.currentTarget.id);
  // };
  return (
    <li className="nav-item">
      {" "}
      <Link
        to={href}
        id={id}
        href={href}
        className={state ? "active" + itemClass : itemClass}
        onClick={ToggleActiveLink}
        spy={true}
        smooth={true}
        offset={-100}
        duration={400}
      >
        {text}
      </Link>
    </li>
  );
};

{
  /* <Link className="test6" to="anchor" > */
}
export default PageLinks;
