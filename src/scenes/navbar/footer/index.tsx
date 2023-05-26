import Logo from "@/assets/Logo.png";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eos
            esse sed sint quisquam consequatur possimus est minima impedit
            molestiae!
          </p>
          <p>@Copyright</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div>
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>(123)456-789</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
