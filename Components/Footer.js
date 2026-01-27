export default function Footer(){
    return <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 text-center">
                &copy; {new Date().getFullYear()} Blog
            </footer>
}