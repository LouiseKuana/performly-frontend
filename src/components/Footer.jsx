export default function Footer() {
    return(
        <footer className="fixed bottom-0 left-0 w-full text-[var(--color-platinum)]/70 py-6 text-center font-serif">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Performly Lab. Open source project.
            </p>
        </footer>
    );
}


