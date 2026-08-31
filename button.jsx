
function Button() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button className="back-to-top" type="button" onClick={scrollToTop} aria-label="Back to top">
            Back to top <span aria-hidden="true">&#8593;</span>
        </button>
    );
}
export default Button;