export default function Footer({ dictionary }: { dictionary: any }) {
    return (
        <footer className="bg-green-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Dog Lovers. {dictionary.footer.createdBy}.<br />{dictionary.footer.rights}</p>
            </div>
        </footer>
    );
}
