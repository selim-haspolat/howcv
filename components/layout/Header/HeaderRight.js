import Link from 'next/link'

export default function HeaderRight() {
    return (
        <>
            <div className="header-right flex flex-align-c flex-content-e">
                <div className="customer">
                    <Link href="/login">
                        <i className="las la-user-circle" />
                        <span>Log In</span>
                    </Link>
                </div>
                <div className="buttons">
                    <Link href="/register" className="button fullfield">
                        <i className="las la-headset" />
                        <span>Register</span>
                    </Link>
                </div>
            </div>

        </>
    )
}