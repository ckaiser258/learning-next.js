import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* Image from nextjs forces us to use width and height properties, otherwise throws an error 
          and also makes the image responsive based on those properties.
          It also optimizes loading speeds by only loading the image once it's in view
        */}
        <Image src="/logo.png" width={128} height={77} />
      </div>
      {/* href gets added to the Link tag and the a tag stays empty */}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
