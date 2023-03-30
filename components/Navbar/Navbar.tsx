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

export default function Navbar(){
    return (
        <>
        <div className="navbar">
            <Brand />
            <ul>
                <LinkItem text="Sample Text" />
                <LinkItem text="Sample Text" />
                <LinkItem text="Sample Text" />
            </ul>
        </div>
        </>
    )
}