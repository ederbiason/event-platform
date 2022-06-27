import { FooterImg } from "./FooterImg";

export function Footer() {
    return(
        <footer className="w-full py-5 px-8 lg:flex lg:flex-row gap-5 items-center lg:justify-start flex-col text-center border-t border-gray-600 lg:absolute lg:bottom-0 bg-gray-900">
            <FooterImg />
            <span>Desenvolvido por <a href="https://github.com/ederbiason" target="_blank" className="underline underline-offset-2">Eder Biason</a>🚀</span>
        </footer>
    )
}