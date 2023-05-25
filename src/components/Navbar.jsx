import Link from 'next/link';


export default function Navbar() {
    return (
        <div className="navbar border-b-2 my-6 border-black">
        <div className="flex-1">
            <Link href='/' className="btn btn-ghost normal-case text-xl">Homepage</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
                <Link href="/comparisons">
                    Comparisons
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                <ul className="p-2 bg-base-100">
                <li><Link href='/datasets/tweets'>Feature Selection</Link></li>
                <li><Link href='/datasets/keywords'>Model</Link></li>
                </ul>
            </li>

            <li tabIndex={1}>
                <Link href="/datasets">
                    Datasets
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                <ul className="p-2 bg-base-100">
                <li><Link href='/datasets/tweets'>Tweets</Link></li>
                <li><Link href='/datasets/keywords'>Keywords</Link></li>
                </ul>
            </li>
            <li><a>Item 3</a></li>
            </ul>
        </div>
        </div>
    )
}