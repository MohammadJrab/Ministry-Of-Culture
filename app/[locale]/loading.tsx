export default function LoadingScreen()
{
    return (
        <section className="h-screen w-full flex items-center justify-center animate-appear">
            <div className="loader">
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
                <div className="loader__circle"></div>
            </div>
        </section>
    )
}