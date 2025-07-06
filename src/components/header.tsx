import NavBar from "./navbar";


export default function Header(){
    return (
        <header className="flex justify-between items-center">
            <div>
                <p>Africa(Mauritius)</p>
            </div>
            <NavBar />
            <div>
                <p>90:30:30</p>
            </div>
        </header>
    );
}