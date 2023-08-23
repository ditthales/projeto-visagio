import SocialMediaButton from "../atoms/SocialMediaButton"

const FooterContent = () => {
    return (
                    <div className="flex flex-row justify-center items-center px-10 py-5">
                        <div className="flex flex-row gap-6">
                            <SocialMediaButton href="https://www.linkedin.com/in/thalesvgfraga/" image="./linkedin-logo.png"/>
                            <SocialMediaButton href="https://github.com/ditthales" image="./github-logo.png"/>
                        </div>
                        <div className="flex-grow"></div>
                        <p>© Desenvolvido por Thales Fraga.</p>
                    </div>
    )
}

export default FooterContent