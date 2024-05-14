import type { ReactLinkItemProps } from "@/util/interface.ts";

const LinkItem = (props: ReactLinkItemProps) => {
  const { currentPath, href, label, customStyle } = props;

  return currentPath === href ? (
    <a
      href={href}
      aria-current="page"
      className={`w--current ${
        customStyle ? customStyle : "dropdown-link w-dropdown-link"
      }`}
    >
      {label}
    </a>
  ) : (
    <a
      href={href}
      className={customStyle ? customStyle : "dropdown-link w-dropdown-link"}
    >
      {label}
    </a>
  );
};

export default LinkItem;
