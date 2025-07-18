import Logo from "./Logo";

export default function Footer () {
    return (
        <footer className="w-full py-4 px-8 bg-[#251b54] text-white flex flex-col text-sm gap-4 md:gap-4">
            <div className="w-full flex items-center justify-between">
                <Logo className="" />
                <div className="font-bold">
                    <a href="mailto:arikusumatuti@gmail.com">Contact Us</a>
                </div>
            </div>
            <hr />
            <div className="md:pt-0 text-center">
                <p>Copyright &copy; 2025 Ari Kusumastuti, Isa Irawan, Kistosil Fahim, Mario Rosario Guarracino, and Akhmad Roziqin</p>
            </div>
        </footer>
    )
}