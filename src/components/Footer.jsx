import { FOOTER_LINKS } from "../data/footerLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center w-full py-4 dark:bg-gray-900 bg-slate-400">
      <img
        src="https://res.cloudinary.com/dbinlquvz/image/upload/v1708529917/Proyecto_11/logo_v8mgdf.svg"
        alt="Logo Disney"
        className=" w-28"
      />
      <div className="py-4">
        <nav>
          <ul className="flex flex-wrap gap-4 justify-center items-center text-sm font-medium">
            {FOOTER_LINKS.map(({ id, name, link }) => (
              <li className="hover:underline cursor-pointer" key={id}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="text-xs">© Disney. Practice made with 🔥</p>
    </footer>
  );
};

export default Footer;
