import variables from '../../styles/variable.module.scss'

function Brand() {
    return (
        <>
            <div className="navbar-brand">
                <h3 className=''>BJ</h3>
            </div>
        </>
    )
}

function LinkItem(props){
    return (
        <>
            <li>
                <a href="">{props.text}</a>
            </li>
        </>
    )
}

function Links(){
    return (
        <>
        <ul>
            <LinkItem text="Sample Text" />
        </ul>
        </>
    )
}

export default function Navbar(){
    return (
        <>
        <div className="navbar">
            <Brand />
            <Links />
        </div>
        </>
    )
}