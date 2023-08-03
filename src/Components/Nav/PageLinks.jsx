// import Nav from "react-bootstrap/Nav";
import { useToggleLink } from "../../hooks/useToggleLink";
import { Link, animateScroll as scroll } from "react-scroll";
const PageLinks = ({ href, text, itemClass, id }) => {
  const { state, ToggleActiveLink } = useToggleLink();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      console.log("first");
    }
  };

  // console.log(() => (scroll.scrollMore(100) > 100 ? { color: "red" } : ""));
  // const onUpdateActiveLink = (e) => {
  //   setActiveLink(e.currentTarget.id);
  // };
  return (
    <li className="nav-item jello-horizontal text-shadow-pop-left">
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
        duration={500}
        onScroll={() => handleScroll}
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
