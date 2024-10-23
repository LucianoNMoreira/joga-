import './styles.css'

export default function Sidebar() {
    return(
        <div id='sidebar-component'>
            <h3>Sidebar</h3>
            <ul>
                <li>
                    <a href='/'>Início</a>
                </li>
                <li>
                    <a href='/login'>Login</a>
                </li>
            </ul>
        </div>
    )
}
