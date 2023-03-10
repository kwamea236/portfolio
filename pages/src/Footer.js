
function Footer({title}){
    return(
        <section>
            <div className="text-end md:text-center">
                <p className="text-sm text-black px-6 py-6 dark:text-white">copyright &copy; 2023 <span className="font-dancing italic font-bold">{title}</span>, All right reserved</p>
            </div>
        </section>
    )
}

export default Footer;